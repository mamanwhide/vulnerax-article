'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogDetail from '@/components/BlogDetail';

const gostGPT = () => {
  const blog = {
    title: "The Ghost GPT",
    date: "February 10, 2025",
    image: "/img/blog/blog10.png",
    content: [
     "The Threat of GhostGPT: Unrestricted AI in Cybercrime",

"Artificial Intelligence (AI) has revolutionized various aspects of daily life, but cybercriminals are now exploiting the same technology for illicit activities. In 2023, WormGPT made headlines as an uncensored chatbot designed for malicious purposes. Soon after, other variants like WolfGPT and EscapeGPT emerged.",

"Recently, researchers at Abnormal Security uncovered GhostGPT, an AI chatbot that further pushes the ethical boundaries of AI in cybercrime.",

"What is GhostGPT?",

"GhostGPT is a chatbot specifically designed to aid cybercriminals. It likely operates by using a jailbroken version of ChatGPT or an open-source large language model (LLM), removing ethical and security safeguards. By eliminating these restrictions, GhostGPT can provide direct and unfiltered responses to sensitive or harmful queries that traditional AI systems would typically block.",

"Key Features of GhostGPT:",

"Fast Processing – Enables criminals to generate malicious content quickly and efficiently.",
"No-Logs Policy – Claims to keep no record of user activity, appealing to those seeking anonymity.",
"Easy Access – Sold through Telegram, allowing users to start using it immediately without having to jailbreak AI models themselves.",
"GhostGPT is marketed for various malicious activities, including coding, malware development, and system exploitation. One of its most concerning applications is crafting highly convincing phishing emails for Business Email Compromise (BEC) scams."
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

export default gostGPT;