import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NotionSync — Auto-populate Notion with your assignments",
  description: "Connect Canvas, Blackboard, or Moodle to your Notion workspace. Assignments, deadlines, and grades synced automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cf6ea921-2747-4da0-b198-28b396e45b94"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
