import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Cta from '@/components/Cta';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <article>
        <Hero />
        <About />
        <Features />
        <Cta />
        <Contact />
      </article>
    </main>
  );
}

