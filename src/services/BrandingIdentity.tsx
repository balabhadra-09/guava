import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/ui/CTASection';

export function BrandingIdentity() {
  return (
    <>
      <Helmet>
        <title>Branding & Identity | Synapse</title>
        <meta name="description" content="Expert Branding & Identity services by Synapse Digital Agency." />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Unique Hero */}
        <section className="relative overflow-hidden">
          
    <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-blue-500/20 to-transparent opacity-20" />
    <div className="container relative z-10 px-6 mx-auto pt-32 pb-20 lg:pt-48 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1 relative aspect-video">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom_right,white,transparent)]" />
      </div>
      <div className="order-1 lg:order-2">
        <h1 className="text-5xl lg:text-show font-bold mb-6 font-outfit text-right">Branding & Identity</h1>
        <p className="text-xl text-gray-400 mb-10 text-right">Premium Branding & Identity solutions for forward-thinking brands.</p>
      </div>
    </div>
  
        </section>

        {/* Unique Content Arrangement */}
        
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-rose-500">The Challenge</h2>
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
                <div className="w-12 h-12 rounded-lg bg-rose-500/20 mb-6" />
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