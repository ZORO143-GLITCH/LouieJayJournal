import { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import tourPhoto1 from "@/assets/tour-photo-1.jpg";
import tourPhoto2 from "@/assets/tour-photo-2.jpg";
import tourPhoto3 from "@/assets/tour-photo-3.jpg";

const photos = [
  {
    src: tourPhoto1,
    title: "Museum Visit",
    description: "Exploring the historical museum during our educational tour",
  },
  {
    src: tourPhoto2,
    title: "Cultural Heritage Site",
    description: "Learning about our cultural heritage with classmates",
  },
  {
    src: tourPhoto3,
    title: "Scenic Viewpoint",
    description: "Taking in the beautiful landscape during our nature excursion",
  },
];

const PhotosSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedPhoto(index);
  const closeLightbox = () => setSelectedPhoto(null);
  const goToPrevious = () =>
    setSelectedPhoto((prev) => (prev === 0 ? photos.length - 1 : (prev ?? 0) - 1));
  const goToNext = () =>
    setSelectedPhoto((prev) => ((prev ?? 0) + 1) % photos.length);

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
            Captured moments from our educational tour that showcase the experiences
            and memories we created together.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
