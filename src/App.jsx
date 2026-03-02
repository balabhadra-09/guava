import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layouts/MainLayout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';

import { AIAgentDevelopment } from "./services/AIAgentDevelopment";
import { AIAutomation } from "./services/AIAutomation";
import { AIChatbotDevelopment } from "./services/AIChatbotDevelopment";
import { CustomAISolutions } from "./services/CustomAISolutions";
import { WebDevelopment } from "./services/WebDevelopment";
import { UIUXDesign } from "./services/UIUXDesign";
import { BrandingIdentity } from "./services/BrandingIdentity";
import { DigitalMarketing } from "./services/DigitalMarketing";
import { SEOServices } from "./services/SEOServices";
import { SocialMediaManagement } from "./services/SocialMediaManagement";
import { PerformanceMarketing } from "./services/PerformanceMarketing";
import { ContentMarketing } from "./services/ContentMarketing";
import { GraphicDesign } from "./services/GraphicDesign";
import { VideoProduction } from "./services/VideoProduction";
import { EmailMarketing } from "./services/EmailMarketing";
import { InfluencerMarketing } from "./services/InfluencerMarketing";
import { MarketingStrategy } from "./services/MarketingStrategy";
import { DataAnalytics } from "./services/DataAnalytics";
import { AppDevelopment } from "./services/AppDevelopment";
import { CloudIntegration } from "./services/CloudIntegration";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services/ai-agent-development" element={<AIAgentDevelopment />} />
        <Route path="/services/ai-automation" element={<AIAutomation />} />
        <Route path="/services/ai-chatbot-development" element={<AIChatbotDevelopment />} />
        <Route path="/services/custom-ai-solutions" element={<CustomAISolutions />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/branding-identity" element={<BrandingIdentity />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/seo-services" element={<SEOServices />} />
        <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/services/content-marketing" element={<ContentMarketing />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/services/video-production" element={<VideoProduction />} />
        <Route path="/services/email-marketing" element={<EmailMarketing />} />
        <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
        <Route path="/services/marketing-strategy" element={<MarketingStrategy />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/cloud-integration" element={<CloudIntegration />} />
      </Route>
    </Routes>
  );
}

export default App;
