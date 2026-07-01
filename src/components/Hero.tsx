import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-slate-800 text-white py-24 md:py-36 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/3e837ddb-32bf-40f0-b31c-294d4b910789/industrial-background-ef0c8ded-1782905466742.webp')`,
      }}
    >
      <div className="container mx-auto px-6 text-center md:text-left max-w-4xl">
        <span className="text-teal-400 font-bold tracking-wider uppercase text-sm block mb-3">
          Optimize. Transform. Scale.
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Driving Excellence in Industrial Operations
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Bridging the gap between frontline shop-floor execution and strategic executive oversight. Specializing in Lean
          Manufacturing, continuous improvement, and digital workforce transformation.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
          <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold">
            <a href="#contact">Book a Consultation</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-gray-400 hover:border-white text-white font-medium bg-transparent">
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
