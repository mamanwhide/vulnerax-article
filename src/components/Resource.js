'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 


const Resource = () => {
  const resources = [
    {
      id: 1,
      title: "New 'Sneaky 2FA' Phishing Kit Targets Microsoft 365 Accounts with 2FA Code Bypass",
      date: "1 February 2025",
      image: "/img/blog/blog1.png",
      slug: "sneaky2FA",
    },
    {
      id: 2,
      title: "DeepSeek R1 exposed: Security flaws in China’s AI",
      date: "1 February 2025",
      image: "/img/blog/blog2.png",
      slug: "deepseekR1",
    },
    {
      id: 3,
      title: "Cybercriminals Exploit Fake PoC to Target Security Researchers with Malware",
      date: "1 February 2025",
      image: "/img/blog/blog3.png",
      slug: "cybercriminals",
    },
    {
      id: 4,
      title: "The Evolution of Threats: GEN-AI Security with Key Resources and Insights",
      date: "4 February 2025",
      image: "/img/blog/blog4.png",
      slug: "genAI",
    },
    {
      id: 5,
      title: "The inherent link between cybersecurity and AI",
      date: "5 February 2025",
      image: "/img/blog/blog5.png",
      slug: "cybersecAI",
    },
    {
      id: 6,
      title: "Artificial Intelligence (AI) Has Fundamentally Reshaped the Cybersecurity Field",
      date: "6 February 2025",
      image: "/img/blog/blog6.png",
      slug: "cyberfield",
    },
    {
      id: 7,
      title: "Balancing Potential and Risk: The Impact of ChatGPT and AI on Security",
      date: "7 February 2025",
      image: "/img/blog/blog7.png",
      slug: "potentialrisk",
    },
    {
      id: 8,
      title: "U.S. National Security Implications of DeepSeek and Open-Source AI",
      date: "8 February 2025",
      image: "/img/blog/blog8.png",
      slug: "USsecurity",
    },
    {
      id: 9,
      title: "Plaintext: Are Deepfake Threats Real?",
      date: "9 February 2025",
      image: "/img/blog/blog9.png",
      slug: "plaintext",
    },
    {
      id: 10,
      title: "The Ghost GPT",
      date: "10 February 2025",
      image: "/img/blog/blog10.png",
      slug: "gostGPT",
    },
  ];



  return (
    <section className="py-xl-2">
      <div className="container overflow-hidden">
        <div className="row gy-3 gy-lg-0 gx-xxl-5">
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              className="col-12 col-lg-4"
              data-aos="fade-up" 
              data-aos-delay={index * 100} 
            >
              <article>
                <figure className="rounded overflow-hidden bsb-overlay-hover">
                  <Link href={`/resources/${resource.slug}`}>
                    <img
                      className="img-fluid bsb-scale bsb-hover-scale-up"
                      loading="lazy"
                      src={resource.image}
                      alt={resource.title}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Link>
                </figure>
                <div className="entry-header">
                  <h2 className="entry-title h4">
                    <Link
                      className="link-dark text-decoration-none"
                      href={`/resources/${resource.slug}`}
                    >
                      {resource.title}
                    </Link>
                  </h2>
                  <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a
                        className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                        href="#!"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-calendar3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <span className="ms-2 fs-7">{resource.date}</span>
                      </a>
                    </li>
                    <li>
                      <span className="px-3">&bull;</span>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resource;