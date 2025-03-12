import { inter } from "@/app/ui/styles/fonts/fonts.font";
import "@/app/ui/styles/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
