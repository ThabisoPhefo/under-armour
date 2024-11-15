import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CategoryCardProps {
  image: string;
  title: string;
}

function CategoryCard({ image, title }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm w-full">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-2 text-center hidden md:block">
        <span className="text-sm text-black hover:underline cursor-pointer md:text-base">
          Shop Now
        </span>
      </div>
    </div>
  );
}

// Mobile Carousel Component
function MobileCarousel({ categories }: { categories: CategoryCardProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className="relative w-full flex justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="w-full"
        >
          <CategoryCard {...categories[currentIndex]} />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {categories.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-black' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        →
      </button>
    </div>
  );
}

export function CategoriesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    {
      title: "TRAIN",
      image: "/images/Train.jpg",
    },
    {
      title: "RUN",
      image: "/images/Run.jpg",
    },
    {
      title: "GOLF",
      image: "/images/Golf.jpg",
    },
    {
      title: "ACCESSORIES",
      image: "/images/Accessories.jpg",
    }
  ];

  return (
    <section className="section-spacing section-spacing-top">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-3 md:mb-4 text-left">
          <h1 className="text-[min(2.5vh,22px)] font-black text-black leading-[1.1] tracking-tight font-neue-plak-condensed">
            Our Best Gear
          </h1>
          <p className="font-neue-plak-regular text-[14px] text-gray-700">
            Rock your potential with the best UA Gear
          </p>
        </div>
      </div>
        
      {isMobile ? (
        <div className="px-4 md:px-8 lg:px-16">
          <MobileCarousel categories={categories} />
        </div>
      ) : (
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                image={category.image}
                title={category.title}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
} 