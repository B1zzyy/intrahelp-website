import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card-foreground text-background">
      <div className="container mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          {/* Logo Section */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo-black.png" 
                alt="IntraHelp Logo" 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-background opacity-70 text-sm">
              AI-powered interview assistant helping you ace every job interview with confidence.
            </p>
          </div>

          {/* Social Media & Links */}
          <div className="flex space-x-3">
            <Link href="#" className="flex items-center justify-center p-3 bg-background bg-opacity-10 border border-background border-opacity-20 rounded-xl text-gray-300 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 backdrop-blur-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link href="#" className="flex items-center justify-center p-3 bg-background bg-opacity-10 border border-background border-opacity-20 rounded-xl text-gray-300 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 backdrop-blur-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.197-2.25-1.197-3.677 0-1.427.449-2.729 1.197-3.677.749-.948 1.9-1.559 3.197-1.559 1.297 0 2.448.611 3.197 1.559.748.948 1.197 2.25 1.197 3.677 0 1.427-.449 2.729-1.197 3.677-.749.948-1.9 1.559-3.197 1.559zm7.138 0c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.197-2.25-1.197-3.677 0-1.427.449-2.729 1.197-3.677.749-.948 1.9-1.559 3.197-1.559 1.297 0 2.448.611 3.197 1.559.748.948 1.197 2.25 1.197 3.677 0 1.427-.449 2.729-1.197 3.677-.749.948-1.9 1.559-3.197 1.559z"/>
              </svg>
            </Link>
            <Link href="#" className="flex items-center justify-center p-3 bg-background bg-opacity-10 border border-background border-opacity-20 rounded-xl text-gray-300 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 backdrop-blur-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="mailto:contact@intrahelp.com" className="flex items-center justify-center p-3 bg-background bg-opacity-10 border border-background border-opacity-20 rounded-xl text-gray-300 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 backdrop-blur-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background border-opacity-20 mt-8 pt-6 text-center">
          <p className="text-background opacity-70 text-sm">
            © {currentYear} IntraHelp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}