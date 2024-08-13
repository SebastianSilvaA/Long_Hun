import { Open_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/primary/Navbar";

// Importa Open Sans
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata = {
  title: "Long Hun",
  description: "Long Hun - Page ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" defer></script>
        <link rel="icon" href="/assets/long.png" />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          />
      </Head>
      <body className={`bg-black ${openSans.variable}`}>
        <Navbar />
        {children}
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
