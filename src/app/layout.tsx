import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "M. Ashrafuzzaman | DevOps Engineer",
  description: "M. Ashrafuzzaman — DevOps Engineer with 8+ years in IT, building reliable cloud infrastructure on AWS with Docker, Terraform, Ansible, CI/CD (GitHub Actions, Jenkins), and Prometheus/Grafana/CloudWatch observability.",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

const themeInitScript = `
  (function () {
    try {
      var stored = localStorage.getItem('theme');
      if (stored === 'light') {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
