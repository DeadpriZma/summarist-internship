import { Roboto } from "next/font/google";
import "./globals.css";
import { LibraryProvider } from "./components/LibraryContext";
import { PremiumProvider } from "@/context/PremiumContext";
PremiumProvider

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Summarist Home Page",
  description: "Gain more knowledge in less time with Summarist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <PremiumProvider>
          <LibraryProvider>
            {children}
          </LibraryProvider>
        </PremiumProvider>
      </body>
    </html>
  );
}
