import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-dark-900 border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-outfit mb-6">
                            <Sparkles className="w-6 h-6 text-neon-blue" />
                            <span className="text-white">Guava</span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Empowering brands with next-generation AI and digital solutions.
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-6">Services</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/services/ai-agent-development" className="hover:text-white transition-colors">AI Agents</Link></li>
                            <li><Link to="/services/web-development" className="hover:text-white transition-colors">Web Dev</Link></li>
                            <li><Link to="/services/digital-marketing" className="hover:text-white transition-colors">Marketing</Link></li>
                            <li><Link to="/services" className="hover:text-neon-blue transition-colors">View All &rarr;</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-6">Legal</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Guava. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
