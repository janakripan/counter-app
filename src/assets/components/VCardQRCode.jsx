import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import QRCode from "qrcode";

export default function VCardQRCode() {
  const [qrUrl, setQrUrl] = useState("");

  const generateQRCode = async (values) => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
N:${values.lastName};${values.firstName};;;
FN:${values.firstName} ${values.lastName}
ORG:${values.company}
TEL;TYPE=CELL:${values.phone}
EMAIL;TYPE=INTERNET:${values.email}
END:VCARD`;

    try {
      const url = await QRCode.toDataURL(vCard, { type: "image/png" });
      setQrUrl(url);
    } catch (error) {
      console.error("Error generating QR:", error);
    }
  };

  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = "contact_qr.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center">Generate Contact QR</h2>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          company: "",
          phone: "",
          email: "",
        }}
        onSubmit={(values) => generateQRCode(values)}
      >
        {({ isSubmitting }) => (
          <Form className="w-full flex flex-col gap-3">
            <div className="flex gap-3">
              <Field
                name="firstName"
                placeholder="First Name"
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Field
                name="lastName"
                placeholder="Last Name"
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <Field
              name="company"
              placeholder="Company Name"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Field
              name="phone"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <Field
              name="email"
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              {isSubmitting ? "Generating..." : "Generate QR Code"}
            </button>
          </Form>
        )}
      </Formik>

      {qrUrl && (
        <div className="flex flex-col items-center gap-3 mt-4">
          <h3 className="text-lg font-semibold">Scan to Add Contact</h3>
          <img src={qrUrl} alt="Contact QR Code" className="w-48 h-48" />
          <p className="text-sm text-gray-500">
            Scan to save this contact on your device
          </p>

          <button
            onClick={downloadQRCode}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
          >
            Download QR
          </button>
        </div>
      )}
    </div>
  );
}
