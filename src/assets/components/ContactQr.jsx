import { QRCodeCanvas } from "qrcode.react";

const ContactQr = () => {
  const contactUrl = `${window.location.origin}/contact.vcf`;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-xl font-semibold mb-4">Scan to Save Contact</h2>
      <QRCodeCanvas
        value={contactUrl} // points to the real .vcf file
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
        level="Q"
        includeMargin={true}
      />
      <p className="mt-2 text-sm text-gray-500">
        Scan the QR to download contact
      </p>
      <a
        href={contactUrl}
        download="contact.vcf"
        className="mt-4 text-blue-600 underline"
      >
        Download Contact
      </a>
    </div>
  );
};

export default ContactQr;
