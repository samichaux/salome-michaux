const steps = [
  { num: "01", title: "Discovery", desc: "Comprendre vos besoins, votre marché et vos utilisateurs." },
  { num: "02", title: "Design", desc: "Maquettes et prototypes alignés sur vos objectifs." },
  { num: "03", title: "Build", desc: "Développement rapide avec les meilleurs outils no-code." },
  { num: "04", title: "Launch", desc: "Déploiement, tests et itérations pour un lancement réussi." },
];

const MethodSection = () => {
  return (
    <section id="methode" className="py-20 bg-gradient-method">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-handwriting text-xl text-mint-light mb-2">comment ça marche?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Ma méthode</h2>
          <p className="text-blue-pale max-w-lg mx-auto">
            Une approche structurée pour transformer votre vision en produit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-xl p-6 bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-handwriting text-4xl text-mint mb-3">{step.num}</div>
              <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
              <p className="text-sm text-blue-pale">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
