"use client";

import { useState } from "react";
import { DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { SEOContent } from "@/components/seo-content";

export default function AdSenseCalculator() {
	const [pageViews, setPageViews] = useState("");
	const [ctr, setCtr] = useState("");
	const [cpc, setCpc] = useState("");
	const [result, setResult] = useState<{
		dailyRevenue: number;
		monthlyRevenue: number;
		yearlyRevenue: number;
		clicks: number;
	} | null>(null);

	const calculateRevenue = () => {
		const views = Number.parseFloat(pageViews);
		const clickRate = Number.parseFloat(ctr) / 100;
		const costPerClick = Number.parseFloat(cpc);

		if (!views || !clickRate || !costPerClick) return;

		const clicks = views * clickRate;
		const dailyRevenue = clicks * costPerClick;
		const monthlyRevenue = dailyRevenue * 30;
		const yearlyRevenue = dailyRevenue * 365;

		setResult({
			dailyRevenue: Math.round(dailyRevenue * 100) / 100,
			monthlyRevenue: Math.round(monthlyRevenue * 100) / 100,
			yearlyRevenue: Math.round(yearlyRevenue * 100) / 100,
			clicks: Math.round(clicks * 100) / 100,
		});
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-8'>
					<div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center'>
						<DollarSign className='w-8 h-8 text-white' />
					</div>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						AdSense Revenue Calculator
					</h1>
					<p className='text-xl text-gray-600'>
						Estimate your AdSense earnings and revenue potential
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<Card>
						<CardHeader>
							<CardTitle>Enter Your Website Stats</CardTitle>
							<CardDescription>
								Provide your traffic and performance metrics
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<Label htmlFor='pageViews'>
									Daily Page Views
								</Label>
								<Input
									id='pageViews'
									type='number'
									placeholder='e.g., 1000'
									value={pageViews}
									onChange={(e) =>
										setPageViews(e.target.value)
									}
								/>
							</div>

							<div>
								<Label htmlFor='ctr'>
									Click-Through Rate (CTR) %
								</Label>
								<Input
									id='ctr'
									type='number'
									step='0.01'
									placeholder='e.g., 1.5 (typical range: 0.5-3%)'
									value={ctr}
									onChange={(e) => setCtr(e.target.value)}
								/>
							</div>

							<div>
								<Label htmlFor='cpc'>
									Cost Per Click (CPC) $
								</Label>
								<Input
									id='cpc'
									type='number'
									step='0.01'
									placeholder='e.g., 0.50 (typical range: $0.20-$2.00)'
									value={cpc}
									onChange={(e) => setCpc(e.target.value)}
								/>
							</div>

							<Button
								onClick={calculateRevenue}
								className='w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600'
								disabled={!pageViews || !ctr || !cpc}>
								Calculate Revenue
							</Button>
						</CardContent>
					</Card>

					{result && (
						<Card>
							<CardHeader>
								<CardTitle>Revenue Estimates</CardTitle>
								<CardDescription>
									Your potential AdSense earnings
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div className='text-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg'>
										<div className='text-3xl font-bold text-yellow-600 mb-2'>
											${result.dailyRevenue}
										</div>
										<div className='text-sm text-gray-600'>
											Daily Revenue
										</div>
									</div>

									<div className='grid grid-cols-1 gap-4'>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Daily Clicks
											</span>
											<span className='font-semibold'>
												{result.clicks}
											</span>
										</div>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Monthly Revenue
											</span>
											<span className='font-semibold text-green-600'>
												${result.monthlyRevenue}
											</span>
										</div>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Yearly Revenue
											</span>
											<span className='font-semibold text-green-600'>
												${result.yearlyRevenue}
											</span>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					)}
				</div>

				<SEOContent
					title="AdSense Revenue Calculator"
					description="Our free AdSense revenue calculator helps publishers estimate potential earnings from Google AdSense. Calculate daily, monthly, and yearly revenue projections based on page views, CTR, and CPC metrics."
					features={[
						"Estimate daily, monthly, and yearly AdSense revenue",
						"Calculate based on page views, CTR, and CPC inputs",
						"Understand key factors affecting AdSense earnings",
						"Optimize content strategy for better monetization",
						"Mobile-friendly interface for publishers on-the-go",
						"100% free with no registration required"
					]}
					benefits={[
						{
							title: "Revenue Planning",
							description: "Plan your content strategy and business decisions based on realistic revenue projections and earning potential."
						},
						{
							title: "Performance Optimization",
							description: "Identify which metrics to improve for maximum AdSense earnings and content monetization effectiveness."
						},
						{
							title: "Niche Selection",
							description: "Understand which content niches and topics typically generate higher CPC rates and better monetization."
						},
						{
							title: "Growth Strategy",
							description: "Set realistic traffic and revenue goals based on industry benchmarks and calculated projections."
						}
					]}
					faqs={[
						{
							question: "What is a realistic CTR for AdSense?",
							answer: "Typical CTR ranges from 0.5% to 3% depending on niche, content quality, and audience engagement. High-quality content in profitable niches like finance or insurance can achieve higher CTRs."
						},
						{
							question: "What CPC should I expect for my niche?",
							answer: "CPC varies widely by niche: Finance ($2-5), Insurance ($3-8), Legal ($2-6), Technology ($1-3), Health ($1-2), General content ($0.20-1.00). Use industry benchmarks as starting points."
						},
						{
							question: "How many page views do I need to make $100/month?",
							answer: "This depends on your CTR and CPC. With average metrics (1.5% CTR, $0.50 CPC), you'd need approximately 13,333 page views per month, or about 444 daily page views."
						},
						{
							question: "What factors most impact AdSense earnings?",
							answer: "Top factors include: content niche (affects CPC), traffic quality and source, ad placement optimization, page layout, content relevance to ads, and audience demographics."
						},
						{
							question: "How can I improve my AdSense revenue?",
							answer: "Focus on high-quality, original content in profitable niches, optimize ad placement above the fold, improve page loading speed, increase user engagement, and target high-value keywords."
						}
					]}
					keywords={[
						"AdSense calculator",
						"AdSense revenue calculator",
						"Google AdSense earnings",
						"ad revenue calculator",
						"CPC calculator",
						"CTR calculator",
						"website monetization",
						"publisher earnings",
						"ad income calculator",
						"content monetization"
					]}
				/>
			</div>
		</div>
	);
}
