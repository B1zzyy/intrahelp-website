'use client'

import { useState, useEffect } from 'react'
import CountUp from './CountUp'
import GlareHover from './GlareHover'

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
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Loved by
            <span className="text-primary"> Professionals</span>
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
                        <span key={i} className="text-chart-3">⭐</span>
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
                    <span key={i} className="text-chart-3">⭐</span>
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