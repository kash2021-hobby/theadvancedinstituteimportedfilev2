import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  eyebrowText: string;
  headline: string;
  subtext: string;
  personImage: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    eyebrowText: "Expert-Led Coaching",
    headline: "Crack Government Exams with Confidence",
    subtext: "Join India's leading government exam institute with 15+ years of proven success in RRB NTPC, SSC CGL, SSC CHSL, and Banking exams.",
    personImage: "/2bcff076-87b2-405a-b4d1-a4287e6f29c7.png",
    ctaText: "Explore Programs",
    ctaLink: "/courses"
  },
  {
    id: 2,
    eyebrowText: "95% Success Rate",
    headline: "SSC & Railway Exam Preparation That Works",
    subtext: "Structured classroom programs with small batch sizes, comprehensive study material, and personalized mentoring from experienced faculty.",
    personImage: "/woman-success-story.jpg",
    ctaText: "View All Courses",
    ctaLink: "/courses"
  },
  {
    id: 3,
    eyebrowText: "500+ Students Selected",
    headline: "Your Dream Government Job Starts Here",
    subtext: "Small batches of max 20 students for personal attention, full-length mock exams matching actual exam patterns, and expert guidance every step of the way.",
    personImage: "/student-girl-success.jpg",
    ctaText: "Book Free Demo",
    ctaLink: "/contact"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const slide = slides[currentSlide];

  return (
    <section 
      className="relative bg-white overflow-hidden min-h-[100vh] lg:min-h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Desktop: Background Image with Gradient Overlay */}
      <div 
        key={`bg-desktop-${slide.id}`}
        className="hidden lg:block absolute inset-0 animate-fadeIn"
      >
        <img
          src={slide.personImage}
          alt="Hero Background"
          className="w-full h-full object-cover object-right"
        />
        {/* Desktop: Left-to-right gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.85) 55%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0) 100%)'
          }}
        ></div>
      </div>

      {/* Mobile Layout - Simplilearn Style */}
      <div className="lg:hidden">
        {/* Mobile: Person Image at Top */}
        <div 
          key={`mobile-img-${slide.id}`}
          className="relative w-full h-[55vh] animate-fadeIn"
        >
          <img
            src={slide.personImage}
            alt={slide.headline}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Mobile: Content Below Image */}
        <div className="bg-white px-5 py-8 pb-24">
          <div 
            key={`mobile-content-${slide.id}`}
            className="animate-fadeIn"
          >
            {/* Eyebrow Text */}
            <p className="text-[15px] font-medium text-gray-700 leading-[1.4] mb-3">
              {slide.eyebrowText}
            </p>

            {/* Main Heading */}
            <h1 className="text-[32px] font-bold text-black leading-[1.2] mb-4">
              {slide.headline}
            </h1>

            {/* Subtext */}
            <p className="text-[15px] font-normal text-gray-600 leading-[1.5] mb-6">
              {slide.subtext}
            </p>

            {/* Primary CTA Button - Full Width */}
            <Link
              to={slide.ctaLink}
              className="block w-full bg-[#0d6efd] text-white h-[50px] rounded-lg text-[16px] font-medium hover:bg-blue-700 transition-all duration-300 leading-[50px] text-center"
            >
              {slide.ctaText}
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Content Container */}
      <div className="hidden lg:block relative z-10 max-w-[1200px] mx-auto px-[5%] py-[80px] min-h-screen">
        <div className="flex items-center h-full min-h-[calc(100vh-160px)]">
          <div className="w-full max-w-[600px]">
            <div 
              key={`desktop-content-${slide.id}`}
              className="animate-fadeIn"
            >
              {/* Eyebrow Text */}
              <p className="text-[22px] font-semibold text-gray-800 leading-[1.4] mb-[14px]">
                {slide.eyebrowText}
              </p>

              {/* Main Heading */}
              <h1 className="text-[56px] font-extrabold text-slate-900 leading-[1.15] mb-[18px] max-w-[600px]">
                {slide.headline}
              </h1>

              {/* Subtext */}
              <p className="text-[20px] font-normal text-gray-600 leading-[1.6] mb-[28px]">
                {slide.subtext}
              </p>

              {/* Primary CTA Button */}
              <Link
                to={slide.ctaLink}
                className="inline-block w-auto bg-blue-600 text-white h-[52px] px-[28px] rounded-lg text-[16px] font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg leading-[52px] text-center"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Desktop only */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 hidden lg:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-900" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 hidden lg:block"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-900" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? 'w-8 h-2 bg-blue-600'
                : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
