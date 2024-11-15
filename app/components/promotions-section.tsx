import { Link } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function PromotionsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const promotions = [
    {
      image: '/images/Promo 1.jpg',
      price: 'R700',
      alt: 'Buy 2 for R700 promotion'
    },
    {
      image: '/images/Promo 2.jpg',
      price: 'R800',
      alt: 'Buy 2 for R800 promotion'
    },
    {
      image: '/images/Promo 3.jpg',
      price: 'R1000',
      alt: 'Buy 2 for R1000 promotion'
    },
    {
      image: '/images/Promo 4.jpg',
      price: 'R1200',
      alt: 'Buy 2 for R1200 promotion'
    }
  ];

  return (
    <section className="mb-0 md:mb-[80px] after:content-[''] after:block after:h-[40px] after:md:h-0">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-4">
        <h1 className="text-[min(2.5vh,22px)] font-black text-black leading-[1.1] tracking-tight font-neue-plak-condensed">
          Discover our latest promotions
        </h1>
        <p className="mt-2 text-[14px] text-[#1D242C]/80 leading-[18px] font-neue-plak-regular">
          Get the best deals on the best gear.
        </p>
      </div>
      
      {isMobile ? (
        <div className="mb-0">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            className="w-full"
          >
            {promotions.map((promo, index) => (
              <SwiperSlide key={index}>
                <Link 
                  to="#" 
                  className="relative block overflow-hidden group"
                >
                  <img
                    src={promo.image}
                    alt={promo.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {promotions.map((promo, index) => (
              <Link 
                key={index}
                to="#" 
                className="relative block overflow-hidden group"
              >
                <img
                  src={promo.image}
                  alt={promo.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
} 