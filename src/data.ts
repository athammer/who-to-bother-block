import type { Category } from "./types";

export const categories: Category[] = [
  {
    id: "official",
    name: "Official Accounts",
    icon: "✅",
    subjectAreas: [
      {
        name: "Company Accounts",
        experts: [
          {
            name: "Block",
            twitterHandle: "@blocks",
            avatarUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=Block",
            companies: [
              "Square",
              "Cash App",
              "Tidal",
              "Afterpay",
              "Bitkey",
              "Proto",
            ],
          },
          {
            name: "Square",
            twitterHandle: "@Square",
            avatarUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=Square",
            companies: ["Square"],
          },
          {
            name: "Cash App",
            twitterHandle: "@CashApp",
            avatarUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=CashApp",
            companies: ["Cash App"],
          },
          {
            name: "TIDAL",
            twitterHandle: "@TIDAL",
            avatarUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=TIDAL",
            companies: ["Tidal"],
          },
          {
            name: "Afterpay",
            twitterHandle: "@AfterpayUSA",
            avatarUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=Afterpay",
            companies: ["Afterpay"],
          },
          {
            name: "Bitkey",
            twitterHandle: "@Bitkey",
            avatarUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=Bitkey",
            companies: ["Bitkey"],
          },
        ],
      },
      {
        name: "Developer & Support",
        experts: [
          {
            name: "Square Developers",
            twitterHandle: "@SquareDev",
            avatarUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=SquareDev",
            companies: ["Square"],
          },
          {
            name: "Square Support",
            twitterHandle: "@SquareSupport",
            avatarUrl:
              "https://api.dicebear.com/7.x/shapes/svg?seed=SquareSupport",
            companies: ["Square"],
          },
          {
            name: "Cash App Support",
            twitterHandle: "@CashSupport",
            avatarUrl:
              "https://api.dicebear.com/7.x/shapes/svg?seed=CashSupport",
            companies: ["Cash App"],
          },
        ],
      },
    ],
  },
  {
    id: "payments",
    name: "Payments & Commerce",
    icon: "💳",
    subjectAreas: [
      {
        name: "Payment Links",
        experts: [
          {
            name: "Aaron Hammer",
            twitterHandle: "@ahammer__",
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1967324037899591680/5e1MH_bh_400x400.jpg",
            companies: ["Square"],
          },
        ],
      },
      {
        name: "Checkouts",
        experts: [
          {
            name: "Aaron Hammer",
            twitterHandle: "@ahammer__",
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1967324037899591680/5e1MH_bh_400x400.jpg",
            companies: ["Square"],
          },
        ],
      },
      {
        name: "E-commerce",
        experts: [
          {
            name: "Aaron Hammer",
            twitterHandle: "@ahammer__",
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1967324037899591680/5e1MH_bh_400x400.jpg",
            companies: ["Square"],
          },
        ],
      },
    ],
  },
  {
    id: "sales-onboarding",
    name: "Sales & Onboarding",
    icon: "🤝",
    subjectAreas: [
      {
        name: "Sales & Onboarding",
        experts: [
          {
            name: "Jordan Tudhope",
            twitterHandle: "@JTudhope",
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1967761619246608384/a-Gl-mKB_400x400.jpg",
            companies: ["Square", "Cash App"],
          },
        ],
      },
    ],
  },
];
