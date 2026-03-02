import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/ui/CTASection';

export function AIAgentDevelopment() {
  return (
    <>
      <Helmet>
        <title>AI Agent Development | Synapse</title>
        <meta name="description" content="Expert AI Agent Development services by Synapse Digital Agency." />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Unique Hero */}
        <section className="relative overflow-hidden">
          
    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-transparent opacity-30" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-neon/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="container relative z-10 px-6 mx-auto text-center pt-32 pb-20 lg:pt-48 lg:pb-32">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-outfit">AI Agent Development</h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">Premium AI Agent Development solutions for forward-thinking brands.</p>
    </div>
  
        </section>

        {/* Unique Content Arrangement */}
        
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-neon-blue">The Challenge</h2>
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
                <div className="w-12 h-12 rounded-lg bg-neon-blue/20 mb-6" />
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