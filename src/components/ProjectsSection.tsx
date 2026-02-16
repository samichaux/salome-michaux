import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

import mockupHirering from "@/assets/mockup-hirering.jpg";
import mockupBanti from "@/assets/mockup-banti.jpg";
import mockupBookoo from "@/assets/mockup-bookoo.jpg";
import mockupBaebles from "@/assets/mockup-baebles.jpg";
import mockupCharline from "@/assets/mockup-charline.jpg";
import mockupRia from "@/assets/mockup-ria.jpg";
import mockupRelentless from "@/assets/mockup-relentless.jpg";
import mockupLiftclub from "@/assets/mockup-liftclub.jpg";
import mockupTousautravail from "@/assets/mockup-tousautravail.jpg";

interface Project {
  title: string;
  tags: string[];
  description: string;
  annotation: string;
  gradient: string;
  mockup: string;
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Baebles",
    tags: ["App", "Community"],
    description: "Communauté fantasy pour lecteurs passionnés.",
    annotation: "fantasy world 📚",
    gradient: "from-[hsl(228,30%,41%)] to-[hsl(228,25%,60%)]",
    mockup: mockupBaebles,
    link: "https://baebles.lovable.app",
    featured: true,
  },
  {
    title: "Book-oo",
    tags: ["SaaS", "Beauty"],
    description: "Plateforme de réservation pour prothésistes ongulaires.",
    annotation: "so cute! 💅",
    gradient: "from-[hsl(170,48%,32%)] to-[hsl(176,56%,55%)]",
    mockup: mockupBookoo,
    link: "https://book-oo.lovable.app",
  },
  {
    title: "BANTI",
    tags: ["App", "Networking"],
    description: "Plateforme de networking pour entrepreneurs et investisseurs.",
    annotation: "networking ✨",
    gradient: "from-[hsl(260,25%,39%)] to-[hsl(260,20%,57%)]",
    mockup: mockupBanti,
    link: "https://banti.lovable.app",
  },
  {
    title: "Charline Charlier",
    tags: ["Website", "Thérapie"],
    description: "Site pour médiatrice familiale à Bruxelles.",
    annotation: "zen vibes 🧘",
    gradient: "from-[hsl(193,40%,38%)] to-[hsl(193,35%,56%)]",
    mockup: mockupCharline,
    link: "https://charlinecharlier.be",
  },
  {
    title: "Relentless",
    tags: ["Website", "Sport"],
    description: "Site de coaching fitness avec réservation.",
    annotation: "let's go! 💪",
    gradient: "from-[hsl(40,30%,32%)] to-[hsl(40,20%,50%)]",
    mockup: mockupRelentless,
    link: "https://relentless-performance.com",
  },
  {
    title: "Ria Carbonez",
    tags: ["Website", "Art"],
    description: "Portfolio pour conteuse professionnelle.",
    annotation: "storytelling ✨",
    gradient: "from-[hsl(320,25%,37%)] to-[hsl(320,20%,57%)]",
    mockup: mockupRia,
    link: "https://www.riacarbonez.com",
  },
  {
    title: "HireRing",
    tags: ["SaaS", "HR Tech", "B2B"],
    description: "Marketplace B2B connectant entreprises et agences de recrutement via un algorithme de matching intelligent.",
    annotation: "my baby! 👶",
    gradient: "from-[hsl(213,35%,37%)] to-[hsl(213,31%,51%)]",
    mockup: mockupHirering,
    link: "https://hirering.eu",
  },
  {
    title: "LiftClub",
    tags: ["Website", "Nightlife"],
    description: "Landing page pour nightclub bruxellois.",
    annotation: "party time! 🎉",
    gradient: "from-[hsl(240,22%,29%)] to-[hsl(240,15%,42%)]",
    mockup: mockupLiftclub,
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    className="group relative rounded-xl overflow-hidden bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 h-full"
  >
    <div className={`relative ${project.featured ? "h-56" : "h-48"} overflow-hidden`}>
      <img
        src={project.mockup}
        alt={`Mockup ${project.title}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="inline-block font-handwriting text-sm bg-mint text-accent-foreground px-3 py-1 rounded-lg rotate-[-4deg] shadow-soft">
          {project.annotation}
        </span>
      </div>
    </div>
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
        <div className="text-center mb-12">
          <p className="font-handwriting text-xl text-primary mb-2">une sélection de mes créations</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Projets sélectionnés</h2>
          <p className="text-ink-soft max-w-lg mx-auto">
            Web apps, SaaS et sites sur-mesure pour de vrais problèmes business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 80} className={project.featured ? "md:col-span-2" : ""}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
