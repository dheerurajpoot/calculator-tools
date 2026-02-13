import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constant";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,	
	keywords:
		"calculator, online calculator, free calculator, age calculator, EMI calculator, BMI calculator, GPA calculator, percentage calculator, AdSense revenue calculator",
	authors: [{ name: SITE_AUTHOR }],
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>

				{/* Search Console Verification Code  */}
				<meta
					name='google-site-verification'
					content='XXXXXXXXXXXXXXXXXXXXXXXX'
				/>

				{/* Google Analytics Script */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX'
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-XXXXXXXXX');
						`,
					}}
				/>

				{/* Google Adsense code */}
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXXXXXXXXXX'
					crossOrigin='anonymous'
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
