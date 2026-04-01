"use client"
import { memo, useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Components
import TechItem from '@/components/tech-item/tech-item'
// Config
import { SOCIAL_LINKS, TECH_STACK, PROJECTS, BLOGS, UI_TEXT, EXTERNAL_LINKS, PROFILE } from '@/config/site';
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

  // GSAP animations
  const projectRefs = useRef([]);

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

  const toastMessage = UI_TEXT.TOAST_COPY_EMAIL;
  const [copySuccess, setCopySuccess] = useState(false);

  // Function to copy the current page email to the clipboard
  function copyToClipboard() {
    navigator.clipboard
      .writeText(PROFILE.email)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 4000); // runs after 4 sec
      })
      .catch((err) => console.error(UI_TEXT.EMAIL_COPY_ERROR, err)); // Error handling
  }

  return (
    <ReactLenis root>
      <main className={HOMECSS.container_main}>
        {/* Hero section with introduction */}
        <section className={HOMECSS.hero_section} id='home'>
          <h1>
            <span>{PROFILE.firstName}</span> <span>{PROFILE.lastName}</span>
          </h1>

          <div className={HOMECSS.hero_section_hr}></div>

          <div className={HOMECSS.hero_text}>
            <div className={HOMECSS.intro}>
              <p className={HOMECSS.intro_start}>{PROFILE.shortDescription}</p>
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
          {PROJECTS.map((project, i) => (
            <Link key={project.id} href={project.page_link} className={HOMECSS.project_container} ref={(el) => {
              if (el && !projectRefs.current.includes(el)) {
                projectRefs.current.push(el);
              }
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
            {BLOGS.map((blog) => (
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
            {UI_TEXT.BLOGS_CTA} <a href={EXTERNAL_LINKS.mediumProfile}>{UI_TEXT.BLOGS_MEDIUM}</a> and <a href={EXTERNAL_LINKS.hashnodeProfile}>{UI_TEXT.BLOGS_HASHNODE}</a>
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
            <h1>{UI_TEXT.CONTACT_HEADING}</h1>

            <p>{UI_TEXT.CONTACT_DESCRIPTION}</p>

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
                  title={UI_TEXT.COPY_EMAIL_BUTTON_TITLE}
                  onClick={copyToClipboard}
                  type="button"
                >
                  <span className={HOMECSS.gmail}>{UI_TEXT.CONTACT_EMAIL_BUTTON_TEXT}</span> <span className={HOMECSS.gmail}> {PROFILE.email}</span>
                </button>
              </li>
            </ul>

            <div className={`${HOMECSS.toast_div} ${copySuccess ? HOMECSS.show : ''}`}>
              <div className={HOMECSS.toast_messages}>{toastMessage}</div>
            </div>

          </div>

          <div className={HOMECSS.contact_cc}>©&nbsp;{PROFILE.yearFounded}&nbsp;{PROFILE.firstName} {PROFILE.lastName}</div>
        </section>
      </main>
    </ReactLenis>
  );
}