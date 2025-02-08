'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogDetail from '@/components/BlogDetail';

const cybercriminals = () => {
  const blog = {
    title: "Cybercriminals Exploit Fake PoC to Target Security Researchers with Malware",
    date: "February 3, 2025",
    image: "/img/blog/blog3.png",
    content: [
      "Cybercriminals are using fake proof-of-concept (PoC) solutions to infect security researchers' devices with infostealing malware, according to a report by Trend Micro in January 2025. The attackers lure researchers by publishing a fake PoC for a critical-severity vulnerability, enticing them to download and analyze it, only to inadvertently install malware.",
      "The campaign involves a fake PoC for LDAPNightmare, a vulnerability tied to two flaws, CVE-2024-49112 and CVE-2024-49113, both patched in December 2024. These vulnerabilities impact Windows LDAP, with one rated 9.8/10 in severity due to its potential for remote code execution (RCE).",
      "The malicious PoC replaces legitimate files with “poc.exe,” which deploys a PowerShell script to steal sensitive data.",
      "This type of attack, commonly linked to nation-state actors, is often used to gather intelligence from large tech companies, government organizations, and critical infrastructure operators. Trend Micro emphasized the importance of verifying PoC sources and maintaining robust security measures to mitigate such risks.",
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />
      <main className="main">
        <div data-aos="fade-up" data-aos-delay="100">
          <BlogDetail title={blog.title} date={blog.date} image={blog.image} content={blog.content} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default cybercriminals;
