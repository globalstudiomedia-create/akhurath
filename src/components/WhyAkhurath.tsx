import { Check } from 'lucide-react';

const benefits = [
  'Aviation-first institution with disciplined training',
  'Eligibility: 12th-pass students',
  'International-standard mentoring',
  'Smart classrooms & practical labs',
  'Industry-certified trainers',
  'Skills that lead to employment in India & abroad',
  'Personality development, communication & grooming',
  'Placement guidance and interview support',
];

export default function WhyAkhurath() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Students Trust Akhurath
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            The premier choice for aviation and career training excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 bg-amber-500 rounded-full p-2">
                <Check className="w-6 h-6 text-blue-950" />
              </div>
              <p className="text-lg text-white leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
