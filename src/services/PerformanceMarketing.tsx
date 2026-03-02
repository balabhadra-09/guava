import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/ui/CTASection';

export function PerformanceMarketing() {
  return (
    <>
      <Helmet>
        <title>Performance Marketing | Synapse</title>
        <meta name="description" content="Expert Performance Marketing services by Synapse Digital Agency." />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Unique Hero */}
        <section className="relative overflow-hidden">
          
    <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 via-neon-purple/20 to-transparent opacity-20" />
    <div className="container relative z-10 px-6 mx-auto pt-32 pb-20 lg:pt-48 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1 relative aspect-video">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom_right,white,transparent)]" />
      </div>
      <div className="order-1 lg:order-2">
        <h1 className="text-5xl lg:text-show font-bold mb-6 font-outfit text-right">Performance Marketing</h1>
        <p className="text-xl text-gray-400 mb-10 text-right">Premium Performance Marketing solutions for forward-thinking brands.</p>
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
              <Card key={i} className="p-8 flex items-start gap-6 border-l-4 border-l-neon-blue">
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
                <div className="w-8 h-8 rounded-full bg-neon-blue text-dark-900 font-bold mx-auto mb-4 flex items-center justify-center">{i+1}</div>
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