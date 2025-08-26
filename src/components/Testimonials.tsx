'use client'

import { useState, useEffect } from 'react'
import CountUp from './CountUp'
import GlareHover from './GlareHover'
import RotatingText from './RotatingText'

const StarIcon = ({ className = "", color = "#ffffff" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={className}>
    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill={color} />
  </svg>
)

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      company: 'Google',
      avatar: '👩‍💻',
      rating: 5,
      text: 'IntraHelp was a game-changer for my Google interview. The AI responses were so natural and well-crafted. Landed the job!'
    },
    {
      name: 'Marcus Johnson',
      role: 'Product Manager',
      company: 'Microsoft',
      avatar: '👨‍💼',
      rating: 5,
      text: 'I was nervous about my PM interview, but IntraHelp gave me the confidence I needed. The real-time assistance was perfect.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      company: 'Netflix',
      avatar: '👩‍🔬',
      rating: 5,
      text: 'The CV integration feature is brilliant! IntraHelp knew exactly how to highlight my experience for the role.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium mb-6">
            💬 Success Stories
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 flex flex-wrap items-center justify-center gap-x-4">
            <span>Recommended by</span>
            <RotatingText
              texts={['Developers', 'Engineers', 'Designers', 'Managers', 'Analysts', 'Consultants']}
              mainClassName="bg-primary text-muted px-4 py-3 rounded-lg inline-flex min-w-[200px] justify-center"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful candidates who have transformed their interview experience.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="flex justify-center">
            <GlareHover
              width="100%"
              height="auto"
              background="var(--primary)"
              borderRadius="1.5rem"
              borderColor="var(--primary)"
              glareColor="#ffffff"
              glareOpacity={0.2}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              className="max-w-4xl"
            >
              <div className="p-8 text-primary-foreground text-center w-full">
                <div className="text-6xl opacity-20 mb-4">"</div>
                <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                  {testimonials[currentTestimonial].text}
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-primary-foreground bg-opacity-20 rounded-2xl flex items-center justify-center text-3xl">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="opacity-90">{testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}</div>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <StarIcon key={i} color="#000000" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlareHover>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-primary w-8' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlareHover
              key={index}
              width="100%"
              height="auto"
              background="var(--card)"
              borderRadius="1rem"
              borderColor="var(--border)"
              glareColor="#ffffff"
              glareOpacity={0.15}
              glareAngle={-30}
              glareSize={250}
              transitionDuration={600}
              className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6 w-full">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} color="#ffffff" />
                  ))}
                </div>
                
                <blockquote className="text-card-foreground mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm font-medium text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </GlareHover>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-muted rounded-3xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                <CountUp 
                  from={0} 
                  to={10000} 
                  duration={3} 
                  delay={0.2}
                  separator=","
                  className="count-up-text"
                />
                +
              </div>
              <div className="text-muted-foreground">Successful Interviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-chart-2 mb-2">
                <CountUp 
                  from={0} 
                  to={95} 
                  duration={2.5} 
                  delay={0.4}
                  className="count-up-text"
                />
                %
              </div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-chart-1 mb-2">
                <CountUp 
                  from={0} 
                  to={4.9} 
                  duration={2.2} 
                  delay={0.6}
                  className="count-up-text"
                />
                /5
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-chart-4 mb-2">
                <CountUp 
                  from={0} 
                  to={500} 
                  duration={2.8} 
                  delay={0.8}
                  separator=","
                  className="count-up-text"
                />
                +
              </div>
              <div className="text-muted-foreground">Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}