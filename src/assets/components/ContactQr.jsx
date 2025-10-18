import { QRCodeCanvas } from "qrcode.react";

const ContactQr = () => {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:Doe;John;;;
FN:John Doe
ORG:My Company
TITLE:Developer
TEL;TYPE=CELL:+1234567890
EMAIL:john@example.com
END:VCARD
  `.trim();

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-xl font-semibold mb-4">Scan to Save Contact</h2>
      <QRCodeCanvas
        value={vCardData}
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
        level="Q"
        includeMargin={true}
      />
      <p className="mt-2 text-sm text-gray-500">
        Point your camera to save contact
      </p>
    </div>
  );
};

export default ContactQr;
