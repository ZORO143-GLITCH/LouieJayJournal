import { Award } from "lucide-react";
import certificate1 from "@/assets/certificate-1.jpg";
import certificate2 from "@/assets/certificate-2.jpg";

const certificates = [
  {
    src: certificate1,
    title: "Certificate of Achievement",
    issuer: "WATT Educational Program",
    date: "2024",
  },
  {
    src: certificate2,
    title: "Certificate of Participation",
    issuer: "Educational Tour Program",
    date: "2024",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Award className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Certificates & Awards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and achievements earned through participation in educational
            programs and activities.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
                <p className="text-accent text-sm font-medium">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
