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
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1924572637768122374/ChcPO7bQ_400x400.jpg",
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
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
            companies: ["Square"],
          },
          {
            name: "Cash App",
            twitterHandle: "@CashApp",
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1896979872875950080/rL-_wYK7_400x400.jpg",
            companies: ["Cash App"],
          },
          {
            name: "TIDAL",
            twitterHandle: "@TIDAL",
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1653759132397195266/7T0RN_jc_400x400.jpg",
            companies: ["Tidal"],
          },
          {
            name: "Afterpay",
            twitterHandle: "@AfterpayUSA",
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1918045498797174784/nLjnv9nZ_400x400.jpg",
            companies: ["Afterpay"],
          },
          {
            name: "Bitkey",
            twitterHandle: "@Bitkey",
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1894211759025823744/AjQjEkUH_400x400.jpg",
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
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1819413024849252355/bJIBxsNc_400x400.png",
            companies: ["Square"],
          },
          {
            name: "Square Support",
            twitterHandle: "@SquareSupport",
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1156276039154225152/2hvWemBu_400x400.jpg",
            companies: ["Square"],
          },
          {
            name: "Cash App Support",
            twitterHandle: "@CashSupport",
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1835765367366422528/Kh5n4dTt_400x400.jpg",
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
