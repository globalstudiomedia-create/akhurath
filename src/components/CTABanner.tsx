import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-6">
            Admissions Open — Limited Seats
          </h2>
          <div className="w-24 h-1 bg-blue-950 mx-auto mb-8"></div>
          <p className="text-xl lg:text-2xl text-blue-900 mb-10 leading-relaxed">
            Join Akhurath and prepare for a successful aviation career. Don't miss this opportunity
            to transform your future.
          </p>
          <button className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-10 py-5 rounded-lg text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center space-x-3 group">
            <span>Apply Now</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <p className="mt-6 text-blue-900 font-semibold">
            Batch starts soon. Secure your seat today!
          </p>
        </div>
      </div>
    </section>
  );
}
