import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/ui/CTASection';

export function DataAnalytics() {
  return (
    <>
      <Helmet>
        <title>Data Analytics | Synapse</title>
        <meta name="description" content="Expert Data Analytics services by Synapse Digital Agency." />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Unique Hero */}
        <section className="relative overflow-hidden">
          
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-orange-400/20 to-transparent opacity-20" />
    <div className="container relative z-10 px-6 mx-auto pt-32 pb-20 lg:pt-48 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-outfit">Data Analytics</h1>
        <p className="text-xl text-gray-400 mb-10">Premium Data Analytics solutions for forward-thinking brands.</p>
      </div>
      <div className="relative aspect-square">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-orange-400/20 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute inset-8 border border-white/10 rounded-full glass" />
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
                    <div className="w-10 h-10 mx-auto rounded-full border border-amber-400/50 mb-4 flex items-center justify-center text-amber-400">✦</div>
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
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
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