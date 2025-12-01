import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    course: 'Cabin Crew Training',
    text: 'Akhurath transformed my confidence completely. The training was rigorous and professional, preparing me for international airline interviews. I landed my dream job with Emirates!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    name: 'Rahul Verma',
    course: 'Airport Ground Staff',
    text: 'The practical training and personality development sessions made all the difference. Within 3 months of completing my course, I secured a position at Delhi International Airport.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    name: 'Anjali Patel',
    course: 'Aviation Hospitality',
    text: 'The placement support and interview preparation at Akhurath are exceptional. The trainers are industry experts who genuinely care about student success.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-4">
            Student Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates who are now flying high in their aviation careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-amber-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="w-12 h-12 text-amber-400 opacity-50 absolute top-4 right-4" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-amber-400 mx-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-center">
                  <p className="font-bold text-blue-950">{testimonial.name}</p>
                  <p className="text-sm text-amber-600 font-semibold">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
