const SMLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className}>
    <path
      d="M15 45 C15 45 18 25 25 20 C32 15 22 35 22 35 C22 35 28 18 35 15 C42 12 45 45 45 45"
      stroke="hsl(213, 35%, 37%)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="47" cy="43" r="5" fill="hsl(176, 56%, 55%)" />
  </svg>
);

export default SMLogo;
