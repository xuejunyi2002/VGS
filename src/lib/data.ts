export type Social = {
  name: "Discord" | "Instagram" | "YouTube";
  url: string;
};

// TODO: replace with VGS Studio's real social URLs before launch.
export const socials: Social[] = [
  { name: "Discord", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "YouTube", url: "#" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Kaiju Corp.", href: "/#kaiju-corp" },
  { label: "About", href: "/about" },
];

export type TeamMemberData = {
  index: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  portfolio?: string;
};

export const team: TeamMemberData[] = [
  {
    index: "01",
    name: "Z Liu",
    role: "Lead Technical Developer",
    bio: "Builds the systems that hold the chaos together, from gameplay code to the VR pipeline.",
    image: "/assets/team/z-placeholder.jpg",
    linkedin: "",
    portfolio: "",
  },
  {
    index: "02",
    name: "Han Zhang",
    role: "Lead Gameplay Developer / Technical Artist / Composer",
    bio: "Wears three hats: gameplay systems, technical art, and the music you'll hear while a kaiju flattens a city block.",
    image: "/assets/team/han-placeholder.jpg",
    linkedin: "",
    portfolio: "",
  },
  {
    index: "03",
    name: "Ian Tang",
    role: "Lead Concept Artist",
    bio: "Draws the world of VGS into existence, one exaggerated silhouette at a time.",
    image: "/assets/team/ian-placeholder.jpg",
    linkedin: "",
    portfolio: "",
  },
  {
    index: "04",
    name: "Ella Xue",
    role: "Producer",
    bio: "Keeps the team, the schedule, and the scope from spiraling out of control (mostly).",
    image: "/assets/team/ella-placeholder.jpg",
    linkedin: "",
    portfolio: "",
  },
];

export const game = {
  name: "Kaiju Corp.",
  tagline: "VR × PC asymmetric party game",
  hook: "One VR Kaiju. A team of PC Raiders. Total chaos.",
  description:
    "Kaiju Corp. is an asymmetric VR + PC party game where one player becomes the Kaiju in VR while PC Raiders team up to fight back.",
  trailerUrl: "",
  buttons: {
    trailer: { label: "Watch Trailer", href: "#trailer" },
    follow: { label: "Follow Development", href: "#" },
    // Reserved for launch: steam: { label: "View on Steam", href: "" }
  },
};
