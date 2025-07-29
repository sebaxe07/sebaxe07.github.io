# Portfolio Website

This is a modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, configured for deployment on GitHub Pages.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive design** that works on all devices
- **Dark mode support**
- **Automatic deployment** to GitHub Pages via GitHub Actions
- **SEO optimized**

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

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit `src/app/page.tsx` to update your name, bio, and contact information.

2. **Projects**: Replace the placeholder project cards with your actual projects.

3. **Styling**: Customize colors and design in the Tailwind classes throughout the components.

4. **Metadata**: Update the site title and description in `src/app/layout.tsx`.

### Adding New Pages

Create new files in the `src/app` directory. For example:
- `src/app/about/page.tsx` for an about page
- `src/app/projects/page.tsx` for a detailed projects page

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**: Go to your repository settings → Pages → Source: GitHub Actions

2. **Push to main branch**: The GitHub Action will automatically build and deploy your site

3. **Custom domain** (optional): Add a `CNAME` file to the `public` directory with your domain name

Your site will be available at: `https://sebaxe07.github.io`

## 🔧 Configuration

### GitHub Pages Setup

The project includes:
- Static export configuration in `next.config.ts`
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- Proper asset prefix for GitHub Pages subdirectory

### Environment Variables

For local development, you can create a `.env.local` file:

```env
NODE_ENV=development
```

## 📝 To-Do

- [ ] Add your personal information
- [ ] Replace placeholder content with real projects
- [ ] Add your profile photo
- [ ] Customize colors and styling
- [ ] Add contact form functionality
- [ ] Add blog section (optional)
- [ ] Optimize images and add real project screenshots

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and adapt it for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
