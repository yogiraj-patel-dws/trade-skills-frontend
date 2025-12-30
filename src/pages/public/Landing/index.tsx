import Hero from '../../../components/landing/Hero';
import Stats from '../../../components/landing/Stats';
import Skills from '../../../components/landing/Skills';
import Features from '../../../components/landing/Features';
import HowItWorks from '../../../components/landing/HowItWorks';
import Testimonials from '../../../components/landing/Testimonials';
import CallToAction from '../../../components/landing/CallToAction';
import Footer from '../../home/Footer';
import {STATS, POPULAR_SKILLS, TESTIMONIALS} from "../../../constants/constants";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background-light text-slate-900">
      <main className="w-full px-6">
        <Hero />
        <Stats stats={STATS} />
        <Skills skills={POPULAR_SKILLS} />
        <Features />
        <HowItWorks />
        <Testimonials testimonials={TESTIMONIALS} />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
};

export default Landing;