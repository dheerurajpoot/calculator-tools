"use client";

import { useState } from "react";
import { GraduationCap } from "lucide-react";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { SEOContent } from "@/components/seo-content";

export default function GPAConverter() {
	const [gpa, setGpa] = useState("");
	const [fromScale, setFromScale] = useState("");
	const [toScale, setToScale] = useState("");
	const [result, setResult] = useState<number | null>(null);

	const scales = {
		"4.0": { max: 4.0, name: "4.0 Scale (US)" },
		"5.0": { max: 5.0, name: "5.0 Scale (Weighted)" },
		"10.0": { max: 10.0, name: "10.0 Scale (India)" },
		"100": { max: 100, name: "Percentage (100)" },
	};

	const convertGPA = () => {
		const inputGPA = Number.parseFloat(gpa);
		const fromMax = scales[fromScale as keyof typeof scales]?.max;
		const toMax = scales[toScale as keyof typeof scales]?.max;

		if (!inputGPA || !fromMax || !toMax || fromScale === toScale) return;

		// Convert to percentage first, then to target scale
		const percentage = (inputGPA / fromMax) * 100;
		const convertedGPA = (percentage / 100) * toMax;

		setResult(Math.round(convertedGPA * 100) / 100);
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-8'>
					<div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center'>
						<GraduationCap className='w-8 h-8 text-white' />
					</div>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						GPA Converter
					</h1>
					<p className='text-xl text-gray-600'>
						Convert between different GPA scales and systems
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<Card>
						<CardHeader>
							<CardTitle>GPA Conversion</CardTitle>
							<CardDescription>
								Convert your GPA between different grading
								scales
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<Label htmlFor='gpa'>Enter GPA</Label>
								<Input
									id='gpa'
									type='number'
									step='0.01'
									placeholder='e.g., 3.5'
									value={gpa}
									onChange={(e) => setGpa(e.target.value)}
								/>
							</div>

							<div>
								<Label htmlFor='fromScale'>From Scale</Label>
								<Select
									value={fromScale}
									onValueChange={setFromScale}>
									<SelectTrigger>
										<SelectValue placeholder='Select source scale' />
									</SelectTrigger>
									<SelectContent>
										{Object.entries(scales).map(
											([key, scale]) => (
												<SelectItem
													key={key}
													value={key}>
													{scale.name}
												</SelectItem>
											)
										)}
									</SelectContent>
								</Select>
							</div>

							<div>
								<Label htmlFor='toScale'>To Scale</Label>
								<Select
									value={toScale}
									onValueChange={setToScale}>
									<SelectTrigger>
										<SelectValue placeholder='Select target scale' />
									</SelectTrigger>
									<SelectContent>
										{Object.entries(scales).map(
											([key, scale]) => (
												<SelectItem
													key={key}
													value={key}>
													{scale.name}
												</SelectItem>
											)
										)}
									</SelectContent>
								</Select>
							</div>

							<Button
								onClick={convertGPA}
								className='w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600'
								disabled={!gpa || !fromScale || !toScale}>
								Convert GPA
							</Button>
						</CardContent>
					</Card>

					{result !== null && (
						<Card>
							<CardHeader>
								<CardTitle>Conversion Result</CardTitle>
								<CardDescription>
									Your converted GPA
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div className='text-center p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg'>
										<div className='text-4xl font-bold text-indigo-600 mb-2'>
											{result}
										</div>
										<div className='text-sm text-gray-600'>
											{gpa} on{" "}
											{
												scales[
													fromScale as keyof typeof scales
												]?.name
											}{" "}
											= {result} on{" "}
											{
												scales[
													toScale as keyof typeof scales
												]?.name
											}
										</div>
									</div>

									<div className='space-y-2'>
										<h3 className='font-semibold'>
											Grade Equivalents:
										</h3>
										<div className='space-y-1 text-sm'>
											<div className='flex justify-between'>
												<span>A+ (Excellent)</span>
												<span className='text-green-600'>
													90-100%
												</span>
											</div>
											<div className='flex justify-between'>
												<span>A (Very Good)</span>
												<span className='text-green-600'>
													80-89%
												</span>
											</div>
											<div className='flex justify-between'>
												<span>B (Good)</span>
												<span className='text-blue-600'>
													70-79%
												</span>
											</div>
											<div className='flex justify-between'>
												<span>C (Average)</span>
												<span className='text-yellow-600'>
													60-69%
												</span>
											</div>
											<div className='flex justify-between'>
												<span>D (Below Average)</span>
												<span className='text-orange-600'>
													50-59%
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
					title="GPA Calculator"
					description="Our free GPA converter helps students convert grades between different educational systems including 4.0 scale, 5.0 scale, 10.0 scale, and percentage formats. Perfect for international students and academic transfers."
					features={[
						"Convert between 4.0, 5.0, 10.0, and percentage scales",
						"Support for weighted and unweighted GPA systems",
						"Instant conversion results with grade equivalencies",
						"Helpful for international student applications",
						"Mobile-friendly interface for students on-the-go",
						"100% free with no registration required"
					]}
					benefits={[
						{
							title: "International Applications",
							description: "Convert your grades to match the requirements of universities in different countries and educational systems."
						},
						{
							title: "Academic Transfers",
							description: "Easily convert GPA when transferring between institutions with different grading systems and scales."
						},
						{
							title: "Scholarship Applications",
							description: "Meet specific GPA requirements for scholarships and financial aid programs across different grading standards."
						},
						{
							title: "Grade Understanding",
							description: "Better understand how your grades compare across different educational systems and international standards."
						}
					]}
					faqs={[
						{
							question: "How accurate are GPA conversions between different scales?",
							answer: "Conversions provide approximate equivalencies since different institutions may have varying standards. The calculator uses standard conversion formulas, but always verify with your target institution for exact requirements."
						},
						{
							question: "What's the difference between weighted and unweighted GPA?",
							answer: "Unweighted GPA treats all courses equally (typically on a 4.0 scale), while weighted GPA gives extra points for honors, AP, or IB courses (often on a 5.0 scale). Weighted GPA can exceed 4.0."
						},
						{
							question: "Which GPA scale is used in different countries?",
							answer: "US typically uses 4.0 scale, India often uses 10.0 scale, UK uses percentage or letter grades, and many European countries use ECTS grading. Our converter handles these major systems."
						},
						{
							question: "How do I convert my percentage to GPA?",
							answer: "Enter your percentage grade and select Percentage as the source scale, then choose your target GPA scale (4.0, 5.0, or 10.0). The calculator will provide the equivalent GPA value."
						},
						{
							question: "Should I convert my GPA for every application?",
							answer: "Check each institution's requirements. Some prefer original grades with explanation, others require converted GPA. When in doubt, provide both original and converted grades for complete transparency."
						}
					]}
					keywords={[
						"GPA calculator",
						"GPA converter",
						"grade point average",
						"4.0 scale converter",
						"10.0 scale GPA",
						"percentage to GPA",
						"international GPA conversion",
						"student grade converter",
						"academic transfer calculator",
						"university application GPA"
					]}
				/>
			</div>
		</div>
	);
}
