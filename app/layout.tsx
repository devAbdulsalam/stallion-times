import type { Metadata } from "next";
import { Recursive } from "next/font/google";

import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Stallion Times",
    template: "%s - Stallion Times",
  },
  description:
    "Stallion Times: Your go-to source for breaking news and insightful analysis.",
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <main className="min-h-[calc(100vh-3.5rem-1px)]">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
