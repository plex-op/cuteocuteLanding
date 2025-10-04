import { Star, Quote, Building2, Award, Users as Users2, Play } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videoTestimonials = [
    {
      name: 'Suresh Patel',
      role: 'HR Manager',
      company: 'TechCorp India',
      thumbnail: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: '#',
      quote: 'Factory-direct pricing saved us 30% on our uniform costs'
    },
    {
      name: 'Meena Reddy',
      role: 'Event Manager',
      company: 'Mumbai Marathon',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: '#',
      quote: '2000+ tees delivered on time with perfect quality'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'HR Manager',
      company: 'TechCorp India',
      image: '👩‍💼',
      text: 'We placed a 500 polo order — Cute O Cute factory delivered in 7 days. The quality exceeded our expectations and the direct factory pricing saved us 30% compared to other vendors.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Event Coordinator',
      company: 'Chennai Marathon',
      image: '👨‍💼',
      text: 'Direct from manufacturer = better price & better control. We ordered 2000 marathon tees and the team handled everything from design to delivery flawlessly.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      role: 'Operations Head',
      company: 'Retail Solutions Ltd',
      image: '👩‍💻',
      text: 'Their in-house production facility gives us peace of mind. Quality is consistent, timelines are always met, and their team is incredibly responsive to our bulk uniform needs.',
      rating: 5
    }
  ];

  const clients = [
    { name: 'TechCorp', icon: Building2 },
    { name: 'StartupHub', icon: Award },
    { name: 'Marathon Inc', icon: Users2 },
    { name: 'Corporate Pro', icon: Building2 }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Trusted by 500+ Companies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what our corporate clients and event organizers say about our factory-direct service
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Video Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-slate-200 group"
              >
                <div className="relative aspect-video bg-slate-200">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <button
                    onClick={() => setPlayingVideo(index)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform animate-pulse">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <p className="text-sm font-medium">{video.quote}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center text-2xl">
                      🎥
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{video.name}</div>
                      <div className="text-sm text-slate-600">{video.role}</div>
                      <div className="text-sm text-red-600 font-medium">{video.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 relative"
            >
              <div className="absolute top-6 right-6 text-red-500 opacity-10">
                <Quote className="w-16 h-16" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-red-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
            Trusted by Leading Corporates & Events
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => {
              const Icon = client.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <Icon className="w-10 h-10 text-slate-600" />
                  <span className="font-semibold text-slate-700">{client.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      <div className="relative mt-12 rounded-2xl overflow-hidden shadow-2xl">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg.png')" }} // replace with your actual image
  />

  {/* Red tint overlay */}
  {/* <div className="absolute inset-0 bg-red-700/80 mix-blend-multiply" /> */}
    <div className="absolute inset-0 bg-black/60 z-0" />

  {/* Content */}
  <div className="relative p-10 text-white text-center">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold mb-4">
        Ready to Experience Factory-Direct Quality?
      </h3>
      <p className="text-red-100 text-lg mb-8">
        Join 500+ satisfied clients who trust our Tirupur factory for their bulk t-shirt needs
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() =>
            document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-red-600 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
        >
          Get Your Quote Now
        </button>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
