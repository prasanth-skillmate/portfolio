# Sathish Kumar Balakrishnan - Cybersecurity Portfolio

A modern, responsive portfolio website showcasing cybersecurity expertise, services, and experience. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Multi-Audience Pages**: Tailored content for Students, Corporate clients, and Academic institutions
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Contact Form**: Integrated email functionality via backend API or EmailJS
- **WhatsApp Integration**: Direct chat functionality with pre-filled messages
- **Modern UI/UX**: Cyber-themed design with Matrix rain background effects
- **Performance Optimized**: Fast loading with Vite build tool

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd 27.sathish
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install server dependencies (for email functionality):**
   ```bash
   cd server
   npm install
   cd ..
   ```

## 🏃 Running the Application

### Development Mode

1. **Start the frontend dev server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8080`

2. **Start the email server (optional, for contact form):**
   ```bash
   cd server
   npm start
   ```
   The email API will run on `http://localhost:3001`

### Production Build

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📧 Email Configuration

The contact form requires email configuration. See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed setup instructions.

### Quick Setup (Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Create `server/.env` file:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-char-app-password
   PORT=3001
   ```

## 🗂️ Project Structure

```
27.sathish/
├── public/              # Static assets
│   └── images/         # Profile photos and images
├── server/             # Backend API for email
│   ├── index.js       # Express server
│   └── package.json   # Server dependencies
├── src/
│   ├── components/    # React components
│   ├── pages/         # Page components
│   ├── lib/           # Utilities and services
│   └── hooks/         # Custom React hooks
├── package.json       # Frontend dependencies
├── vite.config.ts     # Vite configuration
└── tailwind.config.ts # Tailwind CSS configuration
```

## 🎨 Customization

### Theme Colors
Edit `src/index.css` to customize color scheme.

### Content
- **Landing Page**: `src/pages/AudienceSelector.tsx`
- **Student Page**: `src/pages/StudentPage.tsx`
- **Corporate Page**: `src/pages/CorporatePage.tsx`
- **College Page**: `src/pages/CollegePage.tsx`

### Contact Information
Update contact details in `src/components/ContactSection.tsx`

## 📦 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Lucide React** - Icons
- **EmailJS** - Email service (optional)
- **Nodemailer** - Backend email (optional)

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is private and proprietary.

## 👤 Author

**Sathish Kumar Balakrishnan**
- Email: cybersecure8@gmail.com
- LinkedIn: [linkedin.com/in/sathsish90](https://www.linkedin.com/in/sathsish90)
- Twitter: [@sathsish90](https://x.com/sathsish90)
- Mentorship: [skillmate.ai/sathish](https://skillmate.ai/sathish)

## 🤝 Contributing

This is a personal portfolio project. Contributions are not expected, but feedback is welcome.

---

**Note**: Make sure to configure environment variables before deploying to production. Never commit sensitive information like API keys or passwords to version control.

