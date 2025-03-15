import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";


export const metadata: Metadata = {
  title: "Alma Leads App",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <html lang="en">
            <body>{children}</body>
            </html>
        </AuthProvider>
    );
}
