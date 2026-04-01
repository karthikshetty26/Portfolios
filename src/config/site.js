/**
 * Centralized site configuration
 * Contains all hardcoded constants, text, links, and metadata
 */

// ============================================================================
// ANALYTICS
// ============================================================================
export const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID || 'G-9J1RVTSWHQ';

// ============================================================================
// SITE METADATA & PROFILE
// ============================================================================
export const SITE_URL = 'https://karthikshetty.info';
export const SITE_NAME = 'Karthik Shetty Portfolio';

export const PROFILE = {
  firstName: 'Karthik',
  lastName: 'Shetty',
  email: 'karthikkanyana26@gmail.com',
  title: 'Full Stack Developer & Web Development Portfolio',
  description: 'Professional portfolio of Karthik Shetty, experienced Full Stack Developer specializing in Next.js, React, Angular, Java, MySQL, Git, HTML, CSS, JavaScript, TypeScript and modern web development. View my projects, skills, and development experience.',
  keywords: 'Karthik Shetty, full stack developer, web developer, portfolio, React developer, Next.js developer, JavaScript engineer, frontend development, backend development, responsive web design, Next.js, React, Angular, Java, MySQL, Git, HTML, CSS, JavaScript, TypeScript',
  shortDescription: 'Hey there! I\'m a passionate Full-Stack Web Developer with 3+ years of professional experience turning ideas into reality, 6 completed projects, 4.6k+ hours of dedicated work, and countless hours spent exploring creative side projects.',
  yearFounded: 2025,
};

export const SEO_METADATA = {
  metadataBase: new URL(SITE_URL),
  title: `${PROFILE.firstName} ${PROFILE.lastName} | ${PROFILE.title}`,
  description: PROFILE.description,
  keywords: PROFILE.keywords,
  openGraph: {
    title: `${PROFILE.firstName} ${PROFILE.lastName} | Full Stack Developer Portfolio`,
    description: `Experienced Full Stack Developer specializing in creating modern, responsive web applications with modern web development`,
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE_NAME,
    images: [
      {
        url: '/images/sharing/portfolio-og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${PROFILE.firstName} ${PROFILE.lastName} - Full Stack Developer`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PROFILE.firstName} ${PROFILE.lastName} | Full Stack Developer`,
    description: 'Check out my portfolio showcasing web development projects and full stack expertise',
    creator: '@karthikshettyyy',
    images: ['/images/sharing/portfolio-og-image.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      {
        url: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        sizes: '180x180'
      }
    ],
    shortcut: '/icons/favicon-16x16.png'
  },
  alternates: {
    canonical: '/'
  }
};

export const GOOGLE_SITE_VERIFICATION = 'cCP8Kw8vPOGAi55eKNzp5ob1QtdHelpWTMyJPSkRCgU';

// ============================================================================
// SOCIAL LINKS
// ============================================================================
export const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/karthikshetty26/',
    src: (<><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></>),
    key: 'LinkedIn',
    title: 'Open LinkedIn Profile'
  },
  {
    href: 'https://github.com/karthikshetty26',
    src: (<><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></>),
    key: 'GitHub',
    title: 'Open GitHub Profile'
  },
  {
    href: 'https://instagram.com/karthikshettysocial/',
    src: (<><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg></>),
    key: 'Instagram',
    title: 'Open Instagram Profile'
  },
  {
    href: 'mailto:karthikkanyana26@gmail.com',
    src: (<><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 8.12811L20.4668 8.69379C20.2864 9.10792 19.7136 9.10792 19.5331 8.69379L19.2866 8.12811C18.8471 7.11947 18.0555 6.31641 17.0677 5.87708L16.308 5.53922C15.8973 5.35653 15.8973 4.75881 16.308 4.57612L17.0252 4.25714C18.0384 3.80651 18.8442 2.97373 19.2761 1.93083L19.5293 1.31953C19.7058 0.893489 20.2942 0.893489 20.4706 1.31953L20.7238 1.93083C21.1558 2.97373 21.9616 3.80651 22.9748 4.25714L23.6919 4.57612C24.1027 4.75881 24.1027 5.35653 23.6919 5.53922L22.9323 5.87708C21.9445 6.31641 21.1529 7.11947 20.7134 8.12811ZM2 4C2 3.44772 2.44772 3 3 3H14V5H4.5052L12 11.662L16.3981 7.75259L17.7269 9.24741L12 14.338L4 7.22684V19H20V11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4Z"></path></svg></>),
    key: 'Mail',
    title: 'Send an Email'
  },
];

// ============================================================================
// NAVIGATION MENU
// ============================================================================
export const MENU_ITEMS = [
  { name: 'HOME', href: 'home' },
  { name: 'ABOUT', href: 'about' },
  { name: (<>MY&nbsp;STACK</>), href: 'stack' },
  { name: 'PROJECTS', href: 'projects' },
  { name: 'BLOGS', href: 'blogs' },
  { name: 'CONTACT', href: 'contact' }
];

// ============================================================================
// TECHNOLOGY STACK
// ============================================================================
export const TECH_STACK = [
  {
    category: (<><span>01.03.01 / </span>Frontend</>),
    technologies: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Angular', 'React', 'Next.Js', 'SASS', 'Bootstrap']
  },
  {
    category: (<><span>01.03.02 / </span>Backends</>),
    technologies: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'RESTful APIs', 'MySQL', 'PostgreSQL']
  },
  {
    category: (<><span>01.03.03 / </span>Tools & Other</>),
    technologies: ['Git', 'GitHub', 'Figma', 'Postman', 'WordPress']
  }
];

// ============================================================================
// PROJECTS
// ============================================================================
export const PROJECTS = [
  {
    id: '01',
    top_info: 'Creative Projects',
    name: 'WebToolSmith',
    page_link: '/projects/webtoolsmith',
    tech: ['React', 'Next.js 15', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    id: '02',
    top_info: 'Team Projects',
    name: 'PayTimePlus (HMS)',
    page_link: '/projects/paytimeplus',
    tech: ['Angular 13', 'TypeScript', 'JavaScript', 'JQuery', 'HTML', 'CSS', 'Bootstrap', 'Java', 'Spring Boot', 'MySQL']
  },
  {
    id: '03',
    top_info: 'Team Projects',
    name: 'Union Bank: Digital Public Library (UTouch)',
    page_link: '/projects/union-bank-digital-library',
    tech: ['Angular 16', 'TypeScript', 'JavaScript', 'JQuery', 'HTML', 'CSS', 'Bootstrap', 'Strapi CMS']
  },
  {
    id: '04',
    top_info: 'Team Projects',
    name: 'AI DocSense',
    page_link: '/projects/aidocsense',
    tech: ['Angular 16', 'TypeScript', 'JavaScript', 'JQuery', 'HTML', 'CSS', 'Bootstrap', 'Python', 'Java', 'Spring Boot', 'MySQL']
  },
  {
    id: '05',
    top_info: 'Team Projects',
    name: 'RentAll (Equipment Rental)',
    page_link: '/projects/rentall',
    tech: ['Angular 17', 'TypeScript', 'JavaScript', 'JQuery', 'HTML', 'CSS', 'Bootstrap', 'Java', 'Spring Boot', 'MySQL']
  },
  {
    id: '06',
    top_info: 'Team Projects',
    name: 'Automated AP-BPM',
    page_link: '/projects/apstudio',
    tech: ['Angular 18', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Java', 'Spring Boot', 'Keycloak', 'PostgreSQL', 'Docker']
  }
];

// ============================================================================
// BLOGS
// ============================================================================
export const BLOGS = [
  {
    id: '1',
    name: 'Complete Guide to JavaScript List Operations',
    platform: 'hashnode.dev',
    platform_profile: 'https://karthikshetty.hashnode.dev/',
    link: 'https://karthikshetty.hashnode.dev/complete-guide-to-javascript-list-operations'
  },
  {
    id: '2',
    name: 'Synchronous and Asynchronous in JavaScript',
    platform: 'medium.com',
    platform_profile: 'https://medium.com/@Karthikshetty26',
    link: 'https://medium.com/@Karthikshetty26/synchronous-and-asynchronous-in-javascript-952e16ce7d4f'
  },
  {
    id: '3',
    name: 'Comparing Arrays in Java and JavaScrip',
    platform: 'medium.com',
    platform_profile: 'https://medium.com/@Karthikshetty26',
    link: 'https://medium.com/@Karthikshetty26/comparing-arrays-in-java-and-javascript-understanding-the-key-differences-868a48a64b9f'
  },
  {
    id: '4',
    name: 'Getting Started with Docker',
    platform: 'medium.com',
    platform_profile: 'https://medium.com/@Karthikshetty26',
    link: 'https://medium.com/@Karthikshetty26/getting-started-with-docker-windows-10-11-5ac2e928fefd'
  }
];

// ============================================================================
// UI TEXT & MESSAGES
// ============================================================================
export const UI_TEXT = {
  TOAST_COPY_EMAIL: 'Gmail ID copied!',
  BLOGS_CTA: 'Check out all blogs on',
  BLOGS_MEDIUM: 'medium.com',
  BLOGS_HASHNODE: 'hashnode.dev',
  CONTACT_HEADING: 'Turning Ideas into Impact',
  CONTACT_DESCRIPTION: 'Have an exciting idea brewing? Or maybe you\'re looking to brainstorm, collaborate, or just talk tech? I\'m always up for meaningful conversations—let\'s make it happen!',
  CONTACT_EMAIL_BUTTON_TEXT: 'or mail to',
  COPY_EMAIL_BUTTON_TITLE: 'Click to Copy Email ID',
  EMAIL_COPY_ERROR: 'Error copying text: ',
};

// ============================================================================
// EXTERNAL LINKS
// ============================================================================
export const EXTERNAL_LINKS = {
  mediumProfile: 'https://medium.com/@Karthikshetty26',
  hashnodeProfile: 'https://hashnode.com/@Karthikshetty26'
};
