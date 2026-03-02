import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Button } from '../components/ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact Us | Guava Digital Agency</title>
                <meta name="description" content="Get in touch with us to start your next big digital project." />
            </Helmet>

            <main className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-dark-900 via-dark-800 to-neon-blue/10 min-h-screen">
                <SectionWrapper>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Left Info */}
                        <div className="relative">
                            <h1 className="text-5xl lg:text-7xl font-bold mb-8 font-outfit">Let's Talk.</h1>
                            <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
                                Whether you're looking to build an AI agent, redesign your platform, or scale your marketing, our team is ready to help.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 shrink-0 text-neon-blue">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Email Us</h4>
                                        <p className="text-gray-400">hello@guava.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 shrink-0 text-neon-purple">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Call Us</h4>
                                        <p className="text-gray-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 shrink-0 text-neon-pink">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Visit Us</h4>
                                        <p className="text-gray-400">100 Innovation Market,<br />San Francisco, CA 94105</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="glass p-8 lg:p-12 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/20 rounded-full blur-[80px]" />

                            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Work Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Project Details</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us about your goals..."
                                    />
                                </div>

                                <Button className="w-full mt-4" size="lg">Send Message</Button>
                            </form>
                        </div>

                    </div>
                </SectionWrapper>
            </main>
        </>
    );
}
