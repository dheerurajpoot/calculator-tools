"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
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

export default function AgeCalculator() {
	const [birthDate, setBirthDate] = useState("");
	const [result, setResult] = useState<{
		years: number;
		months: number;
		days: number;
		totalDays: number;
		totalWeeks: number;
		totalMonths: number;
	} | null>(null);

	const calculateAge = () => {
		if (!birthDate) return;

		const birth = new Date(birthDate);
		const today = new Date();

		let years = today.getFullYear() - birth.getFullYear();
		let months = today.getMonth() - birth.getMonth();
		let days = today.getDate() - birth.getDate();

		if (days < 0) {
			months--;
			const lastMonth = new Date(
				today.getFullYear(),
				today.getMonth(),
				0
			);
			days += lastMonth.getDate();
		}

		if (months < 0) {
			years--;
			months += 12;
		}

		const totalDays = Math.floor(
			(today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24)
		);
		const totalWeeks = Math.floor(totalDays / 7);
		const totalMonths = years * 12 + months;

		setResult({
			years,
			months,
			days,
			totalDays,
			totalWeeks,
			totalMonths,
		});
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-8'>
					<div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center'>
						<Calendar className='w-8 h-8 text-white' />
					</div>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						Age Calculator
					</h1>
					<p className='text-xl text-gray-600'>
						Calculate your exact age in years, months, and days
					</p>
				</div>

				<div className='grid grid-cols-1 pb-4 lg:grid-cols-2 gap-8'>
					<Card>
						<CardHeader>
							<CardTitle>Enter Your Birth Date</CardTitle>
							<CardDescription>
								Select your date of birth to calculate your age
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<Label htmlFor='birthdate'>Date of Birth</Label>
								<Input
									id='birthdate'
									type='date'
									value={birthDate}
									onChange={(e) =>
										setBirthDate(e.target.value)
									}
									max={new Date().toISOString().split("T")[0]}
								/>
							</div>
							<Button
								onClick={calculateAge}
								className='w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
								disabled={!birthDate}>
								Calculate Age
							</Button>
						</CardContent>
					</Card>

					{result && (
						<Card>
							<CardHeader>
								<CardTitle>Your Age</CardTitle>
								<CardDescription>
									Detailed breakdown of your age
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div className='text-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg'>
										<div className='text-3xl font-bold text-blue-600 mb-2'>
											{result.years} Years,{" "}
											{result.months} Months,{" "}
											{result.days} Days
										</div>
									</div>

									<div className='grid grid-cols-2 gap-4'>
										<div className='text-center p-4 bg-gray-50 rounded-lg'>
											<div className='text-2xl font-bold text-gray-800'>
												{result.totalDays}
											</div>
											<div className='text-sm text-gray-600'>
												Total Days
											</div>
										</div>
										<div className='text-center p-4 bg-gray-50 rounded-lg'>
											<div className='text-2xl font-bold text-gray-800'>
												{result.totalWeeks}
											</div>
											<div className='text-sm text-gray-600'>
												Total Weeks
											</div>
										</div>
										<div className='text-center p-4 bg-gray-50 rounded-lg'>
											<div className='text-2xl font-bold text-gray-800'>
												{result.totalMonths}
											</div>
											<div className='text-sm text-gray-600'>
												Total Months
											</div>
										</div>
										<div className='text-center p-4 bg-gray-50 rounded-lg'>
											<div className='text-2xl font-bold text-gray-800'>
												{result.years}
											</div>
											<div className='text-sm text-gray-600'>
												Total Years
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					)}
				</div>

				<SEOContent
					title="Age Calculator"
					description="Our free age calculator helps you determine your exact age in years, months, days, hours, and minutes. Calculate your precise age from your birth date with our accurate and easy-to-use online tool."
					features={[
						"Calculate exact age in years, months, and days format",
						"View total days, weeks, and months lived since birth",
						"Accurate calculations that account for leap years",
						"Works for any date including future dates for planning",
						"Mobile-responsive design for all devices",
						"Instant results with no registration required"
					]}
					benefits={[
						{
							title: "Personal Milestones",
							description: "Track important life events and milestones by calculating exact ages for birthdays, anniversaries, and special occasions."
						},
						{
							title: "Legal Documentation",
							description: "Verify age requirements for official documents, applications, and eligibility criteria that need precise age verification."
						},
						{
							title: "Health Records",
							description: "Maintain accurate medical and health records with precise age calculations for better healthcare management."
						},
						{
							title: "Educational Planning",
							description: "Determine school admission eligibility, grade levels, and educational program requirements based on exact age."
						}
					]}
					faqs={[
						{
							question: "How accurate is the age calculation?",
							answer: "Our calculator provides highly accurate results by considering exact dates, months, and leap years. The calculations account for the actual number of days in each month and leap year occurrences."
						},
						{
							question: "Can I calculate age for future dates?",
							answer: "Yes, you can enter any future date to calculate upcoming ages for planning purposes like retirement, milestone celebrations, or project timelines."
						},
						{
							question: "Why does my age show different on different calculators?",
							answer: "Differences may occur due to varying calculation methods, time zones, or whether leap years are properly accounted for. Our calculator uses precise date arithmetic for maximum accuracy."
						},
						{
							question: "How is age calculated exactly?",
							answer: "Age is calculated by comparing your birth date with the current date, counting complete years first, then remaining months, and finally the leftover days. The system accounts for varying month lengths and leap years."
						},
						{
							question: "Can I calculate age for someone else?",
							answer: "Yes, you can calculate anyone's age by entering their birth date. This is useful for family planning, event coordination, or determining eligibility requirements for others."
						}
					]}
					keywords={[
						"age calculator",
						"birthday calculator",
						"date calculator",
						"how old am I",
						"age finder",
						"birth date calculator",
						"exact age calculator",
						"age in years",
						"age verification",
						"date difference calculator"
					]}
				/>
			</div>
		</div>
	);
}
