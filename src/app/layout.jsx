import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YMDB clone",
  description: "Es un clonado de IMDB",
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* <title>Ymdb clobe</title> */}
      {/* <head/> */}
      <link rel= 'icon' href='../../public/favicon.ico'/>
      <html lang="en">
        
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
