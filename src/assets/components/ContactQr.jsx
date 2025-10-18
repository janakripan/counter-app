import { QRCodeCanvas } from "qrcode.react";

const ContactQr = () => {
  const contactPageUrl = `${window.location.origin}/contact.html`;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-xl font-semibold mb-4">Scan to Add Contact</h2>
      <QRCodeCanvas
        value={contactPageUrl} // QR points to landing page
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
        level="Q"
        includeMargin={true}
      />
      <p className="mt-2 text-sm text-gray-500">
        Scan the QR to open the Add Contact page
      </p>
      <a
        href={contactPageUrl}
        className="mt-4 text-blue-600 underline"
      >
        Or open manually
      </a>
    </div>
  );
};

export default ContactQr;
