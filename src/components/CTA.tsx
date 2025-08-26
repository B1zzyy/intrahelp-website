const StarIcon = ({ className = "", color = "#ffffff" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={className}>
    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill={color} />
  </svg>
)

export default function CTA() {
  return (
    <section className="py-24 bg-card-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-chart-2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-background bg-opacity-20 text-background rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            🎯 Limited Time Offer
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-background mb-6 leading-tight">
            Your Dream Job is Just
            <span className="text-primary"> One Click Away</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-background opacity-80 mb-8 leading-relaxed">
            Join over 10,000 professionals who have transformed their careers with IntraHelp. 
            Start your journey to interview success today.
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-background border-opacity-20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-background mb-2">Instant Setup</h3>
              <p className="text-background opacity-80 text-sm">Ready in under 2 minutes</p>
            </div>
            <div className="bg-background bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-background border-opacity-20">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-background mb-2">95% Success Rate</h3>
              <p className="text-background opacity-80 text-sm">Proven results across industries</p>
            </div>
            <div className="bg-background bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-background border-opacity-20">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold text-background mb-2">100% Secure</h3>
              <p className="text-background opacity-80 text-sm">Your data is protected</p>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              🚀 Download IntraHelp Free
            </button>
            <button className="bg-background bg-opacity-20 backdrop-blur-sm text-background px-10 py-4 rounded-2xl font-semibold text-lg border-2 border-background border-opacity-30 hover:bg-opacity-30 transition-all duration-300">
              📺 Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-background opacity-80">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} color="#ffffff" />
                ))}
              </div>
              <span className="text-sm">4.9/5 from 2,500+ reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🔒</span>
              <span className="text-sm">SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>💳</span>
              <span className="text-sm">No Credit Card Required</span>
            </div>
          </div>
        </div>

        {/* Bottom offer */}
        <div className="mt-16">
          <div className="bg-background bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 border border-background border-opacity-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-background mb-4">
              Special Launch Offer
            </h3>
            <p className="text-background opacity-80 mb-6">
              Get 50% off your first month when you upgrade from the free trial
            </p>
            <p className="text-background opacity-60 text-sm">
              No commitment required • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}