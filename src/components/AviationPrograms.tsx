import { Plane, Users, Headphones, Globe, Ticket } from 'lucide-react';

const programs = [
  {
    icon: Users,
    title: 'Airport Ground Staff Training',
    description: 'Launch your career in airport operations and ground handling services',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Plane,
    title: 'Cabin Crew & In-Flight Services',
    description: 'Join the skies with professional cabin crew training for global airlines',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Headphones,
    title: 'Airport Customer Service & Passenger Handling',
    description: 'Master the art of world-class passenger service and assistance',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Globe,
    title: 'Aviation Hospitality & Travel Management',
    description: 'Build expertise in aviation hospitality and travel industry operations',
    color: 'from-amber-600 to-orange-600',
  },
  {
    icon: Ticket,
    title: 'Airline Ticketing & GDS Operations',
    description: 'Master global reservation systems and airline ticketing operations',
    color: 'from-blue-700 to-blue-800',
  },
];

export default function AviationPrograms() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-4">
            Aviation Programs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional aviation training programs designed to launch your career in the global aviation industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`bg-gradient-to-br ${program.color} p-6 text-white`}>
                <program.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold">{program.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Aviation Courses
          </button>
        </div>
      </div>
    </section>
  );
}
