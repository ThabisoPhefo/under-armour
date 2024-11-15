import { Link } from '@remix-run/react';

export function InstagramSection() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-6">
          <h1 className="text-[min(2.5vh,22px)] font-black text-black leading-[1.1] tracking-tight font-neue-plak-condensed">
            Whats happening on Instagram
          </h1>
          <p className="mt-4 text-[14px] text-[#1D242C]/80 leading-[18px] font-neue-plak-regular text-[14px]">Don't miss out on the latest news and updates from Under Armour.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Video Cell */}
          <div className="md:col-span-1 relative h-full">
            <div className="relative w-full h-full">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/videos/ig_video.mp4" type="video/mp4" />
              </video>
              <Link to="https://instagram.com" className="absolute bottom-4 right-4 w-6 h-6" />
            </div>
          </div>

          {/* Grid of 4 Images */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Row */}
              <div className="relative aspect-square">
                <img 
                  src="/images/IG Image 2_DT.jpg" 
                  alt="Instagram post" 
                  className="w-full h-full object-cover"
                />
                <Link to="https://instagram.com" className="absolute bottom-4 right-4 w-6 h-6" />
              </div>
              <div className="relative aspect-square">
                <img 
                  src="/images/IG Image 3_DT.jpg" 
                  alt="Instagram post" 
                  className="w-full h-full object-cover"
                />
                <Link to="https://instagram.com" className="absolute bottom-4 right-4 w-6 h-6" />
              </div>
              {/* Bottom Row */}
              <div className="relative aspect-square">
                <img 
                  src="/images/IG Image 4_DT.jpg" 
                  alt="Instagram post" 
                  className="w-full h-full object-cover"
                />
                <Link to="https://instagram.com" className="absolute bottom-4 right-4 w-6 h-6" />
              </div>
              <div className="relative aspect-square">
                <img 
                  src="/images/IG Image 5_DT.jpg" 
                  alt="Instagram post" 
                  className="w-full h-full object-cover"
                />
                <Link to="https://instagram.com" className="absolute bottom-4 right-4 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 