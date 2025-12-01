import { Users, Building2, Award, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  {
    icon: Users,
    value: 2500,
    label: 'Students Placed',
    suffix: '+',
  },
  {
    icon: Building2,
    value: 150,
    label: 'Aviation Partners',
    suffix: '+',
  },
  {
    icon: Award,
    value: 15,
    label: 'Years of Excellence',
    suffix: '+',
  },
  {
    icon: BookOpen,
    value: 25,
    label: 'Professional Programs',
    suffix: '+',
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-5xl lg:text-6xl font-bold text-amber-400">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function SuccessStats() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-4">
            Our Success Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center bg-gradient-to-br from-blue-950 to-blue-800 p-4 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-amber-400" />
              </div>
              <div className="mb-3">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-lg font-semibold text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
