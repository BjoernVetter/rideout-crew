import "./globals.css";

export const metadata = {
  title: "RideOut Crew",
  description: "Biker Community Düsseldorf & Umgebung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
