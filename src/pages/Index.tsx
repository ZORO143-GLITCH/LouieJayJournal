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
