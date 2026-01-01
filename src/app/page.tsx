'use client';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ImageSlideshow from '@/components/ImageSlideshow';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
          {/* Left column - Image slideshow */}
          <aside className="hidden lg:block">
            <ImageSlideshow />
          </aside>

          {/* Right column - Content */}
          <div className="max-w-2xl">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
