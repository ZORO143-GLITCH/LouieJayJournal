import { Calendar, MapPin, BookOpen } from "lucide-react";
import tourHero from "@/assets/tour-hero.jpg";

const journalEntries = [
  {
    day: "Day 1",
    date: "NOV 12 WED",
    title: "Beginning of Our Adventure",
    description:
      "We officially started our educational tour by traveling from Davao to Cebu. After arriving, we explored Cebu’s rich history, enjoyed a buffet lunch, and visited an IT center. The day ended with hotel check-in and free time to rest and bond with classmates.",
    location: "Cebu City",
    highlights: ["Flight from Davao to Cebu", "Cebu Heritage Tour", "IT industry visit", "Hotel check-in and free time"],
  },
  {
    day: "Day 2",
    date: "NOV 13 THU",
    title: "Learning from the Industry",
    description:
      "This day focused on learning through company visits. We visited different IT companies where we gained insights into real-world technology work. After a full day of learning, we relaxed back at the hotel and enjoyed our free time.",
    location: "Cebu City",
    highlights: ["IT company visits", "Exposure to real work environments", "Buffet meals", "Rest and relaxation at the hotel"],
  },
  {
    day: "Day 3",
    date: "NOV 14 FRI",
    title: "From City to Island",
    description:
      "We continued our company visits in the morning and enjoyed lunch together before traveling to Bohol. The sea journey was exciting, and upon arrival, we checked in at our hotel in Panglao. The night was free to explore and relax.",
    location: "Cebu City → Bohol (Panglao)",
    highlights: ["Final IT company visits in Cebu", "Ferry travel to Tagbilaran", "Arrival in Panglao", "Hotel check-in and dinner"],
  },
  {
    day: "Day 4",
    date: "NOV 15 SAT",
    title: "Culture, Nature, and Farewell",
    description:
      "Our last day was filled with sightseeing around Bohol. We visited famous tourist spots and enjoyed a river cruise lunch. After dinner, we traveled back to Davao, ending our educational tour with unforgettable memories.",
    location: "Bohol → Davao",
    highlights: ["Bohol countryside tour", "Loboc River cruise", "Famous landmarks and souvenir shopping", "Flight back to Davao"],
  },
];

const JournalSection = () => {
  return (
    <section id="journal" className="py-20 bg-background">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 mb-16 overflow-hidden">
        <img
          src={tourHero}
          alt="Educational Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
              Educational Tour Journal
            </h2>
            <p className="text-primary-foreground/80 mt-2">
              A journey of learning and discovery
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

          {journalEntries.map((entry, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 border-4 border-background shadow-soft z-10" />

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-card p-6 md:p-8 rounded-xl shadow-card hover:shadow-elevated transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {entry.day}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {entry.date}
                    </div>
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary mb-3">
                    {entry.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {entry.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 text-accent" />
                    {entry.location}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {entry.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty Space for Alternating Layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
