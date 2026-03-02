import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/ui/Hero';
import { Card } from '../components/ui/Card';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Quote } from 'lucide-react';
import { CTASection } from '../components/ui/CTASection';

const testimonials = [
    {
        quote: "Guava transformed our legacy systems with AI. We reduced operational costs by 40% in just three months. Truly exceptional work.",
        author: "Elena Rodriguez",
        role: "CTO, GlobalTech",
        industry: "Tech"
    },
    {
        quote: "The web application they built is not only blazing fast but absolutely beautiful. It's rare to find an agency that excels at both engineering and design.",
        author: "Marcus Chen",
        role: "Founder, Zenith SaaS",
        industry: "Software"
    },
    {
        quote: "Our digital marketing ROI skyrocketed. The AI-driven approach to performance marketing gave us an edge we never thought possible.",
        author: "Sarah Jenkins",
        role: "CMO, Elevate Retail",
        industry: "E-commerce"
    }
];

export function Testimonials() {
    return (
        <>
            <Helmet>
                <title>Testimonials | Guava Digital Agency</title>
                <meta name="description" content="See what our clients say about our AI and digital services." />
            </Helmet>

            {/* Testimonials has a light theme concept, but sticking to "premium SaaS" we can do a softer/warm dark theme or inverted cards */}
            <main className="bg-zinc-900 min-h-screen text-zinc-100">
                <Hero
                    title="Client Success Stories"
                    description="Don't just take our word for it. See the impact we've made for industry leaders."
                    gradientClass="from-zinc-500/20 via-zinc-400/10 to-transparent"
                />

                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <Card key={i} className="p-8 relative bg-white/5 border border-white/10" variant="solid">
                                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                                <div className="mb-6 inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wide">
                                    {t.industry}
                                </div>
                                <p className="text-xl text-zinc-300 leading-relaxed mb-8 relative z-10 italic">
                                    "{t.quote}"
                                </p>
                                <div className="flex items-center mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-500 mr-4" />
                                    <div>
                                        <h4 className="font-bold text-lg">{t.author}</h4>
                                        <p className="text-zinc-500 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </SectionWrapper>

                <CTASection title="Become our next success story" subtitle="Join the ranks of modern businesses dominating their industries." />
            </main>
        </>
    );
}
