const ContactsSection = () => {
  return (
    <section id="contacts" className="py-16 bg-card/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Contact Me</h2>
        <p className="mb-8 text-muted-foreground max-w-xl mx-auto">
          If you have any questions, feedback, or would like to connect, feel free to reach out!
        </p>
        <div className="space-y-4">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <span className="font-semibold">Email:</span>
            <a href="mailto:louiejay.oani@hcdc.edu.ph" className="text-primary underline hover:text-primary/80">louiejay.oani@hcdc.edu.ph</a>
          </div>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <span className="font-semibold">Phone:</span>
            <a href="tel:09107097031" className="text-primary underline hover:text-primary/80">+63 912 345 6789</a>
          </div>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <span className="font-semibold">Facebook:</span>
            <a href="https://www.facebook.com/ljmasama18" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">facebook.com/louiejay</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
