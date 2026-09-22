import "./globals.css";
import { MSWProvider } from "./MSWProvider";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <MSWProvider>{children}</MSWProvider>
      </body>
    </html>
  );
}
