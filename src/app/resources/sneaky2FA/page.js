'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogDetail from '@/components/BlogDetail';

const sneaky2FA = () => {
  const blog = {
    title: "New 'Sneaky 2FA' Phishing Kit Targets Microsoft 365 Accounts with 2FA Code Bypass",
    date: "February 3, 2025",
    image: "/img/blog/blog1.png",
    content: [
      
      "Cybersecurity researchers have uncovered a new adversary-in-the-middle (AitM) phishing kit, dubbed     Sneaky 2FA, designed to steal Microsoft 365 credentials and two-factor authentication (2FA) codes. Detected by Sekoia in December 2024, the kit is distributed as a phishing-as-a-service (PhaaS) called Sneaky Log via a Telegram bot. Nearly 100 domains hosting Sneaky 2FA phishing pages have been identified.",
      "The phishing campaigns lure victims with fake payment receipt emails containing QR codes that lead to fraudulent Microsoft login pages. These pages are hosted on compromised WordPress sites and feature tactics to bypass bots and analysis, including traffic filtering and IP checks. Only licensed users of Sneaky 2FA, which costs $200 per month, can conduct phishing campaigns.",
      "Investigations suggest ties to the W3LL Store phishing syndicate, known for similar tools like W3LL Panel. Sneaky 2FA’s techniques, including unique User-Agent transitions during authentication, help identify and thwart the phishing kit."
      
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

export default sneaky2FA;