import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/ui/CTASection';

export function DigitalMarketing() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing | Synapse</title>
        <meta name="description" content="Expert Digital Marketing services by Synapse Digital Agency." />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Unique Hero */}
        <section className="relative overflow-hidden">
          
    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-pink-500/20 via-orange-400/20 to-transparent" />
    <div className="container relative z-10 px-6 mx-auto pt-40 pb-20 lg:pt-56 lg:pb-32">
      <div className="max-w-3xl">
        <h1 className="text-6xl lg:text-8xl font-bold mb-8 font-outfit tracking-tighter">Digital Marketing</h1>
        <p className="text-2xl text-gray-500 mb-10 font-light">Premium Digital Marketing solutions for forward-thinking brands.</p>
      </div>
    </div>
  
        </section>

        {/* Unique Content Arrangement */}
        
        <SectionWrapper>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">What We Deliver</h2>
            <p className="text-gray-400 text-lg">A comprehensive suite of capabilities designed to transform your business from the ground up.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <Card key={i} className="p-8 flex items-start gap-6 border-l-4 border-l-amber-400">
                <div className="text-4xl font-bold text-white/10">{i}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Capability {i}</h3>
                  <p className="text-gray-400">Streamlined execution with measurable impact on your bottom line.</p>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>
        <SectionWrapper className="bg-gradient-to-b from-dark-800 to-dark-900">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-between relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
            {['Discovery', 'Strategy', 'Execution', 'Scale'].map((step, i) => (
              <div key={step} className="relative z-10 glass p-6 rounded-2xl w-full md:w-1/4 text-center">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-dark-900 font-bold mx-auto mb-4 flex items-center justify-center">{i+1}</div>
                <h4 className="font-bold">{step}</h4>
              </div>
            ))}
          </div>
        </SectionWrapper>
  

        <CTASection title="Let's build something great" subtitle="Ready to elevate your business?" />
      </main>
    </>
  );
}