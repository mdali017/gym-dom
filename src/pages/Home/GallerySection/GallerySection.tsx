import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { Gallery } from "react-grid-gallery";

type GallerySectionData = {
  src: string;
  width: number;
  height: number;
  isSelected?: boolean;
  caption?: string;
  alt?: string;
};

const GallerySection = () => {
  const images: GallerySectionData[] = [
    {
      src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      width: 640,
      height: 426,
      alt: "Man lifting weights",
    },
    {
      src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      width: 640,
      height: 426,
      alt: "Woman doing push-ups",
    },
    {
      src: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg",
      width: 640,
      height: 960,
      alt: "Gym equipment",
    },
    {
      src: "https://images.pexels.com/photos/4058315/pexels-photo-4058315.jpeg",
      width: 640,
      height: 426,
      alt: "Man doing pull-ups",
    },
    {
      src: "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg",
      width: 640,
      height: 426,
      alt: "Woman lifting dumbbells",
    },
    {
      src: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
      width: 640,
      height: 960,
      alt: "Treadmills in a gym",
    },
    {
      src: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg",
      width: 640,
      height: 426,
      alt: "Man doing bench press",
    },

    {
      src: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
      width: 640,
      height: 960,
      alt: "Woman stretching in a gym",
    },
    {
      src: "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg",
      width: 640,
      height: 426,
      alt: "Man doing squats",
    },
    {
      src: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
      width: 640,
      height: 960,
      alt: "Woman stretching in a gym",
    },
    {
      src: "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg",
      width: 640,
      height: 426,
      alt: "Man doing squats",
    },
    {
      src: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
      width: 640,
      height: 960,
      alt: "Woman stretching in a gym",
    },
    {
      src: "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg",
      width: 640,
      height: 426,
      alt: "Man doing squats",
    },
    {
      src: "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg",
      width: 640,
      height: 426,
      alt: "Man doing squats",
    },
    {
      src: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
      width: 640,
      height: 960,
      alt: "Woman stretching in a gym",
    },
    {
      src: "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg",
      width: 640,
      height: 426,
      alt: "Man doing squats",
    },
  ];
  return (
    <Container>
      <SectionTitle title="Our Gallery" />
      <div className="w-[80%] mx-auto ">
        <Gallery images={images} />
      </div>
    </Container>
  );
};

export default GallerySection;
