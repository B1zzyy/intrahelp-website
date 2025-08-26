'use client'

import StarBorder from './StarBorder'
import DotGrid from './DotGrid'
import CountUp from './CountUp'
import DecryptedText from './DecryptedText'

export default function Hero() {
  return (
    <section className="min-h-screen bg-background flex items-center pt-16 relative overflow-hidden">
      {/* Interactive Dot Grid Background */}
      <div className="absolute inset-0 opacity-50">
        <DotGrid
          dotSize={6}
          gap={20}
          baseColor="#4A5568"
          activeColor="#00FF88"
          proximity={120}
          shockRadius={8}
          shockStrength={0.1}
          resistance={2000}
          returnDuration={0.3}
          speedTrigger={500}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium">
              🚀 AI-Powered Interview Assistant
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Ace Every 
              <span className="text-primary"> Interview</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              IntraHelp provides real-time AI assistance during job interviews. Get intelligent responses, 
              boost your confidence, and land your dream job.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <StarBorder
                as="a"
                href="https://b1zzy.gumroad.com/l/intrahelp"
                target="_blank"
                rel="noopener noreferrer"
                color="white"
                speed="4s"
                thickness={2}
                className="transition-all duration-300 transform hover:scale-105 no-underline"
              >
                <span className="font-semibold text-lg">Get IntraHelp</span>
              </StarBorder>
              <button className="border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chart-2">
                  <CountUp 
                    from={0} 
                    to={95} 
                    duration={2.5} 
                    delay={0.2}
                    className="count-up-text"
                  />
                  %
                </div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chart-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="bg-card rounded-3xl shadow-xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-border">
              <div className="bg-muted rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-chart-3 rounded-full"></div>
                  <div className="w-3 h-3 bg-chart-1 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-primary text-primary-foreground p-4 rounded-xl">
                    "Tell me about yourself"
                  </div>
                  <div className="bg-card p-4 rounded-xl shadow-sm border border-border">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground text-xs font-bold">AI</span>
                      </div>
                      <span className="text-xs text-muted-foreground">IntraHelp</span>
                    </div>
                    <p className="text-sm text-card-foreground">
                      "<DecryptedText 
                        text="I'm a passionate software engineer with 5 years of experience in full-stack development..." 
                        animateOn="view"
                        sequential={true}
                        revealDirection="start"
                        speed={30}
                        maxIterations={15}
                      />"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg">
              💡 Real-time
            </div>
            <div className="absolute -bottom-4 -right-4 bg-chart-2 text-primary-foreground p-3 rounded-xl shadow-lg">
              🎯 Smart
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}