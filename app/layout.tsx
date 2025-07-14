import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Nunito, Lora } from "next/font/google";
import Footer from "@/components/footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(nunito.variable, lora.variable)}>
      <body className="antialiased text-evergreen dark:bg-black dark:text-gray-400 bg-sun-cream min-h-screen flex flex-col">
        <Providers>
          <div className="flex-1 flex flex-col">
            {children}
          </div>          
        </Providers>
      </body>
    </html>
  );
}
