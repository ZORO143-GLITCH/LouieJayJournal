import { useState } from "react";
import { BookOpen, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import journalScan from "@/assets/journal-scan.jpg";

const journalPages = [
  { page: 1, title: "Cover Page", description: "WATT Educational Tour Journal - Official Cover" },
  { page: 2, title: "Introduction", description: "Welcome message and tour objectives" },
  { page: 3, title: "Day 1 - Departure", description: "Documenting our journey's beginning" },
  { page: 4, title: "Day 1 - Activities", description: "First day activities and experiences" },
  { page: 5, title: "Day 2 - Cultural Sites", description: "Exploring historical landmarks" },
  { page: 6, title: "Day 2 - Reflections", description: "Personal reflections and learnings" },
  { page: 7, title: "Day 3 - Nature Tour", description: "Environmental education experiences" },
  { page: 8, title: "Day 4 - Farewell", description: "Closing ceremonies and reflections" },
  { page: 9, title: "Acknowledgments", description: "Thank you notes and signatures" },
];

const ScannedJournalSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const goToPrevious = () => setCurrentPage((prev) => Math.max(0, prev - 1));
  const goToNext = () => setCurrentPage((prev) => Math.min(journalPages.length - 1, prev + 1));

  return (
    <section id="scanned-journal" className="py-20 bg-cream-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <FileText className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Printed Journal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scanned copy of the official printed journal provided by WATT, documenting
            our complete educational tour experience across {journalPages.length} pages.
          </p>
        </div>

        {/* Journal Viewer */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl shadow-elevated overflow-hidden">
            {/* Decorative Book Spine */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-primary/20 to-transparent" />

            <div className="p-6 md:p-10">
              {/* Journal Header */}
              <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      WATT Educational Tour Journal
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Official Documentation
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    Page {currentPage + 1} of {journalPages.length}
                  </span>
                </div>
              </div>

              {/* Page Navigation Thumbnails */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {journalPages.map((page, index) => (
                  <button
                    key={page.page}
                    onClick={() => setCurrentPage(index)}
                    className={`flex-shrink-0 w-16 h-20 rounded-lg border-2 transition-all duration-200 overflow-hidden ${
                      currentPage === index
                        ? "border-accent shadow-soft scale-105"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <img
                      src={journalScan}
                      alt={`Page ${page.page}`}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary bg-background/80 px-1 rounded">
                        {page.page}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Current Page Display */}
              <div className="relative">
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  disabled={currentPage === 0}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 shadow-soft transition-all ${
                    currentPage === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:bg-background hover:shadow-card"
                  }`}
                >
                  <ChevronLeft className="w-6 h-6 text-primary" />
                </button>

                <button
                  onClick={goToNext}
                  disabled={currentPage === journalPages.length - 1}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 shadow-soft transition-all ${
                    currentPage === journalPages.length - 1
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:bg-background hover:shadow-card"
                  }`}
                >
                  <ChevronRight className="w-6 h-6 text-primary" />
                </button>

                {/* Journal Image */}
                <div className="relative rounded-xl overflow-hidden shadow-card">
                  <img
                    src={journalScan}
                    alt={journalPages[currentPage].title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-border/20 rounded-xl" />
                </div>
              </div>

              {/* Current Page Info */}
              <div className="mt-6 text-center">
                <h4 className="font-heading text-lg font-semibold text-primary">
                  {journalPages[currentPage].title}
                </h4>
                <p className="text-muted-foreground text-sm mt-1">
                  {journalPages[currentPage].description}
                </p>
              </div>

              {/* Page Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {journalPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      currentPage === index
                        ? "w-6 bg-accent"
                        : "bg-border hover:bg-accent/50"
                    }`}
                  />
                ))}
              </div>

              {/* Journal Description */}
              <div className="bg-secondary/50 rounded-xl p-6 mt-8">
                <h4 className="font-heading text-lg font-medium text-primary mb-3">
                  About This Journal
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This printed journal was provided by the WATT (Workshop on Academic
                  Tours and Travel) program to document our educational tour
                  experiences. It contains detailed accounts of each destination,
                  learning activities, and personal reflections across {journalPages.length} pages.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-card rounded-lg text-sm text-muted-foreground border border-border">
                    Official Document
                  </span>
                  <span className="px-3 py-1 bg-card rounded-lg text-sm text-muted-foreground border border-border">
                    WATT Program
                  </span>
                  <span className="px-3 py-1 bg-card rounded-lg text-sm text-muted-foreground border border-border">
                    {journalPages.length} Pages
                  </span>
                  <span className="px-3 py-1 bg-card rounded-lg text-sm text-muted-foreground border border-border">
                    Educational Tour 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannedJournalSection;
