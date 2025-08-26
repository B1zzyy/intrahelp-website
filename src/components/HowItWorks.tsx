import SpotlightCard from './SpotlightCard'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload Your CV',
      description: 'Upload your resume and job description. IntraHelp analyzes your background instantly.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" color="#000000" fill="none">
          <path d="M15 2.5V4C15 5.41421 15 6.12132 15.4393 6.56066C15.8787 7 16.5858 7 18 7H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14.1716C14.5803 2 14.7847 2 14.9685 2.07612C15.1522 2.15224 15.2968 2.29676 15.5858 2.58579L19.4142 6.41421C19.7032 6.70324 19.8478 6.84776 19.9239 7.03153C20 7.2153 20 7.41968 20 7.82843V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M8 11H16M8 14H16M8 17H12.1708" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      color: 'chart-1'
    },
    {
      number: '02',
      title: 'Start Interview',
      description: 'Launch IntraHelp before your interview. The transparent overlay activates automatically.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" color="#000000" fill="none">
          <path d="M4.5 21.5L8.5 17.5M10.5 17.5L14.5 21.5M9.5 17.5L9.5 22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 11.875C2 9.81261 2 8.78141 3.02513 8.1407C4.05025 7.5 5.70017 7.5 9 7.5H10C13.2998 7.5 14.9497 7.5 15.9749 8.1407C17 8.78141 17 9.81261 17 11.875V13.125C17 15.1874 17 16.2186 15.9749 16.8593C14.9497 17.5 13.2998 17.5 10 17.5H9C5.70017 17.5 4.05025 17.5 3.02513 16.8593C2 16.2186 2 15.1874 2 13.125V11.875Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M17 10.2495L17.1259 10.174C19.2417 8.90435 20.2996 8.26954 21.1498 8.57605C22 8.88257 22 9.89876 22 11.9312V13.0685C22 15.1009 22 16.1171 21.1498 16.4236C20.2996 16.7301 19.2417 16.0953 17.1259 14.8257L17 14.7501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12.5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="7" cy="4.5" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      color: 'chart-2'
    },
    {
      number: '03',
      title: 'Get AI Assistance',
      description: 'As questions are asked, receive intelligent, personalized responses in real-time.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" color="#000000" fill="none">
          <path d="M5.22576 11.3294L12.224 2.34651C12.7713 1.64397 13.7972 2.08124 13.7972 3.01707V9.96994C13.7972 10.5305 14.1995 10.985 14.6958 10.985H18.0996C18.8729 10.985 19.2851 12.0149 18.7742 12.6706L11.776 21.6535C11.2287 22.356 10.2028 21.9188 10.2028 20.9829V14.0301C10.2028 13.4695 9.80048 13.015 9.3042 13.015H5.90035C5.12711 13.015 4.71494 11.9851 5.22576 11.3294Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      color: 'chart-3'
    },
    {
      number: '04',
      title: 'Ace Your Interview',
      description: 'Deliver confident answers that highlight your strengths and match job requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" color="#000000" fill="none">
          <path d="M7.32612 18.092C6.99877 18.3667 6.71531 18.5029 6.42014 18.5C5.73998 18.4931 5.17341 17.7974 4.04028 16.4061L2.52531 14.5458C1.90142 13.7798 1.82509 12.6392 2.34013 11.7785C2.92845 10.7954 4.05674 10.52 4.93607 11.0133M10.9222 8.5C11.7133 7.66585 12.5575 6.8322 13.4783 5.98679C13.9225 5.57893 14.4762 5.43447 15 5.52681" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
          <path d="M14.1057 16.311C16.3656 13.6916 18.5472 11.9146 21.2876 9.39818C22.1078 8.64496 22.2345 7.3247 21.591 6.3893C20.9072 5.39517 19.6077 5.19647 18.7282 5.98679C16.218 8.24236 14.2651 10.4141 12.4126 12.7354C12.3154 12.8572 12.2668 12.9181 12.2163 12.9524C12.0884 13.0393 11.9285 13.0403 11.7998 12.9548C11.749 12.9211 11.7003 12.8613 11.6029 12.7419L10.6158 11.5311C9.71508 10.4263 8.09956 10.5486 7.34754 11.7785C6.82128 12.6392 6.89927 13.7798 7.53675 14.5458L9.0847 16.4061C10.2425 17.7974 10.8214 18.4931 11.5164 18.5C12.2114 18.5068 12.8428 17.7748 14.1057 16.311Z" stroke="currentColor" strokeWidth="1.5"></path>
        </svg>
      ),
      color: 'primary'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium mb-6">
            🔄 How It Works
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Simple 4-Step
            <span className="text-primary"> Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in minutes with our streamlined process. No technical expertise required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative pt-6">
                {/* Step icon - moved outside SpotlightCard */}
                <div className="absolute -top-2 left-8 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg z-10">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-full h-full">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                <SpotlightCard 
                  className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border pt-10"
                  spotlightColor="rgba(0, 255, 136, 0.15)"
                >
                  {/* Content */}
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </SpotlightCard>
                
                {/* Arrow for desktop (horizontal) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                      →
                    </div>
                  </div>
                )}
                
                {/* Arrow for mobile (vertical) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                      ↓
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-3xl p-8 shadow-lg max-w-4xl mx-auto border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              See IntraHelp in Action
            </h3>
            <p className="text-muted-foreground mb-6">
              Watch our 2-minute demo to see exactly how IntraHelp transforms your interview experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                Watch Demo
              </button>
              <a 
                href="https://b1zzy.gumroad.com/l/intrahelp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-primary bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 no-underline"
              >
                Get IntraHelp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}