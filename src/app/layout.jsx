import "./globals.scss";

export const metadata= {
  title: "Default template",
  description: "Custom next app generation",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
