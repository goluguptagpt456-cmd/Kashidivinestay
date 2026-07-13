import { MapPin, Navigation } from 'lucide-react';

const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];

export default function Location() {
  return (
    <section id="location" className="py-24 bg-ivory-200 border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2 pt-4">
            <div className="animate-on-scroll animate-fade-up">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-4 block">Varanasi Hub</span>
              <h2 className="text-4xl font-serif text-charcoal-900 mb-8">Location & Nearby</h2>
              
              <p className="text-sm text-gray-600 mb-8 font-light leading-relaxed">
                Situated in the heart of Varanasi, Kashi Divine Stay offers unparalleled access to the city's spiritual and cultural landmarks. We are open 24 Hours.
              </p>
            </div>

            <div className="bg-ivory-100 p-6 border border-gold-500/20 mb-10 animate-on-scroll animate-fade-up delay-100">
              <div className="flex gap-4">
                <div className="mt-1">
                  <MapPin size={20} className="text-maroon-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-[13px] text-charcoal-900 mb-1">Address</h4>
                  <p className="text-xs text-gray-500">Near Kaal Bhairav Temple, Mahamrityunjay Road, Madhyameshwar, Daranagar, Varanasi, UP, 221001</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-serif text-xl text-maroon-800 mb-6 animate-on-scroll animate-fade-in">Nearby Attractions</h4>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Kaal Bhairav Temple', dist: 'Walking distance (2 mins)' },
                  { name: 'Kashi Vishwanath Temple', dist: '1.5 km' },
                  { name: 'Dashashwamedh Ghat', dist: '1.8 km' },
                  { name: 'Manikarnika Ghat', dist: '1.2 km' },
                ].map((place, i) => (
                  <div key={i} className={`flex justify-between text-[11px] border-b border-gold-500/20 pb-2 animate-on-scroll animate-slide-side ${delays[i]}`}>
                    <span className="text-charcoal-900">{place.name}</span>
                    <span className="text-gold-500 font-medium">{place.dist}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 animate-on-scroll animate-fade-in delay-300">
               <a 
                href="https://maps.google.com/?q=Kaal+Bhairav+Temple+Varanasi" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-maroon-800 hover:text-charcoal-900 transition-colors"
               >
                 <Navigation size={16} />
                 Get Directions
               </a>
            </div>
          </div>

          <div className="lg:w-1/2 h-[500px] bg-charcoal-900 relative animate-on-scroll animate-fade-in delay-200">
            {/* Embed Google Map - focusing on Kaal Bhairav area */}
            <iframe 
              src="https://maps.google.com/maps?q=Kaal+Bhairav+Temple+Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location Map"
              className="absolute inset-0 grayscale-[40%] contrast-125 opacity-90"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
