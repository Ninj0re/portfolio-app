# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Fast performance with Vite
- 🎯 Easy to customize
- 🚀 Ready for AWS deployment

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Your Information

1. **Hero Section**: Edit `frontend/src/components/Hero.jsx`
   - Update your name, title, bio
   - Add your social media links
   - Replace the profile initials

2. **Projects**: Edit `frontend/src/components/Projects.jsx`
   - Add your project details
   - Place screenshots in `frontend/public/projects/`
   - Update GitHub and live demo links

3. **Footer**: Edit `frontend/src/components/Footer.jsx`
   - Update contact information
   - Customize footer content

### Add Project Screenshots

Place your project screenshots in `frontend/public/projects/` and update the image paths in `Projects.jsx`.

## AWS Deployment (Future)

This project is structured to be easily deployed to AWS using:
- **S3 + CloudFront** for static hosting
- **Amplify** for continuous deployment
- **EC2** with nginx for custom server setup

## License

MIT
