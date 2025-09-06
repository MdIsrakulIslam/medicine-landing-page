import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Logo />
        </div>

        <div>
          <nav className="flex flex-wrap items-center justify-center space-x-8 mb-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors ">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQs
            </a>
            <a href="#support" className="text-gray-300 hover:text-white transition-colors">
              Support
            </a>
          </nav>
        </div>

        {/* Border positioned exactly as in the image */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400"> 2025 - All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}