# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS.

## Getting Started

You can run this project in two ways: **locally with npm** or **with Docker**.

---

## Option 1: Run with npm (Development)

### Prerequisites
- Node.js v16 or higher
- npm

### Steps

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Visit: `http://localhost:5173`
   - Hot reload enabled for development

5. **Stop the server:**
   - Press `Ctrl + C` in the terminal

### Build for Production (npm)
```bash
cd frontend
npm run build
```
- Built files will be in `frontend/dist/` directory
- Optimized and minified for production

---

## 🐳 Option 2: Run with Docker (Production)

### Prerequisites
- Docker
- Docker Compose

### Steps

1. **Build and start the container:**
   ```bash
   docker-compose up -d
   ```
   - `-d` runs in detached mode (background)
   - First build may take 2-3 minutes

2. **Open your browser:**
   - Visit: `http://localhost:3000`
   - Served by Nginx in production mode

3. **View logs (optional):**
   ```bash
   docker-compose logs -f
   ```
   - Press `Ctrl + C` to exit logs

4. **Stop the container:**
   ```bash
   docker-compose down
   ```

## AWS Deployment (Future)

This project is structured to be easily deployed to AWS using:
- **S3 + CloudFront** for static hosting
- **Amplify** for continuous deployment
- **EC2** with nginx for custom server setup
