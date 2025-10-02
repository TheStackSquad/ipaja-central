// app/layout.jsx
import "./globals.css";
import Header from "@/components/common/Header";

export const metadata = {
  // Main SEO
  title: "Agege LG | Leadership, Legacy, Progress",
  description:
    "Building a legacy of excellence through visionary leadership and sustainable progress. Empowering communities, fostering innovation, and creating lasting impact.",
  keywords: [
    "Agege Government",
    "Leadership",
    "Legacy",
    "Progress",
    "Community Empowerment",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: "Your Name or Organization" }],

  // Open Graph (for social media sharing like Facebook, LinkedIn)
  openGraph: {
    title: "Agege LG | Leadership, Legacy, Progress",
    description:
      "Building a legacy of excellence through visionary leadership and sustainable progress. Empowering communities, fostering innovation, and creating lasting impact.",
    url: "https://www.agegecentral.org", // Replace with your website URL
    siteName: "Agege Central",
    images: [
      {
        url: "https://www.ipajacentral.org/og-image.jpg", // Replace with a high-quality image URL
        width: 1200,
        height: 630,
        alt: "A vibrant image representing the community and progress of Ipaja Central",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card (for Twitter sharing)
  twitter: {
    card: "summary_large_image",
    title: "Agege Central | Leadership, Legacy, Progress",
    description:
      "Building a legacy of excellence through visionary leadership and sustainable progress. Empowering communities, fostering innovation, and creating lasting impact.",
    images: ["https://www.ipajacentral.org/twitter-image.jpg"], // Replace with a high-quality image URL
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
          <Header />
          {children}
      </body>
    </html>
  );
}
