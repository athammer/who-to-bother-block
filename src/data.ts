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
            twitterHandle: "@Afterpay",
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
        name: "Payment APIs",
        experts: [
          {
            name: "Sarah Chen",
            twitterHandle: "@sarahchen",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
            companies: ["Square"],
          },
          {
            name: "Mike Johnson",
            twitterHandle: "@mikej_payments",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
            companies: ["Square", "Cash App"],
          },
        ],
      },
      {
        name: "E-commerce Integration",
        experts: [
          {
            name: "Lisa Wang",
            twitterHandle: "@lisawang_dev",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
            companies: ["Square"],
          },
          {
            name: "David Martinez",
            twitterHandle: "@dmartinez_sq",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
            companies: ["Square"],
          },
        ],
      },
      {
        name: "Point of Sale",
        experts: [
          {
            name: "Alex Thompson",
            twitterHandle: "@alexthompson",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
            companies: ["Square"],
          },
        ],
      },
    ],
  },
  {
    id: "developer",
    name: "Developer Tools",
    icon: "⚙️",
    subjectAreas: [
      {
        name: "APIs & SDKs",
        experts: [
          {
            name: "Jordan Lee",
            twitterHandle: "@jordanlee_dev",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
            companies: ["Square", "Cash App"],
          },
          {
            name: "Taylor Swift",
            twitterHandle: "@taylorswift_sdk",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor",
            companies: ["Square"],
          },
        ],
      },
      {
        name: "Webhooks",
        experts: [
          {
            name: "Chris Brown",
            twitterHandle: "@chrisbrown_sq",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris",
            companies: ["Square"],
          },
        ],
      },
      {
        name: "OAuth & Security",
        experts: [
          {
            name: "Morgan Davis",
            twitterHandle: "@morgandavis_sec",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Morgan",
            companies: ["Square", "Cash App"],
          },
          {
            name: "Sam Rodriguez",
            twitterHandle: "@samrodriguez",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
            companies: ["Square"],
          },
          {
            name: "River Thompson",
            twitterHandle: "@riverthompson_bk",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=River",
            companies: ["Bitkey", "Proto"],
          },
        ],
      },
    ],
  },
  {
    id: "banking",
    name: "Banking & Financial Services",
    icon: "🏦",
    subjectAreas: [
      {
        name: "Square Banking",
        experts: [
          {
            name: "Jamie Wilson",
            twitterHandle: "@jamiewilson_fin",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
            companies: ["Cash App"],
          },
        ],
      },
      {
        name: "Capital & Loans",
        experts: [
          {
            name: "Pat Anderson",
            twitterHandle: "@patanderson",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pat",
            companies: ["Cash App"],
          },
          {
            name: "Riley Cooper",
            twitterHandle: "@rileycooper_cap",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riley",
            companies: ["Cash App"],
          },
          {
            name: "Jesse Martinez",
            twitterHandle: "@jessemartinez_ap",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jesse",
            companies: ["Afterpay"],
          },
        ],
      },
    ],
  },
  {
    id: "hardware",
    name: "Hardware & Devices",
    icon: "📱",
    subjectAreas: [
      {
        name: "Terminals",
        experts: [
          {
            name: "Casey Kim",
            twitterHandle: "@caseykim_hw",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey",
            companies: ["Square"],
          },
        ],
      },
      {
        name: "Readers & Accessories",
        experts: [
          {
            name: "Avery Nelson",
            twitterHandle: "@averynelson",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Avery",
            companies: ["Square", "Tidal"],
          },
          {
            name: "Quinn Parker",
            twitterHandle: "@quinnparker_sq",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Quinn",
            companies: ["Square"],
          },
          {
            name: "Blake Mitchell",
            twitterHandle: "@blakemitchell_hw",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Blake",
            companies: ["Bitkey"],
          },
        ],
      },
    ],
  },
];
