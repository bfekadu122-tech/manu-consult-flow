import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartLine, TrendingUp, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <ChartLine className="text-teal-600 h-6 w-6" />,
    title: 'Operational Lean Audits',
    description: 'Comprehensive value stream mapping to uncover production bottlenecks, mitigate scrap rates, and structurally reduce localized waste patterns.',
    borderColor: 'border-teal-500',
    iconBg: 'bg-teal-100',
  },
  {
    icon: <TrendingUp className="text-slate-700 h-6 w-6" />,
    title: 'Continuous Improvement',
    description: 'Hands-on implementation of Kaizen event cycles, 5S workplace organization, and standardized operating procedures optimized for heavy industry.',
    borderColor: 'border-slate-700',
    iconBg: 'bg-slate-100',
  },
  {
    icon: <Smartphone className="text-teal-600 h-6 w-6" />,
    title: 'Industrial Digitalization',
    description: 'Guidance on deploying digital workflow suites, eliminating paper dependencies, and aligning shop-floor execution with centralized management tools.',
    borderColor: 'border-teal-500',
    iconBg: 'bg-teal-100',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Consulting Capabilities</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Tailored consulting solutions structured to enhance plant performance, minimize downtime, and empower
            personnel.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`bg-white shadow-sm hover:shadow-md transition-shadow border-t-4 ${service.borderColor}`}>
              <CardHeader>
                <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
