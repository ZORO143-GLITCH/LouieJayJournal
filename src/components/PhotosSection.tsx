import { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import tourPhoto1 from "@/assets/ph1.jpg";
import tourPhoto2 from "@/assets/ph2.jpg";
import tourPhoto3 from "@/assets/ph3.jpg";
import tourPhoto4 from "@/assets/ph4.jpg";
import tourPhoto5 from "@/assets/ph5.jpg";
import tourPhoto6 from "@/assets/ph6.jpg";
import tourPhoto7 from "@/assets/ph7.jpg";
import tourPhoto8 from "@/assets/ph8.jpg";
import tourPhoto9 from "@/assets/ph9.jpg";
import tourPhoto10 from "@/assets/ph10.jpg";
import tourPhoto11 from "@/assets/ph11.jpg";
import tourPhoto12 from "@/assets/ph12.jpg";
import tourPhoto13 from "@/assets/ph13.jpg";
import tourPhoto14 from "@/assets/ph14.jpg";
import tourPhoto15 from "@/assets/ph15.jpg";
import tourPhoto16 from "@/assets/ph16.jpg";
import tourPhoto17 from "@/assets/ph17.jpg";
import tourPhoto18 from "@/assets/ph18.jpg";
import tourPhoto19 from "@/assets/ph19.jpg";
import tourPhoto20 from "@/assets/ph20.jpg";
import tourPhoto21 from "@/assets/ph21.jpg";
import tourPhoto22 from "@/assets/ph22.jpg";
import tourPhoto23 from "@/assets/ph23.jpg";
import tourPhoto24 from "@/assets/ph24.jpg";
import tourPhoto25 from "@/assets/ph25.jpg";
import tourPhoto26 from "@/assets/ph26.jpg";
import tourPhoto27 from "@/assets/ph27.jpg";
import tourPhoto28 from "@/assets/ph28.jpg";
import tourPhoto29 from "@/assets/ph29.jpg";
import tourPhoto30 from "@/assets/ph30.jpg";
import tourPhoto31 from "@/assets/ph31.jpg";
import tourPhoto32 from "@/assets/ph32.jpg";


// Generate 30+ photos by cycling through available images with different descriptions
const photoData = [
  { title: "UP", description: "Visiting the campus during our educational tour" },
  { title: "Chocolate Hills Bohol", description: "Learning about Bohol’s famous landmark" },
  { title: "Chocolate Hills Bohol", description: "Enjoying the scenic natural views" },
  { title: "Tarsier", description: "Observing the smallest primates up close" },
  { title: "Man-Made Forest Bohol", description: "Passing through the lush green forest" },
  { title: "Floating Resto Bohol", description: "Having lunch while cruising the river" },
  { title: "Mirror World Bohol", description: "Taking creative and fun photos" },
  { title: "MATA Cebu Company Visit", description: "Learning about real-world IT operations" },
  { title: "Cebu Historical Site", description: "Exploring Cebu’s rich history" },
  { title: "Cebu Historical Site", description: "Learning from historical landmarks" },
  { title: "Lapu-Lapu City Historical Site", description: "Visiting an important cultural site" },
  { title: "UP Cebu", description: "Exploring the university environment" },
  { title: "Chocolate Hills Bohol", description: "Taking photos of the unique landscape" },
  { title: "Tour Bus", description: "Traveling together during the tour" },
  { title: "Tour Bus", description: "Enjoying the views along the road" },
  { title: "Mirror World Bohol", description: "Exploring a popular tourist attraction" },
  { title: "Mirror World Bohol", description: "Having fun with interactive displays" },
  { title: "Capitol Cebu", description: "Visiting the provincial capitol" },
  { title: "Capitol Cebu", description: "Learning about local government history" },
  { title: "Capitol Cebu", description: "Admiring the historic architecture" },
  { title: "Pic with the Boys", description: "Capturing fun moments with friends" },
  { title: "Dynata Cebu Company Visit", description: "Understanding business IT processes" },
  { title: "Rivant Cebu Company Visit", description: "Learning about IT industry practices" },
  { title: "Bai Hotel Cebu", description: "Resting and bonding with classmates" },
  { title: "MATA Cebu Company Visit", description: "Gaining insights from professionals" },
  { title: "MATA Cebu Company Visit", description: "Observing workplace systems" },
  { title: "MATA Cebu Company Visit", description: "Participating in company discussions" },
  { title: "MATA Cebu Company Visit", description: "Learning about company workflows" },
  { title: "Human Tarsier", description: "Interacting during the educational visit" },
  { title: "Tarsier Visit", description: "Ending the tour with memorable moments" },
  { title: "SOMAC Eat All You Can", description: "Enjoying a meal with classmates" },
  { title: "Final Group Photo", description: "Capturing memories together" }
];


const images = [
  tourPhoto1, tourPhoto2, tourPhoto3, tourPhoto4, tourPhoto5, tourPhoto6, tourPhoto7, tourPhoto8,
  tourPhoto9, tourPhoto10, tourPhoto11, tourPhoto12, tourPhoto13, tourPhoto14, tourPhoto15, tourPhoto16,
  tourPhoto17, tourPhoto18, tourPhoto19, tourPhoto20, tourPhoto21, tourPhoto22, tourPhoto23, tourPhoto24,
  tourPhoto25, tourPhoto26, tourPhoto27, tourPhoto28, tourPhoto29, tourPhoto30, tourPhoto31, tourPhoto32
];

// Map each photoData entry to its designated image import
const photos = photoData.map((data, index) => ({
  src: images[index],
  title: data.title,
  description: data.description,
}));

const PhotosSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const openLightbox = (index: number) => setSelectedPhoto(index);
  const closeLightbox = () => setSelectedPhoto(null);
  const goToPrevious = () =>
    setSelectedPhoto((prev) => (prev === 0 ? photos.length - 1 : (prev ?? 0) - 1));
  const goToNext = () =>
    setSelectedPhoto((prev) => ((prev ?? 0) + 1) % photos.length);

  const showMore = () => setVisibleCount((prev) => Math.min(prev + 12, photos.length));

  return (
    <section id="photos" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Camera className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Documented Photos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {photos.length} captured moments from our educational tour that showcase the experiences
            and memories we created together.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.slice(0, visibleCount).map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-heading text-sm font-semibold text-primary-foreground">
                    {photo.title}
                  </h3>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-primary/60 text-primary-foreground text-xs px-2 py-1 rounded-full">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < photos.length && (
          <div className="text-center mt-8">
            <button
              onClick={showMore}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Show More Photos ({photos.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* Photo Count */}
        <div className="text-center mt-6">
          <span className="text-muted-foreground text-sm">
            Showing {Math.min(visibleCount, photos.length)} of {photos.length} photos
          </span>
        </div>

        {/* Lightbox */}
        {selectedPhoto !== null && (
          <div className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center animate-fade-in">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-6 p-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 p-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="max-w-4xl max-h-[80vh] px-16">
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg animate-scale-in"
              />
              <div className="text-center mt-6">
                <span className="text-primary-foreground/60 text-sm mb-2 block">
                  Photo {selectedPhoto + 1} of {photos.length}
                </span>
                <h3 className="font-heading text-xl font-semibold text-primary-foreground">
                  {photos[selectedPhoto].title}
                </h3>
                <p className="text-primary-foreground/70 mt-2">
                  {photos[selectedPhoto].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotosSection;
