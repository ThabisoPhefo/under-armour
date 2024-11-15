import { useEffect, useState } from 'react';

export function ProjectRockSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="section-spacing">
      {!isMobile ? (
        // Desktop Layout - Contained with text overlay
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="relative">
            {/* Background Image */}
            <img 
              src="/images/UA_Theme_2_DT.jpg"
              alt="Project Rock gear"
              className="w-full"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="max-w-[30%] p-8 mr-[1%]">
                <span className="text-[0.8vw] font-semibold text-white mb-2 block">
                  Project Rock
                </span>
                <h1 className="font-neue-plak-condensed font-black text-[1.5vw] leading-tight text-white">
                  <span className="block">EVERY SIDE</span>
                  <span className="block">OF STRONG</span>
                </h1>
                <p className="mt-[2vh] text-[0.8vw] text-white/80 w-[90%] leading-[1.3] font-neue-plak-regular">
                  The Underground collection is inspired by the idea of a Project Rock fight club. A place where we push each other harder to make each other stronger. A drop site dedicated to you and your crew. The neon colourways are a reflection of the energy we bring to every rep, every set and every challenge.
                </p>
                <button className="mt-[2vh] border border-white text-white px-[2vw] py-[1vh] text-[0.8vw] hover:bg-white hover:text-black transition w-fit">
                  Shop Project Rock
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Mobile Layout - Full width image with text below
        <div className="flex flex-col">
          <div className="w-full">
            <img 
              src="/images/UA_Theme_2_MB.jpg"
              alt="Project Rock gear"
              className="w-full"
            />
          </div>
          <div className="container mx-auto px-4 pb-0 pt-6 -mt-1 text-left">
            <span className="text-[16px] font-semibold text-[#1D242C] mb-2 block">
              Project Rock
            </span>
            <h1 className="font-neue-plak-condensed font-black text-[48px] leading-[1] text-[#1D242C]">
              <span className="block">EVERY SIDE OF</span>
              <span className="block -mt-1">STRONG</span>
            </h1>
            <p className="mt-4 text-[14px] text-[#1D242C]/80 leading-[1.2] font-neue-plak-regular">
              The Underground collection is inspired by the idea of a Project Rock fight club. A place where we push each other harder to make each other stronger. A drop site dedicated to you and your crew. The neon colourways are a reflection of the energy we bring to every rep, every set and every challenge.
            </p>
            <button className="mt-4 mb-0 w-full bg-[#1D242C] text-white px-8 py-3 text-[16px] font-neue-plak-bold">
              Shop Project Rock
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 