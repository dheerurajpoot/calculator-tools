"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
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

export default function EMICalculator() {
	const [principal, setPrincipal] = useState("");
	const [rate, setRate] = useState("");
	const [tenure, setTenure] = useState("");
	const [result, setResult] = useState<{
		emi: number;
		totalAmount: number;
		totalInterest: number;
	} | null>(null);

	const calculateEMI = () => {
		const P = Number.parseFloat(principal);
		const R = Number.parseFloat(rate) / 12 / 100;
		const N = Number.parseFloat(tenure) * 12;

		if (!P || !R || !N) return;

		const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
		const totalAmount = emi * N;
		const totalInterest = totalAmount - P;

		setResult({
			emi: Math.round(emi),
			totalAmount: Math.round(totalAmount),
			totalInterest: Math.round(totalInterest),
		});
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-green-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-8'>
					<div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center'>
						<CreditCard className='w-8 h-8 text-white' />
					</div>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						EMI Calculator
					</h1>
					<p className='text-xl text-gray-600'>
						Calculate your loan EMI with interest rates
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<Card>
						<CardHeader>
							<CardTitle>Loan Details</CardTitle>
							<CardDescription>
								Enter your loan information to calculate EMI
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<Label htmlFor='principal'>
									Loan Amount (₹)
								</Label>
								<Input
									id='principal'
									type='number'
									placeholder='e.g., 500000'
									value={principal}
									onChange={(e) =>
										setPrincipal(e.target.value)
									}
								/>
							</div>
							<div>
								<Label htmlFor='rate'>
									Interest Rate (% per annum)
								</Label>
								<Input
									id='rate'
									type='number'
									step='0.1'
									placeholder='e.g., 8.5'
									value={rate}
									onChange={(e) => setRate(e.target.value)}
								/>
							</div>
							<div>
								<Label htmlFor='tenure'>
									Loan Tenure (Years)
								</Label>
								<Input
									id='tenure'
									type='number'
									placeholder='e.g., 20'
									value={tenure}
									onChange={(e) => setTenure(e.target.value)}
								/>
							</div>
							<Button
								onClick={calculateEMI}
								className='w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
								disabled={!principal || !rate || !tenure}>
								Calculate EMI
							</Button>
						</CardContent>
					</Card>

					{result && (
						<Card>
							<CardHeader>
								<CardTitle>EMI Calculation Results</CardTitle>
								<CardDescription>
									Your loan repayment details
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div className='text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg'>
										<div className='text-3xl font-bold text-green-600 mb-2'>
											₹{result.emi.toLocaleString()}
										</div>
										<div className='text-sm text-gray-600'>
											Monthly EMI
										</div>
									</div>

									<div className='grid grid-cols-1 gap-4'>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Principal Amount
											</span>
											<span className='font-semibold'>
												₹
												{Number.parseFloat(
													principal
												).toLocaleString()}
											</span>
										</div>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Total Interest
											</span>
											<span className='font-semibold text-red-600'>
												₹
												{result.totalInterest.toLocaleString()}
											</span>
										</div>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Total Amount
											</span>
											<span className='font-semibold'>
												₹
												{result.totalAmount.toLocaleString()}
											</span>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					)}
				</div>

				<SEOContent
					title="EMI Calculator"
					description="Our free EMI calculator helps you calculate your monthly loan installments with precision. Plan your finances effectively by determining exact EMI amounts, total interest, and repayment schedules for home loans, car loans, and personal loans."
					features={[
						"Calculate accurate monthly EMI for any loan amount",
						"View total interest payable and overall loan cost",
						"Compare different loan tenures and interest rates",
						"Supports home loans, car loans, and personal loans",
						"Instant calculations with detailed repayment breakdown",
						"100% free with no hidden charges or registration"
					]}
					benefits={[
						{
							title: "Financial Planning",
							description: "Plan your monthly budget effectively by knowing exact EMI amounts before taking any loan."
						},
						{
							title: "Loan Comparison",
							description: "Compare different loan options by varying interest rates and tenure to find the best deal."
						},
						{
							title: "Interest Savings",
							description: "Understand how prepayments can reduce total interest and shorten loan tenure significantly."
						},
						{
							title: "Decision Making",
							description: "Make informed borrowing decisions with clear understanding of total loan costs and monthly obligations."
						}
					]}
					faqs={[
						{
							question: "What is EMI and how is it calculated?",
							answer: "EMI (Equated Monthly Installment) is the fixed amount you pay every month towards loan repayment. It includes both principal and interest components. The formula is: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1] where P is principal, R is monthly interest rate, and N is number of months."
						},
						{
							question: "How does interest rate affect my EMI?",
							answer: "Higher interest rates increase your EMI amount and total interest payable. Even small changes in interest rate can significantly impact your monthly payment and overall loan cost."
						},
						{
							question: "What is the impact of loan tenure on EMI?",
							answer: "Longer tenure reduces monthly EMI but increases total interest paid over the loan period. Shorter tenure means higher EMIs but lesser total interest and faster debt freedom."
						},
						{
							question: "Can I prepay my loan to reduce interest?",
							answer: "Yes, most lenders allow prepayment either partially or fully. Prepayment reduces the outstanding principal, which decreases future interest calculations and can shorten your loan tenure."
						},
						{
							question: "What factors should I consider before taking a loan?",
							answer: "Consider your monthly income, existing obligations, interest rates, loan tenure, processing fees, and your ability to handle EMI payments comfortably. Also factor in potential rate changes for floating rate loans."
						}
					]}
					keywords={[
						"EMI calculator",
						"loan calculator",
						"home loan EMI",
						"car loan calculator",
						"personal loan EMI",
						"monthly installment",
						"loan repayment",
						"interest calculator",
						"loan planning",
						"financial planning"
					]}
				/>
			</div>
		</div>
	);
}
