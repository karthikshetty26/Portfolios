"use client"
import Image from "next/image"; // Next.js Image component for optimized image loading
import { useRouter } from 'next/navigation';

export default function Project({ projectData }) {
    // Back Button
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <main className="project_page_main">
                {/* Back button for navigation */}
                <div className="project_back_div">
                    <button
                        onClick={handleGoBack}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8.3685 12L13.1162 3.03212L14.8838 3.9679L10.6315 12L14.8838 20.0321L13.1162 20.9679L8.3685 12Z">
                                </path>
                            </svg>
                        </span> Back
                    </button>
                </div>

                {/* Project content section */}
                <div className="project_content">

                    {/* Project logo and name container */}
                    {projectData.title && (
                        <span className="mb_fix">
                            {/* Conditional rendering for project logo */}
                            {projectData.logo && (
                                <Image
                                    src={projectData.logo}
                                    alt={projectData.title}
                                    width={80}
                                    height={80}
                                />
                            )}

                            {/* Project title */}
                            <h1>{projectData.title}</h1>
                        </span>
                    )}

                    {/* Project description */}
                    {projectData.description && (
                        <div className="about large project_dec mb_fix">
                            <h5>About the project</h5>
                            <p>{projectData.description}</p>
                        </div>
                    )}

                    {/* My role & challenges in the project */}
                    {projectData.myRole && (
                        <div className="my_role large project_dec mb_fix">
                            <h5>My Role & Challenges</h5>
                            <p>{projectData.myRole}</p>
                        </div>
                    )}

                    <div className="tiny_info_container mb_fix">
                        {/* Project year information */}
                        {projectData.year && (
                            <div className="date project_dec">
                                <h5>Year</h5>
                                <p>{projectData.year}</p>
                            </div>
                        )}

                        {/* Project category information */}
                        {projectData.category && (
                            <div className="category project_dec">
                                <h5>Category</h5>
                                <p>{projectData.category}</p>
                            </div>
                        )}

                        {/* Project platform information */}
                        {projectData.platform && (
                            <div className="platform project_dec">
                                <h5>Platform</h5>
                                <p>{projectData.platform}</p>
                            </div>
                        )}

                        {/* Project type information */}
                        {projectData.type && (
                            <div className="date project_dec">
                                <h5>Project Type</h5>
                                <p>{projectData.type}</p>
                            </div>
                        )}
                    </div>

                    {/* Technologies used in the project (conditional rendering) */}
                    {projectData.tech && (
                        <div className="tech project_dec mb_fix">
                            <h5>Tech & Technique</h5>
                            <p>{projectData.tech.join(' / ')}</p>
                        </div>
                    )}

                    {/* Actions section with external links */}
                    {projectData.projectLinks && (
                        <div className="acctions btns project_dec mb_fix">
                            <ul>
                                {projectData.projectLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                            {link.name}

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path></svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Project images gallery with lazy loading */}
                {projectData.images && (
                    <div className="project_img_container">
                        {/* Conditional rendering for image gallery */}
                        {projectData.images.map((image, index) => (
                            <div key={index} className="project_img">
                                <Image
                                    src={image.src} // Correct reference to `image.src`
                                    alt={image.alt}
                                    width={1366}
                                    height={768}
                                    priority={index === 0} // Prioritize first image
                                    loading={index === 0 ? "eager" : "lazy"} // Lazy load other images
                                    // sizes="(max-width: 768px) 100vw, 95vw"
                                    quality={75} // Balanced quality for performance
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* CAT */}
                {projectData.cat && (
                    <div className="cat btns project_dec">
                        <ul>
                            {projectData.cat.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.name}

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path></svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </main>
        );
    }
