import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  tags: string[];
  description: string;
  annotation: string;
  gradient: string;
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "HireRing",
    tags: ["SaaS", "HR Tech", "B2B"],
    description: "Marketplace B2B connectant entreprises et agences de recrutement via un algorithme de matching intelligent.",
    annotation: "my baby! 👶",
    gradient: "from-[hsl(213,35%,37%)] to-[hsl(213,31%,51%)]",
    link: "https://hirering.eu",
    featured: true,
  },
  {
    title: "BANTI",
    tags: ["App", "Networking"],
    description: "Plateforme de networking pour entrepreneurs et investisseurs.",
    annotation: "networking ✨",
    gradient: "from-[hsl(260,25%,39%)] to-[hsl(260,20%,57%)]",
    link: "https://banti.lovable.app",
  },
  {
    title: "Book-oo",
    tags: ["SaaS", "Beauty"],
    description: "Plateforme de réservation pour prothésistes ongulaires.",
    annotation: "so cute! 💅",
    gradient: "from-[hsl(170,48%,32%)] to-[hsl(176,56%,55%)]",
    link: "https://book-oo.lovable.app",
  },
  {
    title: "Baebles",
    tags: ["App", "Community"],
    description: "Communauté fantasy pour lecteurs passionnés.",
    annotation: "fantasy world 📚",
    gradient: "from-[hsl(228,30%,41%)] to-[hsl(228,25%,60%)]",
    link: "https://baebles.lovable.app",
  },
  {
    title: "Charline Charlier",
    tags: ["Website", "Thérapie"],
    description: "Site pour médiatrice familiale à Bruxelles.",
    annotation: "zen vibes 🧘",
    gradient: "from-[hsl(193,40%,38%)] to-[hsl(193,35%,56%)]",
    link: "https://charlinecharlier.be",
  },
  {
    title: "Ria Carbonez",
    tags: ["Website", "Art"],
    description: "Portfolio pour conteuse professionnelle.",
    annotation: "storytelling ✨",
    gradient: "from-[hsl(320,25%,37%)] to-[hsl(320,20%,57%)]",
    link: "https://www.riacarbonez.com",
  },
  {
    title: "Relentless",
    tags: ["Website", "Sport"],
    description: "Site de coaching fitness avec réservation.",
    annotation: "let's go! 💪",
    gradient: "from-[hsl(40,30%,32%)] to-[hsl(40,20%,50%)]",
    link: "https://relentless-performance.com",
  },
  {
    title: "LiftClub",
    tags: ["Website", "Nightlife"],
    description: "Landing page pour nightclub bruxellois.",
    annotation: "party time! 🎉",
    gradient: "from-[hsl(240,22%,29%)] to-[hsl(240,15%,42%)]",
  },
  {
    title: "Tous au Travail",
    tags: ["Website", "Emploi"],
    description: "Plateforme d'insertion professionnelle.",
    annotation: "social impact 💙",
    gradient: "from-[hsl(203,40%,38%)] to-[hsl(203,35%,54%)]",
    link: "https://tousautravail.be",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    className={`group relative rounded-xl overflow-hidden bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 ${
      project.featured ? "md:col-span-2" : ""
    }`}
  >
    {/* Image area */}
    <div className={`relative h-48 ${project.featured ? "h-56" : "h-48"} bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
      {/* Browser mockup */}
      <div className="w-[80%] rounded-lg bg-card/90 backdrop-blur shadow-medium overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-secondary/50 border-b border-border/30">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <span className="ml-2 text-[10px] text-ink-muted truncate">{project.link || project.title.toLowerCase() + ".app"}</span>
        </div>
        <div className="p-4 text-center">
          <div className="font-bold text-sm text-foreground">{project.title}</div>
        </div>
      </div>

      {/* Annotation */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="inline-block font-handwriting text-sm bg-mint text-accent-foreground px-3 py-1 rounded-lg rotate-[-4deg] shadow-soft">
          {project.annotation}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-bold text-lg text-foreground mb-1">{project.title}</h3>
      <p className="text-sm text-ink-soft mb-3">{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        >
          Découvrir <ExternalLink size={14} />
        </a>
      )}
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projets" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-handwriting text-xl text-primary mb-2">une sélection de mes créations</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Projets sélectionnés</h2>
          <p className="text-ink-soft max-w-lg mx-auto">
            Web apps, SaaS et sites sur-mesure pour de vrais problèmes business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
