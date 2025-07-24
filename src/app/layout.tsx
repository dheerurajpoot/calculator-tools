import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Calculator Tools Hub - Free Online Calculators",
	description:
		"Professional calculator tools including age, EMI, percentage, BMI, GPA, and AdSense revenue calculators. Fast, accurate, and free to use.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
