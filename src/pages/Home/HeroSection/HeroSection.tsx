import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const slides = [
    {
      title: "Best place to choose your clothes",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.",
      image: "https://merakiui.com/images/components/Catalogue-pana.svg",
      alt: "Catalogue-pana",
    },
    {
      title: "Find your perfect style",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.",
      image:
        "https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Online-shopping-pana",
    },
    {
      title: "Upgrade your wardrobe",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.",
      image:
        "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fashion-pana",
    },
    // Add more slides as needed
  ];
  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="w-full p-1 border">
                <div className="container px-6 py-16 mx-auto">
                  <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                      <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                          {slide.title}
                        </h1>

                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          {slide.paragraph}
                        </p>

                        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                          Shop Now
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                      <img
                        className="w-full h-full lg:max-w-2xl rounded-xl"
                        src={slide.image}
                        alt={slide.alt}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 p-2 bg-gray-800 rounded-full cursor-pointer" />
        <CarouselNext className="absolute right-0 p-2 bg-gray-800 rounded-full cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default HeroSection;
