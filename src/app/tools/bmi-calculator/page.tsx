"use client";

import { useState } from "react";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { SEOContent } from "@/components/seo-content";

export default function BMICalculator() {
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [unit, setUnit] = useState("metric");
	const [result, setResult] = useState<{
		bmi: number;
		category: string;
		color: string;
	} | null>(null);

	const getBMICategory = (bmi: number) => {
		if (bmi < 18.5)
			return { category: "Underweight", color: "text-blue-600" };
		if (bmi < 25)
			return { category: "Normal weight", color: "text-green-600" };
		if (bmi < 30)
			return { category: "Overweight", color: "text-yellow-600" };
		return { category: "Obese", color: "text-red-600" };
	};

	const calculateBMI = () => {
		let weightKg = Number.parseFloat(weight);
		let heightM = Number.parseFloat(height);

		if (!weightKg || !heightM) return;

		if (unit === "imperial") {
			weightKg = weightKg * 0.453592; // pounds to kg
			heightM = heightM * 0.0254; // inches to meters
		} else {
			heightM = heightM / 100; // cm to meters
		}

		const bmi = weightKg / (heightM * heightM);
		const categoryInfo = getBMICategory(bmi);

		setResult({
			bmi: Math.round(bmi * 10) / 10,
			category: categoryInfo.category,
			color: categoryInfo.color,
		});
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-8'>
					<div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center'>
						<Scale className='w-8 h-8 text-white' />
					</div>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						BMI Calculator
					</h1>
					<p className='text-xl text-gray-600'>
						Calculate your Body Mass Index and health status
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<Card>
						<CardHeader>
							<CardTitle>Enter Your Details</CardTitle>
							<CardDescription>
								Provide your weight and height to calculate BMI
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<Label>Unit System</Label>
								<RadioGroup
									value={unit}
									onValueChange={setUnit}
									className='flex space-x-4 mt-2'>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='metric'
											id='metric'
										/>
										<Label htmlFor='metric'>
											Metric (kg, cm)
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='imperial'
											id='imperial'
										/>
										<Label htmlFor='imperial'>
											Imperial (lbs, inches)
										</Label>
									</div>
								</RadioGroup>
							</div>

							<div>
								<Label htmlFor='weight'>
									Weight ({unit === "metric" ? "kg" : "lbs"})
								</Label>
								<Input
									id='weight'
									type='number'
									placeholder={
										unit === "metric"
											? "e.g., 70"
											: "e.g., 154"
									}
									value={weight}
									onChange={(e) => setWeight(e.target.value)}
								/>
							</div>

							<div>
								<Label htmlFor='height'>
									Height (
									{unit === "metric" ? "cm" : "inches"})
								</Label>
								<Input
									id='height'
									type='number'
									placeholder={
										unit === "metric"
											? "e.g., 175"
											: "e.g., 69"
									}
									value={height}
									onChange={(e) => setHeight(e.target.value)}
								/>
							</div>

							<Button
								onClick={calculateBMI}
								className='w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
								disabled={!weight || !height}>
								Calculate BMI
							</Button>
						</CardContent>
					</Card>

					{result && (
						<Card>
							<CardHeader>
								<CardTitle>Your BMI Result</CardTitle>
								<CardDescription>
									Body Mass Index calculation and category
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div className='text-center p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg'>
										<div className='text-4xl font-bold text-orange-600 mb-2'>
											{result.bmi}
										</div>
										<div
											className={`text-lg font-semibold ${result.color}`}>
											{result.category}
										</div>
									</div>

									<div className='space-y-2'>
										<h3 className='font-semibold'>
											BMI Categories:
										</h3>
										<div className='space-y-1 text-sm'>
											<div className='flex justify-between'>
												<span>Underweight</span>
												<span className='text-blue-600'>
													Below 18.5
												</span>
											</div>
											<div className='flex justify-between'>
												<span>Normal weight</span>
												<span className='text-green-600'>
													18.5 - 24.9
												</span>
											</div>
											<div className='flex justify-between'>
												<span>Overweight</span>
												<span className='text-yellow-600'>
													25 - 29.9
												</span>
											</div>
											<div className='flex justify-between'>
												<span>Obese</span>
												<span className='text-red-600'>
													30 and above
												</span>
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					)}
				</div>

				<SEOContent
					title="BMI Calculator"
					description="Our free BMI calculator helps you determine your Body Mass Index to assess your weight status and health risks. Calculate your BMI instantly using metric or imperial units with our accurate and easy-to-use tool."
					features={[
						"Calculate BMI using both metric and imperial units",
						"Instant health category classification (Underweight, Normal, Overweight, Obese)",
						"Detailed BMI range information and health guidelines",
						"Mobile-friendly responsive design for all devices",
						"100% free with no registration required",
						"Real-time calculations with instant results"
					]}
					benefits={[
						{
							title: "Health Assessment",
							description: "Quickly understand your weight status and potential health risks associated with your BMI score."
						},
						{
							title: "Fitness Planning",
							description: "Use BMI results to set realistic fitness goals and track your progress over time."
						},
						{
							title: "Medical Reference",
							description: "Valuable screening tool that healthcare professionals use for initial health assessments."
						},
						{
							title: "Educational Tool",
							description: "Learn about healthy weight ranges and understand the relationship between height and weight."
						}
					]}
					faqs={[
						{
							question: "What is BMI and how is it calculated?",
							answer: "BMI (Body Mass Index) is calculated by dividing your weight in kilograms by your height in meters squared. The formula is: BMI = weight(kg) / height(m)². It provides a simple numeric measure of a person's thickness or thinness."
						},
						{
							question: "Is BMI accurate for everyone?",
							answer: "BMI is a general screening tool but has limitations. It may not be accurate for athletes with high muscle mass, pregnant women, children, or elderly individuals. It doesn't distinguish between muscle and fat mass."
						},
						{
							question: "What are the BMI categories?",
							answer: "Underweight: Below 18.5, Normal weight: 18.5-24.9, Overweight: 25-29.9, Obese: 30 and above. These ranges help identify potential health risks associated with weight."
						},
						{
							question: "Should I rely solely on BMI for health assessment?",
							answer: "No, BMI should be used as one tool among many. Consider consulting healthcare professionals who can evaluate body composition, waist circumference, family history, and other health factors for a comprehensive assessment."
						},
						{
							question: "How often should I check my BMI?",
							answer: "For most adults, checking BMI every 3-6 months is sufficient unless you're actively working on weight management goals. More frequent monitoring may be helpful during significant lifestyle changes."
						}
					]}
					keywords={[
						"BMI calculator",
						"body mass index",
						"weight calculator",
						"health assessment",
						"ideal weight",
						"obesity calculator",
						"weight status",
						"health screening",
						"fitness calculator",
						"weight management"
					]}
				/>
			</div>
		</div>
	);
}
