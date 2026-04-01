"use client"
import { memo, useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Components
import TechItem from '@/components/tech-item/tech-item'
// CSS
import HOMECSS from './Landing.module.css';
// Smooth page scroll
import { ReactLenis } from 'lenis/react'
// GSAP
import gsap from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  // HomeIcons Component supporting multiple paths for flexibility in SVG icons
  const HomeIcons = memo(({ paths }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="currentColor">
      {paths.map((path, index) => (
        <path key={index} d={path} /> // Render multiple paths if provided
      ))}
    </svg>
  ));
  HomeIcons.displayName = 'HomeIcons';

  // Array to store tech stack data structure
  const TECH_STACK = [
    {
      category: (<><span>01.03.01 / </span>Frontend</>),
      technologies: ["HTML", "CSS", "JavaScript", "Typescript", "Angular", "React", "Next.Js", "SASS", "Bootstrap"]
    },
    {
      category: (<><span>01.03.02 / </span>Backends</>),
      technologies: ["Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs", "MySQL", "PostgreSQL"]
    },
    {
      category: (<><span>01.03.03 / </span>Tools & Other</>),
      technologies: ["Git", "GitHub", "Figma", "Postman", "WordPress"]
    }
  ]

  // Array to store the project details
  const projects = [
    {
      id: "01",
      top_info: "Creative Projects",
      name: "WebToolSmith",
      page_link: "/projects/webtoolsmith",
      tech: ["React", "Next.js 15", "HTML5", "CSS3", "JavaScript"]
    },
    {
      id: "02",
      top_info: "Team Projects",
      name: "PayTimePlus (HMS)",
      page_link: "/projects/paytimeplus",
      tech: ["Angular 13", "TypeScript", "JavaScript", "JQuery", "HTML", "CSS", "Bootstrap", "Java", "Spring Boot", "MySQL"]
    },
    {
      id: "03",
      top_info: "Team Projects",
      name: "Union Bank: Digital Public Library (UTouch)",
      page_link: "/projects/union-bank-digital-library",
      tech: ["Angular 16", "TypeScript", "JavaScript", "JQuery", "HTML", "CSS", "Bootstrap", "Strapi CMS"]
    },
    {
      id: "04",
      top_info: "Team Projects",
      name: "AI DocSense",
      page_link: "/projects/aidocsense",
      tech: ["Angular 16", "TypeScript", "JavaScript", "JQuery", "HTML", "CSS", "Bootstrap", "Python", "Java", "Spring Boot", "MySQL"]
    },
    {
      id: "05",
      top_info: "Team Projects",
      name: "RentAll (Equipment Rental)",
      page_link: "/projects/rentall",
      tech: ["Angular 17", "TypeScript", "JavaScript", "JQuery", "HTML", "CSS", "Bootstrap", "Java", "Spring Boot", "MySQL"]
    },
    {
      id: "06",
      top_info: "Team Projects",
      name: "Automated AP-BPM",
      page_link: "/projects/apstudio",
      tech: ["Angular 18", "TypeScript", "JavaScript", "HTML", "CSS", "Java", "Spring Boot", "Keycloak", "PostgreSQL", "Docker"]
    }
  ]

  // Array to store the blog details
  const blogs = [
    {
      id: "1",
      name: "Complete Guide to JavaScript List Operations",
      platform: "hashnode.dev",
      platform_profile: "https://karthikshetty.hashnode.dev/",
      link: "https://karthikshetty.hashnode.dev/complete-guide-to-javascript-list-operations"
    },
    {
      id: "2",
      name: "Synchronous and Asynchronous in JavaScript",
      platform: "medium.com",
      platform_profile: "https://medium.com/@Karthikshetty26",
      link: "https://medium.com/@Karthikshetty26/synchronous-and-asynchronous-in-javascript-952e16ce7d4f"
    },
    {
      id: "3",
      name: "Comparing Arrays in Java and JavaScrip",
      platform: "medium.com",
      platform_profile: "https://medium.com/@Karthikshetty26",
      link: "https://medium.com/@Karthikshetty26/comparing-arrays-in-java-and-javascript-understanding-the-key-differences-868a48a64b9f"
    },
    {
      id: "4",
      name: "Getting Started with Docker",
      platform: "medium.com",
      platform_profile: "https://medium.com/@Karthikshetty26",
      link: "https://medium.com/@Karthikshetty26/getting-started-with-docker-windows-10-11-5ac2e928fefd"
    }
  ]

  // Contact links data for easier scalability and readability
  const SOCIAL_LINKS = [
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
      href: 'https://instagram.com/karthik.shetty.26/',
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

  // GSAP animations
  const projectRefs = useRef(null);
  projectRefs.current = [];

  // GSAP animation for project elements
  useEffect(() => {
    projectRefs.current.forEach((el) => {
      const anim = gsap.fromTo(
        el,
        { y: 100, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
          ease: 'power4.inOut',
          paused: true,
        }
      );

      // Create a ScrollTrigger instance for each project element
      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: () => anim.play(),           // Scroll down — play animation
        onLeaveBack: () => anim.reverse(),    // Scroll back up — reverse animation
      });
    });
  }, []);

  const toastMessage = "Gmail ID copied!";
  const [copySuccess, setCopySuccess] = useState(false);

  // Function to copy the current page email to the clipboard
  function copyToClipboard() {
    navigator.clipboard
      .writeText('karthikkanyana26@gmail.com')
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 4000); // runs after 4 sec
      })
      .catch((err) => console.error("Error copying text: ", err)); // Error handling
  }

  return (
    <ReactLenis root>
      <main className={HOMECSS.container_main}>
        {/* Hero section with introduction */}
        <section className={HOMECSS.hero_section} id='home'>
          <h1>
            <span>Karthik</span> <span>Shetty</span>
          </h1>

          <div className={HOMECSS.hero_section_hr}></div>

          <div className={HOMECSS.hero_text}>
            <div className={HOMECSS.intro}>
              <p className={HOMECSS.intro_start}>Hey there! I&apos;m a passionate <strong>Full-Stack Web Developer</strong> with <strong>3+ years</strong> of professional experience turning ideas into reality, 6 completed projects, <strong>4.6k+ hours</strong> of dedicated work, and countless hours spent exploring creative side projects.</p>
            </div>

            {/* Social media links */}
            <ul className={HOMECSS.social_ul_hero}>
              {SOCIAL_LINKS.map(({ href, src, key, title }) => (
                <li key={key}>
                  <a href={href} target="_blank" rel="noopener noreferrer" title={title} className={HOMECSS.here_svg}>
                    {src}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Atom Animation Background */}
          <div className={HOMECSS.atom_container_hero}>
            <div className={HOMECSS.hold_circle_one}>
              <div className={HOMECSS.circle_one}>
                <div className={HOMECSS.electron}></div>
              </div>
            </div>
            <div className={HOMECSS.hold_circle_two}>
              <div className={HOMECSS.circle_two}>
                <div className={HOMECSS.electron}></div>
              </div>
            </div>
            <div className={HOMECSS.hold_circle_three}>
              <div className={HOMECSS.circle_three}>
                <div className={HOMECSS.electron}></div>
              </div>
            </div>
          </div>
        </section>

        {/* About section with professional summary */}
        <section className={HOMECSS.about_section} id='about'>
          {/* Empty box to maintain space when the user selects About in the navigation sidebar. */}
          <div className={HOMECSS.about_blank}>
            <div className={HOMECSS.section_heading}>
              <h1>01 About</h1>
            </div>
          </div>

          <div className={HOMECSS.about_content_hold}>
            <h2>
              I specialize in building <strong>scalable</strong>, <strong>high-performance</strong> web applications with a strong focus on usability, <strong>efficiency</strong>, and seamless user experiences.
            </h2>
            <div className={HOMECSS.about_content}>
              <p>01.01 &nbsp;&nbsp;&nbsp;&nbsp;About me</p>
              <p>
                With a <strong>strong</strong> background in both frontend and backend development,
                I love turning ideas into functional, <strong>user-friendly</strong> solutions. Whether it&apos;s optimizing UI for seamless <strong>user experiences</strong> or building <strong>robust backend</strong> architectures, i&apos;m always eager to push the boundaries of web development.
              </p>
            </div>

            <div className={HOMECSS.about_content}>
              <p>01.02 &nbsp;&nbsp;&nbsp;&nbsp;I&apos;m</p>
              <p>Constantly learning and improving, I aim to create <strong>impactful</strong> digital solutions that align with <strong>business goals</strong> and enhance user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Stack section */}
        <section className={HOMECSS.stack_section} id='stack'>
          <div className={HOMECSS.stack_hold}>
            <p>01.03  &nbsp;&nbsp;&nbsp;&nbsp;Stack</p>

            <div className={HOMECSS.stack_containers}>
              {/* Map through each stack category */}
              {TECH_STACK.map((stack, i) => (
                <div key={i} className={HOMECSS.stack_container}>
                  {/* Display category name */}
                  <div className={HOMECSS.stack_category}>{stack.category}</div>
                  {/* Display technologies list */}
                  <ul className={HOMECSS.stack_list}>
                    {/* Map through technologies in the current category */}
                    {stack.technologies.map((techName, techIndex) => (
                      <TechItem key={techIndex} name={techName} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={HOMECSS.projects_section} id="projects">
          <div className={HOMECSS.section_heading}>
            <h1>3.0 Projects</h1>
          </div>

          {/* Map through projects array to render each project */}
          {projects.map((project, i) => (
            <Link key={project.id} href={project.page_link} className={HOMECSS.project_container} ref={(el) => {
              if (el) projectRefs.current[i] = el;
            }}>
              <div className={HOMECSS.project_container_hr}></div>
              <div className={HOMECSS.project_container_content}>
                <p className={HOMECSS.no}><i>more on project</i></p>
                <span>
                  <h2><span>{project.id} </span>{project.name}</h2>
                  <p>{project.top_info}</p>
                </span>
              </div>
            </Link>
          ))}
        </section>

        {/* Blogs Section */}
        <section className={HOMECSS.blogs_section} id="blogs">
          <div className={HOMECSS.section_heading}>
            <h1>4.0 Blogs</h1>
          </div>

          <div className={HOMECSS.blogs_container}>
            {/* Map through blogs array to render each blog */}
            {blogs.map((blog) => (
              <div key={blog.id} className={HOMECSS.blog_container}>
                {/* Link to the platform profile */}
                <a className={HOMECSS.platform_profile_link} href={blog.platform_profile}
                  target="_blank" rel="noopener noreferrer">
                  <p className={HOMECSS.platform_name}>{blog.platform}</p>
                  <span className={HOMECSS.icon__platform_profile_link}>
                    <HomeIcons paths={["M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"]} />
                  </span>
                </a>

                {/* Link to the blog post */}
                <a className={HOMECSS.blog_link} href={blog.link} target="_blank" rel="noopener noreferrer">
                  <h2>{blog.name}</h2>
                  <span className={HOMECSS.icon__blog_link}>
                    <HomeIcons paths={["M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"]} />
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* Links to all blogs */}
          <p className={HOMECSS.list_all_blogs}>
            Check out all blogs on <a href='https://medium.com/@Karthikshetty26'>medium.com</a> and <a href='https://hashnode.com/@Karthikshetty26'>hashnode.dev</a>
          </p>
        </section>

        {/* Contact Section */}
        <section className={HOMECSS.contact_section} id="contact">
          {/* Atom Animation Background */}
          <div className={HOMECSS.atom_container}>
            <div className={HOMECSS.hold_circle_one}>
              <div className={HOMECSS.circle_one}>
                <div className={HOMECSS.electron}></div>
              </div>
            </div>
            <div className={HOMECSS.hold_circle_two}>
              <div className={HOMECSS.circle_two}>
                <div className={HOMECSS.electron}></div>
              </div>
            </div>
            <div className={HOMECSS.hold_circle_three}>
              <div className={HOMECSS.circle_three}>
                <div className={HOMECSS.electron}></div>
              </div>
            </div>
          </div>

          <div className={HOMECSS.contact_container}>
            <h1>Turning Ideas into Impact</h1>

            <p>Have an exciting idea brewing? Or maybe you&apos;re looking to brainstorm, collaborate, or just talk tech? I&apos;m always up for meaningful conversations—let&apos;s make it happen!</p>

            {/* Social Links List */}
            <ul className={HOMECSS.social_ul}>
              {SOCIAL_LINKS.map(({ href, src, key, title }) => (
                <li key={key}>
                  <a href={href} target="_blank" rel="noopener noreferrer" title={title} className={HOMECSS.svg_contact}>
                    {src}
                  </a>
                </li>
              ))}

              <li className={HOMECSS.li_gmail}>
                <button
                  className={HOMECSS.gmail}
                  title='Click to Copy Email ID'
                  onClick={copyToClipboard}
                  type="button"
                >
                  <span className={HOMECSS.gmail}>or mail to</span> <span className={HOMECSS.gmail}> karthikkanyana26@gmail.com</span>
                </button>
              </li>
            </ul>

            <div className={`${HOMECSS.toast_div} ${copySuccess ? HOMECSS.show : ''}`}>
              <div className={HOMECSS.toast_messages}>{toastMessage}</div>
            </div>

          </div>

          <div className={HOMECSS.contact_cc}>©&nbsp;2025&nbsp;Karthik Shetty</div>
        </section>
      </main>
    </ReactLenis>
  );
}