import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Reaction Role Automator",
  description: "Automate Discord role assignments via reactions. Configure reaction-role mappings and let the bot handle the rest."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="898b663a-541a-4868-bc97-55ec50c3379d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
