import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/ui/CTASection';

export function ContentMarketing() {
  return (
    <>
      <Helmet>
        <title>Content Marketing | Synapse</title>
        <meta name="description" content="Expert Content Marketing services by Synapse Digital Agency." />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Unique Hero */}
        <section className="relative overflow-hidden">
          
    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-neon-purple/20 via-neon-pink/20 to-transparent" />
    <div className="container relative z-10 px-6 mx-auto pt-40 pb-20 lg:pt-56 lg:pb-32">
      <div className="max-w-3xl">
        <h1 className="text-6xl lg:text-8xl font-bold mb-8 font-outfit tracking-tighter">Content Marketing</h1>
        <p className="text-2xl text-gray-500 mb-10 font-light">Premium Content Marketing solutions for forward-thinking brands.</p>
      </div>
    </div>
  
        </section>

        {/* Unique Content Arrangement */}
        
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <Card key={i} className="p-6 text-center" variant="glass-dark">
                    <div className="w-10 h-10 mx-auto rounded-full border border-neon-purple/50 mb-4 flex items-center justify-center text-neon-purple">✦</div>
                    <div className="font-semibold text-sm">Target {i}</div>
                  </Card>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Transformative Impact</h2>
              <p className="text-gray-400 text-lg mb-8">We focus on delivering measurable value through strategic implementation and continuous optimization.</p>
              <ul className="space-y-4">
                {['Increased Efficiency', 'Higher Conversion Rates', 'Optimized Resource Allocation'].map(benefit => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-neon-purple" />
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>
  

        <CTASection title="Let's build something great" subtitle="Ready to elevate your business?" />
      </main>
    </>
  );
}