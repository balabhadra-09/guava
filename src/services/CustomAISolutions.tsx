import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/ui/CTASection';

export function CustomAISolutions() {
  return (
    <>
      <Helmet>
        <title>Custom AI Solutions | Synapse</title>
        <meta name="description" content="Expert Custom AI Solutions services by Synapse Digital Agency." />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Unique Hero */}
        <section className="relative overflow-hidden">
          
    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-fuchsia-500/20 via-rose-500/20 to-transparent" />
    <div className="container relative z-10 px-6 mx-auto pt-40 pb-20 lg:pt-56 lg:pb-32">
      <div className="max-w-3xl">
        <h1 className="text-6xl lg:text-8xl font-bold mb-8 font-outfit tracking-tighter">Custom AI Solutions</h1>
        <p className="text-2xl text-gray-500 mb-10 font-light">Premium Custom AI Solutions solutions for forward-thinking brands.</p>
      </div>
    </div>
  
        </section>

        {/* Unique Content Arrangement */}
        
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-emerald-400">The Challenge</h2>
              <p className="text-gray-400 text-lg">Modern businesses struggle with scaling operations efficiently while maintaining quality and speed. Legacy systems simply cannot keep up with today's demands.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Our Solution</h2>
              <p className="text-gray-400 text-lg">We implement cutting-edge technology that automates, optimizes, and scales your workflows seamlessly, providing an unprecedented competitive advantage.</p>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper className="bg-dark-800">
          <h2 className="text-4xl font-bold mb-12 text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <Card key={i} className="p-8">
                <div className="w-12 h-12 rounded-lg bg-emerald-400/20 mb-6" />
                <h3 className="text-xl font-bold mb-3">Feature {i}</h3>
                <p className="text-gray-400">Advanced implementation of industry best practices tailored for your specific needs.</p>
              </Card>
            ))}
          </div>
        </SectionWrapper>
  

        <CTASection title="Let's build something great" subtitle="Ready to elevate your business?" />
      </main>
    </>
  );
}