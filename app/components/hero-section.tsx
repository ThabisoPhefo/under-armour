import { useEffect, useRef } from 'react';
import { useDeviceDetect } from '~/hooks/useDeviceDetect';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMobile } = useDeviceDetect();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [isMobile]);

  return (
    <section className="relative w-full overflow-hidden">
      {!isMobile ? (
        // Desktop Layout with text overlay
        <div className="relative w-full">
          <video
            ref={videoRef}
            className="w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
          >
            <source 
              src="/videos/UA_Theme_1_DT.mp4"
              type="video/mp4" 
            />
          </video>
          
          <div className="absolute inset-0 flex items-center">
            <div className="ml-auto w-[45%]">
              <div className="text-left">
                <h1 className="text-[4vw] font-black text-black leading-[0.9] tracking-tight font-neue-plak-condensed">
                  <span className="block">CHECK</span>
                  <span className="block">OUT OUR</span>
                  <span className="block">LATEST</span>
                  <span className="block">GEAR</span>
                </h1>
                <p className="mt-[2vh] text-[0.8vw] text-black/80 leading-[1.2] font-neue-plak-regular max-w-[80%]">
                  <span className="block">Advanced tech, superior comfort and all</span>
                  <span className="block">performance is what our latest UA gear is all</span>
                  <span className="block">about. Built to go further, push hard and break</span>
                  <span className="block">your boundaries.</span>
                </p>
                <button className="mt-[3vh] px-[3vw] py-[1.5vh] w-auto bg-black font-neue-plak-regular text-[1.2vw] text-white transition hover:bg-gray-800">
                  Shop UA New Arrivals
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Mobile Layout with text below
        <div className="flex flex-col">
          <div className="w-full">
            <video
              ref={videoRef}
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
            >
              <source 
                src="/videos/UA_Theme_1_MB.mp4"
                type="video/mp4" 
              />
            </video>
          </div>
          <div className="container mx-auto px-4 pb-0 pt-6">
            <h1 className="text-[40px] font-neue-plak-condensed font-black text-[#1D242C] leading-[1] tracking-tight">
              <span className="block">CHECK OUT OUR</span>
              <span className="block -mt-1">LATEST GEAR</span>
            </h1>
            <p className="mt-4 text-[14px] text-[#1D242C]/80 leading-[1.2] font-neue-plak-regular">
              Advanced tech, superior comfort and all performance is what our latest UA gear is all about. Built to go further, push hard and break your boundaries.
            </p>
            <button className="mt-4 mb-0 w-full bg-black font-neue-plak-regular text-[16px] text-white px-8 py-3">
              Shop UA New Arrivals
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 