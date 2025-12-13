import { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import tourPhoto1 from "@/assets/tour-photo-1.jpg";
import tourPhoto2 from "@/assets/tour-photo-2.jpg";
import tourPhoto3 from "@/assets/tour-photo-3.jpg";

// Generate 30+ photos by cycling through available images with different descriptions
const photoData = [
  { title: "Museum Visit", description: "Exploring the historical museum during our educational tour" },
  { title: "Cultural Heritage Site", description: "Learning about our cultural heritage with classmates" },
  { title: "Scenic Viewpoint", description: "Taking in the beautiful landscape during our nature excursion" },
  { title: "Group Discussion", description: "Engaging in meaningful conversations about our learnings" },
  { title: "Historical Monument", description: "Standing before a monument of great historical significance" },
  { title: "Nature Trail", description: "Walking through pristine natural pathways" },
  { title: "Team Activity", description: "Participating in collaborative team-building exercises" },
  { title: "Local Market Visit", description: "Experiencing local culture and traditions at the market" },
  { title: "Sunset View", description: "Witnessing a breathtaking sunset over the horizon" },
  { title: "Workshop Session", description: "Hands-on learning during our educational workshop" },
  { title: "River Crossing", description: "Adventure at the river crossing point" },
  { title: "Ancient Ruins", description: "Discovering remnants of ancient civilizations" },
  { title: "Garden Tour", description: "Exploring the botanical gardens and diverse flora" },
  { title: "Art Gallery", description: "Appreciating local and traditional artwork" },
  { title: "Mountain View", description: "Panoramic views from the mountain peak" },
  { title: "Beach Exploration", description: "Learning about coastal ecosystems" },
  { title: "Cave Adventure", description: "Exploring fascinating underground formations" },
  { title: "Village Visit", description: "Immersing in rural community life and traditions" },
  { title: "Bridge Crossing", description: "Walking across the historic suspension bridge" },
  { title: "Waterfall Discovery", description: "Marveling at the majestic waterfall" },
  { title: "Temple Visit", description: "Learning about spiritual and architectural heritage" },
  { title: "Farm Experience", description: "Understanding agricultural practices firsthand" },
  { title: "Wildlife Spotting", description: "Observing native wildlife in their natural habitat" },
  { title: "Craft Workshop", description: "Creating traditional crafts with local artisans" },
  { title: "Cooking Class", description: "Learning to prepare local delicacies" },
  { title: "Stargazing Night", description: "Observing constellations under clear skies" },
  { title: "Morning Assembly", description: "Starting the day with group exercises" },
  { title: "Library Visit", description: "Exploring the vast collection of historical texts" },
  { title: "Science Center", description: "Interactive learning at the science exhibition" },
  { title: "Farewell Ceremony", description: "Celebrating the conclusion of our journey" },
  { title: "Certificate Award", description: "Receiving recognition for participation" },
  { title: "Final Group Photo", description: "Capturing memories with all participants" },
];

const images = [tourPhoto1, tourPhoto2, tourPhoto3];

const photos = photoData.map((data, index) => ({
  src: images[index % images.length],
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
