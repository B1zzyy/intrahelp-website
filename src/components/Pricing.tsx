'use client'

import { useState } from 'react'
import SpotlightCard from './SpotlightCard'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Free Trial',
      description: 'Perfect for trying IntraHelp',
      price: { monthly: 0, annual: 0 },
      features: [
        '3 interview sessions',
        'Basic AI responses',
        'CV integration',
        'Email support'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'border-2 border-border text-foreground hover:border-primary hover:text-primary',
      popular: false
    },
    {
      name: 'Professional',
      description: 'For serious job seekers',
      price: { monthly: 29, annual: 290 },
      features: [
        'Unlimited interviews',
        'Advanced AI responses',
        'CV & job integration',
        'Real-time recognition',
        'Priority support',
        'Analytics dashboard'
      ],
      buttonText: 'Get Pro',
      buttonStyle: 'bg-primary text-primary-foreground hover:opacity-90',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For teams and organizations',
      price: { monthly: 99, annual: 990 },
      features: [
        'Everything in Professional',
        'Team management',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'SLA guarantee'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
            💰 Pricing Plans
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Choose Your
            <span className="text-primary"> Success Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start with our free trial and upgrade when you're ready. All plans include core AI features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors border ${
                isAnnual ? 'bg-primary border-primary' : 'bg-card border-border'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full transition-transform shadow-sm ${
                  isAnnual ? 'translate-x-6 bg-white' : 'translate-x-1 bg-white'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-sm bg-chart-1 text-primary-foreground px-3 py-1 rounded-full font-medium">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${
                plan.popular ? 'border-primary scale-105' : 'border-border'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-card-foreground">
                      ${isAnnual ? Math.floor(plan.price.annual / 12) : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {plan.price.monthly === 0 ? '' : '/month'}
                    </span>
                  </div>
                  
                  {isAnnual && plan.price.annual > 0 && (
                    <div className="text-sm text-muted-foreground">
                      Billed annually (${plan.price.annual}/year)
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a 
                  href="https://b1zzy.gumroad.com/l/intrahelp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-block text-center no-underline ${plan.buttonStyle}`}
                >
                  Get IntraHelp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <SpotlightCard 
              className="bg-card shadow-lg border border-border"
              spotlightColor="rgba(0, 255, 136, 0.12)"
            >
              <h4 className="font-semibold text-card-foreground mb-2">Is there a free trial?</h4>
              <p className="text-muted-foreground">Yes! Try IntraHelp free for 7 days with 3 interview sessions included.</p>
            </SpotlightCard>
            <SpotlightCard 
              className="bg-card shadow-lg border border-border"
              spotlightColor="rgba(0, 255, 136, 0.12)"
            >
              <h4 className="font-semibold text-card-foreground mb-2">Can I cancel anytime?</h4>
              <p className="text-muted-foreground">Absolutely. Cancel your subscription anytime with no fees.</p>
            </SpotlightCard>
            <SpotlightCard 
              className="bg-card shadow-lg border border-border"
              spotlightColor="rgba(0, 255, 136, 0.12)"
            >
              <h4 className="font-semibold text-card-foreground mb-2">Do you offer refunds?</h4>
              <p className="text-muted-foreground">Yes, we offer a 30-day money-back guarantee.</p>
            </SpotlightCard>
            <SpotlightCard 
              className="bg-card shadow-lg border border-border"
              spotlightColor="rgba(0, 255, 136, 0.12)"
            >
              <h4 className="font-semibold text-card-foreground mb-2">Is my data secure?</h4>
              <p className="text-muted-foreground">Your privacy is our priority. All data is encrypted and secure.</p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}