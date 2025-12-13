import profileImage from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-background to-cream-dark pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image - Left Side */}
          <div className="animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-elevated">
                <img
                  src={profileImage}
                  alt="Louie Jay T. Oani"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-card animate-float">
                <span className="text-accent-foreground font-heading text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="text-center md:text-left max-w-xl">
            <p
              className="text-accent font-medium tracking-wider uppercase mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Welcome to my portfolio
            </p>
            <h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Hi, I'm{" "}
              <span className="text-accent">Louie Jay T. Oani</span>
            </h1>
            <p
              className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              This portfolio documents my educational tour experiences, featuring my trip
              journal, photos, certificates, and memories from the WATT program.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#journal"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
              >
                View Trip Journal
              </a>
              <a
                href="#certificates"
                className="inline-flex items-center justify-center px-8 py-4 bg-card text-primary font-medium rounded-lg border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
              >
                See Certificates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
