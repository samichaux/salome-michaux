const CTASection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-wash/60 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <p className="font-handwriting text-xl text-primary mb-3">prête à donner vie à votre idée?</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Un projet <span className="text-gradient-blue">en tête</span> ?
        </h2>
        <p className="text-ink-soft mb-8 max-w-md mx-auto">
          Discutons de comment je peux vous aider à concrétiser votre vision.
        </p>
        <a
          href="mailto:info@salomemichaux.eu"
          className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-[14px] hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
};

export default CTASection;
