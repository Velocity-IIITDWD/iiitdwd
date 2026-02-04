const HeroSection = () => {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <img
          src="https://assets.iiitdwd.ac.in/images/M_Block.webp"
          alt="IIIT Dharwad Campus - M Block"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
            <p className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm mb-3">
              Indian Institute of Information Technology Dharwad
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground mb-4">
              Campus Tour
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl leading-relaxed">
              A 60-acre modern campus designed for innovation, research, and
              holistic student development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
