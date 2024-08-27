import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F3F4F6]">{children}</body>
    </html>
  );
}
