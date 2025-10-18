import React, { useState } from "react";
import QRCode from "qrcode";

export default function VCardQRCode() {
  const [qrUrl, setQrUrl] = useState("");

  const contact = {
    firstName: "Nimna",
    lastName: "KP",
    company: "",
    phone: "+971562411081",
    email: "",
  };

  const generateQRCode = async () => {
    // Create vCard string
    const vCard = `BEGIN:VCARD
VERSION:3.0
N:${contact.lastName};${contact.firstName};;;
FN:${contact.firstName} ${contact.lastName}
ORG:${contact.company}
TEL;TYPE=CELL:${contact.phone}
EMAIL;TYPE=INTERNET:${contact.email}
END:VCARD`;

    try {
      // Convert vCard to QR code
      const url = await QRCode.toDataURL(vCard, { type: "image/png" });
      setQrUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-lg"
        onClick={generateQRCode}
      >
        Generate Contact QR
      </button>

      {qrUrl && (<div className="w-fit h-fit flex flex-col items-center gap-3">
        <h3 className="text-lg font-semibold ">
          scan to Add Contact
        </h3>
        <img src={qrUrl} alt="Contact QR Code" />

        <p className="text-sm font-light">
          Scan the code to add the contact to your device
        </p>
      </div>)}
    </div>
  );
}
