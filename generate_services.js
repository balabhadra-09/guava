import fs from 'fs';
import path from 'path';

const services = [
    "AI Agent Development", "AI Automation", "AI Chatbot Development", "Custom AI Solutions",
    "Web Development", "UI/UX Design", "Branding & Identity", "Digital Marketing",
    "SEO Services", "Social Media Management", "Performance Marketing", "Content Marketing",
    "Graphic Design", "Video Production", "Email Marketing", "Influencer Marketing",
    "Marketing Strategy", "Data Analytics", "App Development", "Cloud Integration"
];

const colors = [
    "neon-blue", "neon-purple", "neon-pink", "emerald-400", "cyan-400", "fuchsia-500",
    "rose-500", "amber-400", "violet-500", "indigo-400"
];

const gradients = [
    "from-neon-blue/20 via-neon-purple/20 to-transparent",
    "from-neon-purple/20 via-neon-pink/20 to-transparent",
    "from-emerald-400/20 via-cyan-400/20 to-transparent",
    "from-fuchsia-500/20 via-rose-500/20 to-transparent",
    "from-amber-400/20 via-rose-500/20 to-transparent",
    "from-violet-500/20 via-indigo-400/20 to-transparent",
    "from-cyan-400/20 via-blue-500/20 to-transparent",
    "from-pink-500/20 via-orange-400/20 to-transparent",
    "from-teal-400/20 via-emerald-500/20 to-transparent",
    "from-indigo-500/20 via-purple-500/20 to-transparent"
];

const heroStyles = [
    // Style 1: Centered with large glow
    (g, t) => `
    <div className="absolute inset-0 bg-gradient-to-br ${g} opacity-30" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-${g.split('-')[1]}/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="container relative z-10 px-6 mx-auto text-center pt-32 pb-20 lg:pt-48 lg:pb-32">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-outfit">{title}</h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">{description}</p>
    </div>
  `,
    // Style 2: Split Left text, right abstract shape
    (g, t) => `
    <div className="absolute inset-0 bg-gradient-to-r ${g} opacity-20" />
    <div className="container relative z-10 px-6 mx-auto pt-32 pb-20 lg:pt-48 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-outfit">{title}</h1>
        <p className="text-xl text-gray-400 mb-10">{description}</p>
      </div>
      <div className="relative aspect-square">
        <div className="absolute inset-0 bg-gradient-to-tr ${g} rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute inset-8 border border-white/10 rounded-full glass" />
      </div>
    </div>
  `,
    // Style 3: Split Right text, left geometric pattern
    (g, t) => `
    <div className="absolute inset-0 bg-gradient-to-t ${g} opacity-20" />
    <div className="container relative z-10 px-6 mx-auto pt-32 pb-20 lg:pt-48 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1 relative aspect-video">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom_right,white,transparent)]" />
      </div>
      <div className="order-1 lg:order-2">
        <h1 className="text-5xl lg:text-show font-bold mb-6 font-outfit text-right">{title}</h1>
        <p className="text-xl text-gray-400 mb-10 text-right">{description}</p>
      </div>
    </div>
  `,
    // Style 4: Minimal with top border gradient
    (g, t) => `
    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${g}" />
    <div className="container relative z-10 px-6 mx-auto pt-40 pb-20 lg:pt-56 lg:pb-32">
      <div className="max-w-3xl">
        <h1 className="text-6xl lg:text-8xl font-bold mb-8 font-outfit tracking-tighter">{title}</h1>
        <p className="text-2xl text-gray-500 mb-10 font-light">{description}</p>
      </div>
    </div>
  `,
];

const contentArrangements = [
    // Arrg 1: Problem -> Solution -> Features
    (c) => `
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-${c}">The Challenge</h2>
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
                <div className="w-12 h-12 rounded-lg bg-${c}/20 mb-6" />
                <h3 className="text-xl font-bold mb-3">Feature {i}</h3>
                <p className="text-gray-400">Advanced implementation of industry best practices tailored for your specific needs.</p>
              </Card>
            ))}
          </div>
        </SectionWrapper>
  `,
    // Arrg 2: Features -> Process -> Benefits
    (c) => `
        <SectionWrapper>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">What We Deliver</h2>
            <p className="text-gray-400 text-lg">A comprehensive suite of capabilities designed to transform your business from the ground up.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <Card key={i} className="p-8 flex items-start gap-6 border-l-4 border-l-${c}">
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
                <div className="w-8 h-8 rounded-full bg-${c} text-dark-900 font-bold mx-auto mb-4 flex items-center justify-center">{i+1}</div>
                <h4 className="font-bold">{step}</h4>
              </div>
            ))}
          </div>
        </SectionWrapper>
  `,
    // Arrg 3: Split Features -> Benefits List -> FAQ style
    (c) => `
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <Card key={i} className="p-6 text-center" variant="glass-dark">
                    <div className="w-10 h-10 mx-auto rounded-full border border-${c}/50 mb-4 flex items-center justify-center text-${c}">✦</div>
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
                    <div className="w-2 h-2 rounded-full bg-${c}" />
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>
  `
];

let appRoutes = '';
let appImports = '';

services.forEach((service, index) => {
    const compName = service.replace(/[^a-zA-Z0-9]/g, '');
    const pathName = service.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const c = colors[index % colors.length];
    const g = gradients[index % gradients.length];
    const heroCode = heroStyles[index % heroStyles.length](g, compName).replace(/{title}/g, service).replace(/{description}/g, `Premium ${service} solutions for forward-thinking brands.`);
    const contentCode = contentArrangements[index % contentArrangements.length](c);

    const fileContent = `
import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/ui/CTASection';

export function ${compName}() {
  return (
    <>
      <Helmet>
        <title>${service} | Synapse</title>
        <meta name="description" content="Expert ${service} services by Synapse Digital Agency." />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Unique Hero */}
        <section className="relative overflow-hidden">
          ${heroCode}
        </section>

        {/* Unique Content Arrangement */}
        ${contentCode}

        <CTASection title="Let's build something great" subtitle="Ready to elevate your business?" />
      </main>
    </>
  );
}
`;

    fs.writeFileSync(path.join(process.cwd(), 'src/services', compName + '.tsx'), fileContent.trim());

    appImports += 'import { ' + compName + ' } from "./services/' + compName + '";\n';
    appRoutes += '        <Route path="/services/' + pathName + '" element={<' + compName + ' />} />\n';
});

// Update Services main page
const servicesMainContent = `
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';

const allServices = [
  ${services.map(s => '{ title: "' + s + '", path: "/services/' + s.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '" }').join(',\n  ')}
];

export function Services() {
  return (
    <>
      <Helmet>
        <title>All Services | Synapse Digital</title>
        <meta name="description" content="Explore our 20 premium digital and AI services." />
      </Helmet>
      <main className="pt-32 pb-20 bg-dark-900 min-h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue/20 via-dark-900 to-transparent pointer-events-none" />
        
        <SectionWrapper className="relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-outfit">Our Capabilities</h1>
            <p className="text-xl text-gray-400">A full spectrum of digital excellence, from artificial intelligence to immersive web experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allServices.map((srv, idx) => (
              <motion.div 
                key={srv.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link to={srv.path} className="block h-full">
                  <Card className="h-full p-6 hover:border-neon-purple/50 transition-colors group">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-neon-blue transition-colors">{srv.title}</h3>
                    <div className="w-8 h-1 bg-white/10 rounded-full group-hover:bg-neon-purple transition-colors mt-4" />
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}
`;

fs.writeFileSync(path.join(process.cwd(), 'src/pages/Services.tsx'), servicesMainContent.trim());
// We will let the LLM update the App.jsx manually since it's easier and safer
console.log("Services generated. App imports:\n", appImports);
console.log("App routes:\n", appRoutes);
