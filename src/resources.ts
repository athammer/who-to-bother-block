import type { Company, Resource } from "./types";

export const companyResources: Record<Company, Resource[]> = {
  Square: [
    {
      title: "Square Developer Docs",
      url: "https://developer.squareup.com/docs",
      icon: "📚",
      description: "API documentation and guides",
    },
    {
      title: "Developer Forums",
      url: "https://developer.squareup.com/forums/",
      icon: "💬",
      description: "Community support forum",
    },
    {
      title: "Square Discord",
      url: "https://discord.com/invite/squaredev",
      icon: "💻",
      description: "Chat with developers",
    },
    {
      title: "Support",
      url: "https://app.squareup.com/help/us/en/contact?panel=BF53A9C8EF68",
      icon: "🆘",
      description: "Get help from Square support",
    },
  ],
  "Cash App": [
    {
      title: "Cash App Support",
      url: "https://cash.app/help",
      icon: "🆘",
      description: "Get help with Cash App",
    },
    {
      title: "Cash App for Business",
      url: "https://cash.app/business",
      icon: "💼",
      description: "Business solutions",
    },
  ],
  Tidal: [
    {
      title: "TIDAL Support",
      url: "https://support.tidal.com/",
      icon: "🆘",
      description: "Get help with TIDAL",
    },
    {
      title: "TIDAL for Artists",
      url: "https://artists.tidal.com/",
      icon: "🎵",
      description: "Resources for artists",
    },
  ],
  Afterpay: [
    {
      title: "Afterpay Support",
      url: "https://www.afterpay.com/help",
      icon: "🆘",
      description: "Get help with Afterpay",
    },
    {
      title: "Afterpay for Retailers",
      url: "https://www.afterpay.com/for-retailers",
      icon: "💼",
      description: "Merchant resources",
    },
  ],
  Bitkey: [
    {
      title: "Bitkey",
      url: "https://bitkey.world/",
      icon: "🔑",
      description: "Learn about Bitkey",
    },
  ],
  Proto: [
    {
      title: "Proto",
      url: "https://proto.xyz/",
      icon: "🛠️",
      description: "Learn about Proto",
    },
  ],
};

export const generalResources: Resource[] = [
  {
    title: "Block Developer Docs",
    url: "https://developer.squareup.com/docs",
    icon: "📚",
    description: "Technical documentation",
  },
  {
    title: "Developer Forums",
    url: "https://developer.squareup.com/forums/",
    icon: "💬",
    description: "Community discussions",
  },
  {
    title: "Discord Community",
    url: "https://discord.com/invite/squaredev",
    icon: "💻",
    description: "Real-time chat",
  },
  {
    title: "Reddit Community",
    url: "https://www.reddit.com/r/SquareOfficial/",
    icon: "🗨️",
    description: "Join the discussion",
  },
];

