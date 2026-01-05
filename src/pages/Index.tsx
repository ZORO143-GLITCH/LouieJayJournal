import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import JournalSection from "@/components/JournalSection";
import PhotosSection from "@/components/PhotosSection";
import CertificatesSection from "@/components/CertificatesSection";
import ScannedJournalSection from "@/components/ScannedJournalSection";
import Footer from "@/components/Footer";
import ContactsSection from "@/components/ContactsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      {/* About Me Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-6 text-left max-w-2xl rounded-xl shadow-lg border border-border bg-white/80">
          <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-muted-foreground text-lg mb-6">
            I am a 3rd-year BSIT student at Holy Cross of Davao College with a strong interest in technology and digital innovation. I am passionate about software development and systems analysis, and I enjoy learning how digital systems work. I also explore the gaming industry, which helps improve my problem-solving skills and understanding of complex digital environments.
          </p>
          <div className="mb-4">
            <span className="font-semibold text-primary">Education:</span> 3rd Year BSIT Student at Holy Cross of Davao College
          </div>
          <div className="mb-4">
            <span className="font-semibold text-primary">Focus:</span> Software Development & Systems Analysis
          </div>
          <div className="mb-4">
            <span className="font-semibold text-primary">Passion:</span> Technology, Innovation & Digital Solutions
          </div>
          <div className="mb-4">
            <span className="font-semibold text-primary">Interest:</span> Gaming Industry & Digital Environments
          </div>
          <div className="mb-4">
            <span className="font-semibold text-primary">Skills & Expertise:</span>
            <ul className="list-disc list-inside ml-4 text-muted-foreground">
              <li><span className="font-semibold">Programming Languages:</span> HTML, CSS, JavaScript, Python, Java, PHP, MySQL, C++</li>
              <li><span className="font-semibold">Frameworks & Libraries:</span> React, Tailwind CSS, Bootstrap, Node.js</li>
              <li><span className="font-semibold">Tools & Software:</span> Visual Studio Code, Git & GitHub, Figma, MySQL, XAMPP, Canva, Microsoft Office, Google Workspace</li>
              <li><span className="font-semibold">Skills:</span> Video Editing, Programming</li>
            </ul>
          </div>
          <div className="mb-4">
            <span className="font-semibold text-primary">Personal Interests:</span>
            <ul className="list-disc list-inside ml-4 text-muted-foreground">
              <li>Gaming</li>
              <li>Technology</li>
              <li>Programming</li>
              <li>Web Development</li>
              <li>Music</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </section>
      <JournalSection />
      <PhotosSection />
      <CertificatesSection />
      <ScannedJournalSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
