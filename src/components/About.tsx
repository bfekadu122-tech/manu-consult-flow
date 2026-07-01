import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 relative">
              Strategic Guidance Rooted in Deep Industry Expertise
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-teal-500 -mb-2"></span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over a decade of deep industrial experience, we help manufacturing enterprises navigate complex
              operational challenges. Our core ethos is built on implementing high-impact, sustainable frameworks that
              eliminate waste and drive profitability.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We don't just hand over strategies; we work alongside your teams to close the operational divide between
              administrative personnel and frontline operators, ensuring a seamless, human-centric approach to digital
              adaptation.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div>
                <h4 className="text-2xl font-bold text-teal-600">12+ Years</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Sector Expertise</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-teal-600">Lean / 6σ</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">System Driven</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-teal-400">Why Partner With Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-teal-400 mt-1 mr-3 flex-shrink-0 h-5 w-5" />
                <span>
                  <strong>Proven Lean Frameworks:</strong> Deploying structured Kaizen and Six Sigma methodologies
                  engineered to optimize throughput.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-teal-400 mt-1 mr-3 flex-shrink-0 h-5 w-5" />
                <span>
                  <strong>Digital Alignment:</strong> Modernizing legacy infrastructure with intuitive workflows that
                  connect your entire workforce.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-teal-400 mt-1 mr-3 flex-shrink-0 h-5 w-5" />
                <span>
                  <strong>Sustainable Ecosystems:</strong> Integrating circular economy concepts to convert industrial
                  waste and friction into strategic assets.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
