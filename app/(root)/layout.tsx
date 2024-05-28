import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main>
    SIDEBAR
    {/* children is  page tsx */}
    {children}
  </main>
  );
}