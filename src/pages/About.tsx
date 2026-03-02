import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/ui/Hero';

export function About() {
    return (
        <>
            <Helmet>
                <title>About Us | Guava Digital Agency</title>
                <meta name="description" content="Learn about our journey, mission, and the team." />
            </Helmet>
            <main>
                <Hero
                    title="About Guava"
                    description="We are a collective of visionaries, engineers, and creatives building the future."
                    gradientClass="from-white/10 via-gray-500/10 to-transparent"
                />
                <div className="container mx-auto px-6 py-20 text-center text-gray-400">
                    About content coming soon...
                </div>
            </main>
        </>
    );
}
