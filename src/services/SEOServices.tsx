import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/ui/CTASection';

export function SEOServices() {
  return (
    <>
      <Helmet>
        <title>SEO Services | Synapse</title>
        <meta name="description" content="Expert SEO Services services by Synapse Digital Agency." />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Unique Hero */}
        <section className="relative overflow-hidden">
          
    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-emerald-500/20 to-transparent opacity-30" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-teal/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="container relative z-10 px-6 mx-auto text-center pt-32 pb-20 lg:pt-48 lg:pb-32">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-outfit">SEO Services</h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">Premium SEO Services solutions for forward-thinking brands.</p>
    </div>
  
        </section>

        {/* Unique Content Arrangement */}
        
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <Card key={i} className="p-6 text-center" variant="glass-dark">
                    <div className="w-10 h-10 mx-auto rounded-full border border-violet-500/50 mb-4 flex items-center justify-center text-violet-500">✦</div>
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
                    <div className="w-2 h-2 rounded-full bg-violet-500" />
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