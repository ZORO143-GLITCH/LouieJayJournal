import { BookOpen, FileText } from "lucide-react";
import journalScan from "@/assets/journal-scan.jpg";

const ScannedJournalSection = () => {
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
            our complete educational tour experience.
          </p>
        </div>

        {/* Journal Preview */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-2xl shadow-elevated overflow-hidden">
            {/* Decorative Book Spine */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-primary/20 to-transparent" />

            <div className="p-8 md:p-12">
              {/* Journal Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
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

              {/* Journal Image */}
              <div className="relative rounded-xl overflow-hidden shadow-card mb-8">
                <img
                  src={journalScan}
                  alt="Scanned Journal Page"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-border/20 rounded-xl" />
              </div>

              {/* Journal Description */}
              <div className="bg-secondary/50 rounded-xl p-6">
                <h4 className="font-heading text-lg font-medium text-primary mb-3">
                  About This Journal
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This printed journal was provided by the WATT (Workshop on Academic
                  Tours and Travel) program to document our educational tour
                  experiences. It contains detailed accounts of each destination,
                  learning activities, and personal reflections.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-card rounded-lg text-sm text-muted-foreground border border-border">
                    Official Document
                  </span>
                  <span className="px-3 py-1 bg-card rounded-lg text-sm text-muted-foreground border border-border">
                    WATT Program
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
