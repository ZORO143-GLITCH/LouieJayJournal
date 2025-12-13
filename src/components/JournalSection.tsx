import { Calendar, MapPin, BookOpen } from "lucide-react";
import tourHero from "@/assets/tour-hero.jpg";

const journalEntries = [
  {
    day: "Day 1",
    date: "Educational Tour Start",
    title: "Beginning of Our Adventure",
    description:
      "We embarked on our educational journey, filled with excitement and anticipation. The morning started early with registration and orientation about our upcoming destinations.",
    location: "Assembly Point",
    highlights: ["Group orientation", "Safety briefing", "Team building activities"],
  },
  {
    day: "Day 2",
    date: "Cultural Immersion",
    title: "Exploring Historical Sites",
    description:
      "Visited significant historical landmarks and learned about our rich cultural heritage. The tour guide shared fascinating stories about the history and significance of each location.",
    location: "Historical District",
    highlights: ["Museum visit", "Heritage walking tour", "Local cuisine experience"],
  },
  {
    day: "Day 3",
    date: "Nature & Learning",
    title: "Environmental Education",
    description:
      "Explored natural wonders and participated in environmental workshops. We learned about conservation efforts and the importance of preserving our natural resources.",
    location: "Nature Reserve",
    highlights: ["Nature walk", "Wildlife observation", "Conservation workshop"],
  },
  {
    day: "Day 4",
    date: "Reflection & Farewell",
    title: "Concluding Our Journey",
    description:
      "Our final day was filled with reflection and gratitude. We shared our favorite memories, participated in closing ceremonies, and said our farewells with newfound friendships and knowledge.",
    location: "Conference Center",
    highlights: ["Reflection session", "Certificate ceremony", "Group photo session"],
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
