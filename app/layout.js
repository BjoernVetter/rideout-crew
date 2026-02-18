import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://rideoutcrew.de"),

  title: {
    default: "Motorradgruppe Düsseldorf – RideOut Crew",
    template: "%s | RideOut Crew",
  },

  description:
    "Motorradgruppe Düsseldorf – RideOut Crew ist eine aktive Biker Community aus Düsseldorf, Erkrath und Mettmann. Gemeinsame Ausfahrten, WhatsApp Gruppe und neue Kontakte in NRW.",

  keywords: [
    "Motorradgruppe Düsseldorf",
    "Biker Community Düsseldorf",
    "Motorrad Düsseldorf",
    "Motorradgruppe NRW",
    "Motorrad Ausfahrten Düsseldorf",
    "RideOut Crew",
  ],

  openGraph: {
    title: "Motorradgruppe Düsseldorf – RideOut Crew",
    description:
      "Werde Teil der RideOut Crew – Motorradgruppe aus Düsseldorf für gemeinsame Ausfahrten in NRW.",
    url: "https://rideoutcrew.de",
    siteName: "RideOut Crew",
    locale: "de_DE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
