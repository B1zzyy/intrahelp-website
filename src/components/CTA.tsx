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
              <span className="text-chart-3">⭐⭐⭐⭐⭐</span>
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