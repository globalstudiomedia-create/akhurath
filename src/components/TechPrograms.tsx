import { Brain, Shield, Sparkles, Code, TrendingUp, Palette } from 'lucide-react';

const aiCourses = [
  {
    icon: Sparkles,
    title: 'AI Prompt Engineering',
    duration: '1–3 months',
  },
  {
    icon: Brain,
    title: 'Data Annotation + AI Model Training',
    duration: '1–2 months',
  },
  {
    icon: Code,
    title: 'AI Tools & No-Code Automation',
    duration: '1–2 months',
  },
  {
    icon: Code,
    title: 'Python for AI',
    duration: '4–6 months',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing with AI Tools',
    duration: '1–3 months',
  },
  {
    icon: Palette,
    title: 'AI Graphic Design (Canva + Midjourney + Photoshop AI)',
    duration: '1–2 months',
  },
];

const cyberCourses = [
  {
    title: 'Cybersecurity Fundamentals',
    duration: '1–1.5 months',
  },
  {
    title: 'Ethical Hacking Essentials',
    duration: '2 months',
  },
  {
    title: 'SOC Analyst Level 1',
    duration: '2–3 months',
  },
  {
    title: 'Network Security & Linux Admin',
    duration: '1.5–2 months',
  },
  {
    title: 'Bug Bounty & Freelance Hacking',
    duration: '1 month',
  },
  {
    title: 'Cyber Forensics & Incident Response',
    duration: '1.5–2 months',
  },
];

export default function TechPrograms() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-4">
            Additional Job-Ready Programs for Fast Career Growth
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Students can build dual skills: Aviation + Modern Tech jobs
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <Brain className="w-10 h-10 text-amber-500 mr-4" />
            <h3 className="text-3xl font-bold text-blue-950">AI Courses</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCourses.map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-amber-50 p-6 rounded-lg border border-blue-100 hover:border-amber-400 transition-all duration-300 hover:shadow-lg"
              >
                <course.icon className="w-8 h-8 text-amber-600 mb-3" />
                <h4 className="text-lg font-bold text-blue-950 mb-2">{course.title}</h4>
                <p className="text-sm text-gray-600">Duration: {course.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center mb-8">
            <Shield className="w-10 h-10 text-amber-500 mr-4" />
            <h3 className="text-3xl font-bold text-blue-950">
              Cybersecurity & Ethical Hacking
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cyberCourses.map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg border border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
              >
                <Shield className="w-8 h-8 text-blue-700 mb-3" />
                <h4 className="text-lg font-bold text-blue-950 mb-2">{course.title}</h4>
                <p className="text-sm text-gray-600">Duration: {course.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore Job-Ready Courses
          </button>
        </div>
      </div>
    </section>
  );
}
