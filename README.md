# 🤔 Who to Bother

A directory of Block (Square, Cash App, Tidal, Afterpay, Bitkey, Proto) experts on Twitter. Find the right person to ask questions about payments, developer tools, and more.

## ⚠️ Important Guidelines

**Please be respectful!** The people listed here are volunteering their time to help the community. They are not official support channels.

**Always try official support channels first:**

- For technical issues, use the official documentation, forums, and support
- For account or billing issues, contact official support
- Only reach out to individuals for general questions, advice, or community discussions

These experts are here to help, but they're doing so on their own time. Be courteous, patient, and understanding.

---

Built by [🪿 Goose](https://block.github.io/goose/)

## 🚀 Running the Application

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/athammer/who-to-bother-block.git
cd who-to-bother-block
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to the URL shown (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🤝 Contributing

We welcome contributions! Here are a few ways you can help:

### Adding Yourself or Someone Else

If you're a Block expert (or know one!) who's willing to answer questions on Twitter, you can add yourself to the directory.

**⚠️ Important: Only add people who have explicitly given their permission to be listed. Do not add someone without asking them first.**

#### Step 1: Fork and Clone

1. Fork this repository
2. Clone your fork locally
3. Create a new branch: `git checkout -b add-expert-name`

#### Step 2: Add Your Information

Edit `src/data.ts` and add your entry to the appropriate category and subject area.

**Example:**

```typescript
{
  name: "Your Name",
  twitterHandle: "@yourhandle",
  avatarUrl: "https://pbs.twimg.com/profile_images/YOUR_IMAGE_ID/image.jpg",
  companies: ["Square"], // Can be: "Square", "Cash App", "Tidal", "Afterpay", "Bitkey", "Proto"
},
```

**To get your Twitter avatar URL:**

1. Go to your Twitter profile
2. Right-click on your profile picture
3. Select "Copy Image Address"
4. Use that URL (it should look like: `https://pbs.twimg.com/profile_images/...`)

#### Step 3: Choose Your Category

Add yourself to the relevant category:

- **Official Accounts** - Official Block company accounts
- **Payments & Commerce** - Payment APIs, Payment Links, Checkouts, E-commerce

You can add yourself to multiple subject areas if relevant!

#### Step 4: Submit Your Pull Request

1. Commit your changes:

```bash
git add src/data.ts
git commit -m "Add [Your Name] to [Category/Subject Area]"
```

2. Push to your fork:

```bash
git push origin add-expert-name
```

3. Open a Pull Request on GitHub with:
   - A clear title: "Add [Your Name] to [Category]"
   - Description of your area(s) of expertise
   - Confirmation that you're willing to answer questions on Twitter

### Adding New Categories or Subject Areas

If you think a new category or subject area would be valuable:

1. Open an issue first to discuss the addition
2. Follow the same PR process as above
3. Update both `src/data.ts` and document the new category in your PR

### Other Contributions

- **Bug fixes** - Found a bug? Fix it and submit a PR!
- **UI improvements** - Design improvements are always welcome
- **Documentation** - Help improve this README or add more docs
- **Features** - Have an idea? Open an issue to discuss it first

## 📝 Code of Conduct

### For Users:

- **Be respectful and courteous** - Everyone listed is volunteering their time
- **Try official support first** - Use official docs, forums, and support channels before reaching out
- These experts are not official support - They cannot help with account issues, billing, or urgent technical problems
- Be patient and understanding - They may not always be able to respond

### For Contributors:

- **Never add anyone without their explicit permission**
- Only add people who have agreed to be listed and are willing to answer questions
- Keep information accurate and up-to-date
- Follow the existing code style and structure

## 🛠️ Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS** - Styling (no framework)

## 📧 Contact

Want to update or add new people? DM [@ahammer\_\_](https://twitter.com/ahammer__) on Twitter

## 🌟 Features

- ✅ Filter by category (Payments, Developer Tools, etc.)
- ✅ Filter by company (Square, Cash App, Tidal, etc.)
- ✅ Official resources section when filters are active
- ✅ URL state management for shareable links
- ✅ Fully accessible (WCAG 2.1 AA compliant)
- ✅ Mobile responsive
- ✅ Dark mode friendly

## 📄 License

[MIT License](LICENSE) - feel free to use this for your own organization!

---

Built with 🪿 by [Goose](https://block.github.io/goose/)
