import Link from "next/link"
import { Calendar, CreditCard, Percent, Scale, GraduationCap, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const calculatorTools = [
  {
    name: "Age Calculator",
    description: "Calculate your exact age in years, months, and days",
    icon: Calendar,
    href: "/tools/age-calculator",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "EMI Calculator",
    description: "Calculate your loan EMI with interest rates",
    icon: CreditCard,
    href: "/tools/emi-calculator",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Percentage Calculator",
    description: "Calculate percentages, increases, and decreases",
    icon: Percent,
    href: "/tools/percentage-calculator",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index and health status",
    icon: Scale,
    href: "/tools/bmi-calculator",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "GPA Converter",
    description: "Convert between different GPA scales and systems",
    icon: GraduationCap,
    href: "/tools/gpa-calculator",
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "AdSense Revenue Calculator",
    description: "Estimate your AdSense earnings and revenue",
    icon: DollarSign,
    href: "/tools/adsense-revenue-calculator",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Compound Interest Calculator",
    description: "Estimate your compound interest earnings",
    icon: DollarSign,
    href: "/tools/compound-interest-calculator",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Tip Calculator",
    description: "Calculate tips for restaurants, services, and more",
    icon: CreditCard,
    href: "/tools/tip-calculator",
    color: "from-green-500 to-emerald-500",
  },
]

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mt-12 mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 p-1 shadow-lg gradient-border">
            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M12 12h.01M15 12h.01M12 15h.01M9 12h.01M12 9h.01M15 9h.01M9 9h.01M3 21h18M3 3h18" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Calculator Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of <span className="font-semibold text-blue-600">professional calculator tools</span>. 
            All tools are <span className="font-semibold text-green-600">100% free</span>, <span className="font-semibold text-purple-600">accurate</span>, 
            and designed for <span className="font-semibold text-pink-600">effortless use</span>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium animate-pulse-slow">✨ Free Forever</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium animate-pulse-slow" style={{animationDelay: '0.5s'}}>⚡ Instant Results</span>
            <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium animate-pulse-slow" style={{animationDelay: '1s'}}>📱 Mobile Friendly</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {calculatorTools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <Link key={tool.name} href={tool.href}>
                <Card className="h-full hover-lift shine-effect border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative animate-slide-up"
                      style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="text-center relative z-10 pt-6">
                    <div
                      className={`w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-to-r ${tool.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {tool.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 pb-6">
                    <CardDescription className="text-center text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {tool.description}
                    </CardDescription>
                    <div className="mt-4 flex justify-center">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-xs font-medium rounded-full group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                        Click to Calculate
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Additional Features Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 animate-fade-in">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Calculator Tools?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Accurate</h3>
                <p className="text-gray-600">Precise calculations backed by mathematical formulas and industry standards</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Instant results with real-time calculations and no loading delays</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Privacy First</h3>
                <p className="text-gray-600">All calculations happen locally in your browser - no data collection or storage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
