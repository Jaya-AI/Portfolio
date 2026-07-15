# Jayesh's Portfolio

A modern, interactive portfolio website built with React and Vite. Featuring smooth animations, particle effects, dark/light theme toggle, and comprehensive sections showcasing skills, projects, experience, education, and achievements.

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme** - Toggle between dark and light modes with smooth transitions
- **Smooth Animations** - Fade-in effects and scroll-based animations for engaging UX
- **Particle Background** - Dynamic particle animations on the hero section
- **Project Showcase** - Display and filter projects by categories
- **Skills Section** - Visualize technical skills with progress bars
- **Timeline Views** - Education and experience timelines with detailed information
- **GitHub Integration** - Display GitHub metrics and link to repositories
- **Contact Form** - Integrated contact section with form validation and email notifications
- **Hire Me Feature** - Direct email contact for job opportunities and collaborations
- **Resume Section** - Quick access to resume/CV
- **Achievements & Activities** - Highlight accomplishments and involvement
- **Certifications** - Display professional certifications
- **Smooth Navigation** - Sticky navbar with section highlighting
- **Firestore Backend** - Messages securely stored in Firestore database

## 🛠️ Tech Stack

### Frontend
- **Framework** - [React](https://react.dev/) ^18.3.1
- **Build Tool** - [Vite](https://vitejs.dev/) ^5.4.1
- **Styling** - CSS3 with custom animations

### Backend & Services
- **Database** - [Firebase Firestore](https://firebase.google.com/docs/firestore) - NoSQL database for storing contact messages
- **Email Service** - [EmailJS](https://www.emailjs.com/) - Serverless email notifications

### Other
- **Deployment Ready** - Optimized build configuration

## 📁 Project Structure

```
Portfolio_/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   ├── Activities.jsx
│   │   ├── Certifications.jsx
│   │   ├── ResumeSection.jsx
│   │   ├── GitHubSection.jsx
│   │   ├── Contact.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── FadeIn.jsx
│   │   ├── SkillBar.jsx
│   │   └── ParticleBackground.jsx
│   ├── config/              # Backend configuration
│   │   └── firebase.js      # Firebase Firestore setup
│   ├── data/                # Portfolio content data
│   │   ├── portfolioData.js
│   │   ├── personal.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── achievements.js
│   │   ├── activities.js
│   │   ├── certifications.js
│   │   └── socialLinks.js
│   ├── hooks/               # Custom React hooks
│   │   ├── useScroll.js
│   │   ├── useTheme.js
│   │   ├── useInView.js
│   │   └── useMousePosition.js
│   ├── utils/               # Utility functions
│   │   ├── animations.js
│   │   ├── contactHandler.js # Contact form and email handling
│   │   └── helpers.js
│   ├── assets/              # Images and media
│   └── main.jsx
├── public/                  # Static assets
├── index.html
├── jayesh-portfolio.jsx     # Main App component
├── vite.config.js           # Vite configuration
├── package.json
├── .env.example             # Environment variables template
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio_
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local` (if not exists, create it)
   - Add your Firebase credentials:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```
   - Add your EmailJS credentials:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

### Firebase Setup
1. Create a Firebase project at [firebase.google.com](https://firebase.google.com/)
2. Enable Firestore Database in your project
3. Copy your Firebase config credentials to `.env.local`

### EmailJS Setup
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an email service and template
3. Copy your EmailJS credentials to `.env.local`

### Development

Start the development server:
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📝 Customization

### Update Portfolio Content

All portfolio content is stored in `src/data/` files:

- **skills.js** - Add/modify technical skills
- **projects.js** - Showcase your projects
- **education.js** - Education background
- **experience.js** - Work experience timeline
- **achievements.js** - Notable achievements
- **activities.js** - Involvement and activities
- **certifications.js** - Professional certifications
- **personal.js** - Personal information and email
- **socialLinks.js** - Social media and contact links

### Configure Contact Form

Update your email in `src/data/personal.js` to receive "Hire Me" messages:
```javascript
export const personalInfo = {
  email: "your.email@example.com",
  // ... other info
};
```

### Customizing Appearance

- **Theme Colors** - Modify the theme in `src/hooks/useTheme.js`
- **Animations** - Adjust animation utilities in `src/utils/animations.js`
- **Component Styles** - Each component has its own styling; modify CSS as needed

## 🎨 Key Components

### Navbar
Fixed navigation bar with smooth scrolling to sections and theme toggle

### Hero Section
Eye-catching landing section with particle background effects

### Skills Section
Display technical skills with visual progress indicators

### Projects Section
Project showcase with filtering and search functionality

### Timeline Sections
Education and experience displayed in a timeline format

### Contact Section
Contact form for visitor inquiries

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 📦 Dependencies

### Core
- **react** - UI library
- **react-dom** - React DOM rendering

### Backend Integration
- **firebase** - Firebase SDK (Firestore database)
- **@emailjs/browser** - EmailJS for email notifications

## 🎯 Performance & Security Features

- Optimized build configuration with Vite
- Tree-shaking for smaller bundle sizes
- Code splitting for better performance
- Smooth scroll behavior and animations
- Firebase Firestore for secure data storage
- Environment variables for sensitive credentials
- Client-side form validation

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and use it as a template for your own portfolio!

## 📞 Contact

For any questions or suggestions, please refer to the Contact section on the portfolio website.

---

**Created with ❤️ using React and Vite**
