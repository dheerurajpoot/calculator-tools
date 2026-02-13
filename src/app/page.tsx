import Link from "next/link";
import {
	Calculator,
	Calendar,
	CreditCard,
	Percent,
	Scale,
	GraduationCap,
	DollarSign,
	Info,
	FileText,
	Shield,
	Users,
	Zap,
	Globe,
	Sparkles,
	TrendingUp,
	BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const calculatorTools = [
	{
		name: "Age Calculator",
		description: "Calculate your exact age in years, months, and days with precision",
		icon: Calendar,
		href: "/tools/age-calculator",
		color: "from-blue-500 to-cyan-500",
		gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
	},
	{
		name: "EMI Calculator",
		description: "Calculate your loan EMI with interest rates and repayment schedules",
		icon: CreditCard,
		href: "/tools/emi-calculator",
		color: "from-green-500 to-emerald-500",
		gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
	},
	{
		name: "Percentage Calculator",
		description: "Calculate percentages, increases, decreases, and ratios accurately",
		icon: Percent,
		href: "/tools/percentage-calculator",
		color: "from-purple-500 to-pink-500",
		gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
	},
	{
		name: "BMI Calculator",
		description: "Calculate your Body Mass Index and health status with medical standards",
		icon: Scale,
		href: "/tools/bmi-calculator",
		color: "from-orange-500 to-red-500",
		gradient: "bg-gradient-to-br from-orange-500 to-red-500",
	},
	{
		name: "GPA Converter",
		description: "Convert between different GPA scales and systems worldwide",
		icon: GraduationCap,
		href: "/tools/gpa-calculator",
		color: "from-indigo-500 to-blue-500",
		gradient: "bg-gradient-to-br from-indigo-500 to-blue-500",
	},
	{
		name: "AdSense Revenue Calculator",
		description: "Estimate your AdSense earnings and revenue with industry benchmarks",
		icon: DollarSign,
		href: "/tools/adsense-revenue-calculator",
		color: "from-yellow-500 to-orange-500",
		gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
	},
	{
		name: "Tip Calculator",
		description: "Calculate restaurant tips, service charges, and split bills easily",
		icon: Percent,
		href: "/tools/tip-calculator",
		color: "from-purple-500 to-pink-500",
		gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
	},
	{
		name: "Compound Interest Calculator",
		description: "Calculate investment growth with compound interest and regular contributions",
		icon: CreditCard,
		href: "/tools/compound-interest-calculator",
		color: "from-green-500 to-emerald-500",
		gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
	},
];

const features = [
	{
		title: "Accurate Calculations",
		description:
			"All our calculators use precise mathematical formulas and industry standards to ensure 99.9% accuracy.",
		icon: Calculator,
		color: "from-blue-500 to-cyan-500",
	},
	{
		title: "User-Friendly Interface",
		description:
			"Clean, intuitive design makes it easy for anyone to use our calculation tools effectively.",
		icon: Info,
		color: "from-purple-500 to-pink-500",
	},
	{
		title: "Mobile Responsive",
		description:
			"Access all calculators seamlessly across desktop, tablet, and mobile devices with perfect responsiveness.",
		icon: FileText,
		color: "from-green-500 to-emerald-500",
	},
	{
		title: "Free to Use",
		description:
			"All our calculator tools are completely free with no hidden charges, subscriptions, or registration required.",
		icon: Shield,
		color: "from-orange-500 to-red-500",
	},
	{
		title: "Privacy Focused",
		description:
			"We don't store your personal data. All calculations are performed locally in your browser for complete privacy.",
		icon: Shield,
		color: "from-indigo-500 to-blue-500",
	},
	{
		title: "Regular Updates",
		description:
			"Continuously updated with new features, improved algorithms, and additional calculator tools.",
		icon: Zap,
		color: "from-yellow-500 to-orange-500",
	},
];

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Financial Advisor",
		content: "The EMI calculator is incredibly accurate and helps me provide quick estimates to my clients. Love the clean interface!",
		initial: "S",
		color: "from-blue-500 to-purple-500",
	},
	{
		name: "Mike Chen",
		role: "Student",
		content: "The GPA converter saved me so much time when applying to universities abroad. Simple and reliable!",
		initial: "M",
		color: "from-green-500 to-emerald-500",
	},
	{
		name: "Alex Rivera",
		role: "Blogger",
		content: "The AdSense calculator gives me realistic revenue projections. Perfect for planning my content strategy!",
		initial: "A",
		color: "from-orange-500 to-red-500",
	},
];

const faqs = [
	{
		question: "Are all calculators completely free?",
		answer: "Yes, all our calculator tools are 100% free to use with no hidden charges, subscriptions, or registration required. We believe in providing accessible tools for everyone."
	},
	{
		question: "How accurate are the calculations?",
		answer: "Our calculators use industry-standard formulas and are regularly tested for accuracy. However, for important financial or medical decisions, we recommend consulting with qualified professionals."
	},
	{
		question: "Do you store my calculation data?",
		answer: "No, we don't store any personal data. All calculations are performed locally in your browser for complete privacy and security."
	},
	{
		question: "Can I use these tools on mobile devices?",
		answer: "Absolutely! All our calculators are fully responsive and optimized for mobile devices, tablets, and desktop computers."
	},
];

export default function HomePage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
			{/* Hero Section */}
			<section className='relative pt-32 pb-20 px-4 text-center overflow-hidden'>
				{/* Animated background elements */}
				<div className='absolute inset-0 z-0'>
					<div className='absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow'></div>
					<div className='absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow' style={{animationDelay: '1s'}}></div>
					<div className='absolute top-1/2 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow' style={{animationDelay: '2s'}}></div>
				</div>
				
				<div className='relative z-10 max-w-5xl mx-auto'>
					<div className='inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8 p-1 shadow-xl gradient-border'>
						<div className='w-full h-full rounded-2xl bg-white flex items-center justify-center'>
							<Calculator className='w-10 h-10  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text' />
						</div>
					</div>
					
					<h1 className='text-5xl md:text-7xl font-bold mb-6'>
						<span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent'>
							Professional Calculator
						</span>
						<br />
						<span className='bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
							Tools Hub
						</span>
					</h1>
					
					<p className='text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed'>
						Your <span className='font-semibold text-blue-600'>one-stop destination</span> for all essential calculators.
						<span className='font-semibold text-purple-600'>Fast, accurate,</span> and <span className='font-semibold text-pink-600'>completely free</span> to use.
					</p>
					
					<div className='flex flex-wrap justify-center gap-4 mb-12'>
						<span className='px-5 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium animate-pulse-slow'>✨ 100% Free</span>
						<span className='px-5 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium animate-pulse-slow' style={{animationDelay: '0.5s'}}>⚡ Instant Results</span>
						<span className='px-5 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium animate-pulse-slow' style={{animationDelay: '1s'}}>📱 Mobile Friendly</span>
						<span className='px-5 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium animate-pulse-slow' style={{animationDelay: '1.5s'}}>🔒 Privacy First</span>
					</div>
					
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/tools'>
						
						<Button
							size='lg'
							className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold group'>
							<Sparkles className='w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300' />
							Explore Calculators
						</Button>
						</Link>
						<Link href='/about'>
							<Button
								size='lg'
								variant='outline'
								className='border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold'>
								<BarChart3 className='w-5 h-5 mr-2' />
								Learn More
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Calculator Tools Grid */}
			<section className='py-20 px-4'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6'>
							<span className='bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
								Our Professional
							</span>
							<br />
							<span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent'>
								Calculator Tools
							</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Professional-grade calculators designed for accuracy, speed, and ease of use.
							Perfect for students, professionals, and everyday calculations.
						</p>
					</div>
					
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
						{calculatorTools.map((tool, index) => {
							const IconComponent = tool.icon;
							return (
								<Link 
									key={tool.name} 
									href={tool.href}
									className='group animate-slide-up'
									style={{animationDelay: `${index * 0.1}s`}}
								>
									<Card className='h-full hover-lift shine-effect border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative'>
										<div className='absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
										<CardHeader className='text-center relative z-10 pt-6'>
											<div
												className={`w-20 h-20 mx-auto mb-5 rounded-3xl ${tool.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
												<IconComponent className='w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300' />
											</div>
											<CardTitle className='text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300'>
												{tool.name}
											</CardTitle>
										</CardHeader>
										<CardContent className='relative z-10 pb-6'>
											<CardDescription className='text-center text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300'>
												{tool.description}
											</CardDescription>
											<div className='mt-4 flex justify-center'>
												<span className='px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-xs font-medium rounded-full group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300'>
													Click to Calculate
												</span>
											</div>
										</CardContent>
									</Card>
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-20 px-4 bg-gradient-to-br from-white/80 to-blue-50/50'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6'>
							<span className='bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
								Why Choose Our
							</span>
							<br />
							<span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent'>
								Professional Tools?
							</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Designed with precision and built for professionals who demand accuracy and reliability.
						</p>
					</div>
					
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{features.map((feature, index) => {
							const IconComponent = feature.icon;
							return (
								<div
									key={feature.title}
									className='text-center group animate-slide-up'
									style={{animationDelay: `${index * 0.1}s`}}>
									<div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
										<IconComponent className='w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300' />
									</div>
									<h3 className='text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300'>
										{feature.title}
									</h3>
									<p className='text-gray-600 leading-relaxed'>
										{feature.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className='py-20 px-4'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
						<div className='group animate-slide-up' style={{animationDelay: '0.1s'}}>
							<div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3'>
								100K+
							</div>
							<div className='text-gray-600 font-medium'>Monthly Users</div>
							<div className='w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></div>
						</div>
						<div className='group animate-slide-up' style={{animationDelay: '0.2s'}}>
							<div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3'>
								2M+
							</div>
							<div className='text-gray-600 font-medium'>
								Calculations Done
							</div>
							<div className='w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full'></div>
						</div>
						<div className='group animate-slide-up' style={{animationDelay: '0.3s'}}>
							<div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3'>
								8
							</div>
							<div className='text-gray-600 font-medium'>
								Calculator Tools
							</div>
							<div className='w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'></div>
						</div>
						<div className='group animate-slide-up' style={{animationDelay: '0.4s'}}>
							<div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3'>
								99.9%
							</div>
							<div className='text-gray-600 font-medium'>Accuracy Rate</div>
							<div className='w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full'></div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='py-20 px-4 bg-gradient-to-br from-blue-50/50 to-purple-50/50'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6'>
							<span className='bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
								Trusted by
							</span>
							<br />
							<span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent'>
								Professionals Worldwide
							</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
							See what our users say about our professional calculator tools
						</p>
					</div>
					
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{testimonials.map((testimonial, index) => (
							<Card 
								key={index} 
								className='bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative animate-slide-up'
								style={{animationDelay: `${index * 0.1}s`}}
							>
								<div className='absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
								<CardContent className='p-6 relative z-10'>
									<div className='flex items-center mb-4'>
										<div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
											{testimonial.initial}
										</div>
										<div className='ml-4'>
											<div className='font-semibold text-gray-800'>
												{testimonial.name}
											</div>
											<div className='text-sm text-gray-600'>
												{testimonial.role}
											</div>
										</div>
									</div>
									<p className='text-gray-600 italic leading-relaxed'>
										&quot;{testimonial.content}&quot;
									</p>
									<div className='mt-4 flex items-center'>
										{[...Array(5)].map((_, i) => (
											<Sparkles key={i} className='w-4 h-4 text-yellow-400 fill-current' />
										))}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 px-4'>
				<div className='max-w-4xl mx-auto text-center'>
					<div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 p-1 shadow-lg'>
						<div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
							<TrendingUp className='w-8 h-8 text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text' />
						</div>
					</div>
					
					<h2 className='text-4xl md:text-5xl font-bold mb-6'>
						<span className='bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
							Ready to Start
						</span>
						<br />
						<span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent'>
							Calculating?
						</span>
					</h2>
					<p className='text-xl text-gray-600 mb-10 max-w-2xl mx-auto'>
						Choose from our collection of professional-grade calculators and get instant, accurate results.
						Join thousands of satisfied users today.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button
							size='lg'
							className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold group'>
							<Globe className='w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300' />
							Browse All Tools
						</Button>
						<Button
							size='lg'
							variant='outline'
							className='border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold'>
							<Users className='w-5 h-5 mr-2' />
							Learn More
						</Button>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-20 px-4 bg-gradient-to-br from-white/80 to-blue-50/50'>
				<div className='max-w-4xl mx-auto'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6'>
							<span className='bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
								Frequently Asked
							</span>
							<br />
							<span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent'>
								Questions
							</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
							Find answers to common questions about our calculator tools
						</p>
					</div>
					
					<div className='space-y-4'>
						{faqs.map((faq, index) => (
							<Card 
								key={index} 
								className='hover-lift transition-all duration-300 animate-slide-up'
								style={{animationDelay: `${index * 0.1}s`}}
							>
								<CardHeader>
									<CardTitle className='text-lg flex items-center'>
										<Sparkles className='w-5 h-5 mr-2 text-blue-500' />
										{faq.question}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-gray-600 leading-relaxed'>
										{faq.answer}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
