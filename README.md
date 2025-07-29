# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring a liquid glass aesthetic and automatic GitHub repository integration.

## ✨ Features

- **Liquid Glass Design**: Modern glassmorphism UI with animated liquid blobs
- **GitHub Integration**: Automatically fetches and displays your repositories
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Fluid transitions and hover effects
- **Project Filtering**: Filter projects by category and featured status
- **SEO Optimized**: Built with Next.js best practices
- **GitHub Pages Ready**: Configured for automatic deployment

## 🚀 Live

Visit the live portfolio at: [https://sebaxe07.github.io](https://sebaxe07.github.io)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/sebaxe07/sebaxe07.github.io.git
cd sebaxe07.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `out` directory.

## 📁 Project Structure

```
├── .github/workflows/    # GitHub Actions for deployment
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Homepage
│   └── ...
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── package.json
```

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and adapt it for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
