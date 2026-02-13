import Link from "next/link"
import { Calculator, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Sparkles } from "lucide-react"
import { SITE_EMAIL, SITE_NAME, SITE_PHONE } from "@/lib/constant"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Calculator Tools", href: "/tools" },
  ]

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Disclaimer", href: "/disclaimer" },
  ]

  const popularTools = [
    { name: "Age Calculator", href: "/tools/age-calculator" },
    { name: "EMI Calculator", href: "/tools/emi-calculator" },
    { name: "BMI Calculator", href: "/tools/bmi-calculator" },
    { name: "Percentage Calculator", href: "/tools/percentage-calculator" },
    { name: "GPA Calculator", href: "/tools/gpa-calculator" },
    { name: "Tip Calculator", href: "/tools/tip-calculator" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                <Calculator className="w-6 h-6 text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {SITE_NAME}
                </span>
                <div className="text-xs text-gray-400 font-medium -mt-1">Professional Tools</div>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted destination for professional calculator tools. We provide accurate, fast, and free
              calculation solutions for all your personal and business needs.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{SITE_EMAIL}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{SITE_PHONE}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>123 Calculator Street, Math City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-pink-400" />
              Popular Tools
            </h3>
            <ul className="space-y-3">
              {popularTools.map((tool, index) => (
                <li key={index}>
                  <Link 
                    href={tool.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <Sparkles className="w-4 h-4 mr-1 text-yellow-400" />
                Built with precision and care
              </span>
              <span>•</span>
              <span>100% Free Tools</span>
              <span>•</span>
              <span>Privacy Focused</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
