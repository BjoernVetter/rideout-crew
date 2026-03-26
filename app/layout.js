import "./globals.css";

export const metadata = {
  title: "RideOut Crew – Motorradgruppe Düsseldorf & Umgebung",
  description:
    "RideOut Crew – Deine offene Motorradgruppe aus Düsseldorf. Gemeinsame Ausfahrten für alle Bikes & Fahrstile. Jetzt mitmachen!",
  keywords:
    "Motorradgruppe Düsseldorf, Biker Club Düsseldorf, Motorrad Community NRW, Motorradclub Düsseldorf, Bikergruppe Rheinland",
  authors: [{ name: "RideOut Crew" }],
  robots: "index, follow",
  openGraph: {
    title: "RideOut Crew – Motorradgruppe Düsseldorf",
    description:
      "Offene Motorradgruppe aus Düsseldorf. Alle Bikes, alle Fahrstile.",
    url: "https://rideoutcrew.de",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
