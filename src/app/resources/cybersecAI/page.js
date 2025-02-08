'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogDetail from '@/components/BlogDetail';

const cybersecAI = () => {
  const blog = {
    title: "The inherent link between cybersecurity and AI",
    date: "February 5, 2025",
    image: "/img/blog/blog5.png",
    content: [

"Technology continues to evolve rapidly, and one of the most attention-grabbing innovations since late 2022 has been large language models (LLMs) like ChatGPT. With its remarkable ability to generate creative and complex content, ChatGPT and other AI tools have been widely adopted. Microsoft, for example, has integrated Copilot into Outlook, Word, Excel, and PowerPoint, transforming the way millions of people work every day. However, like many technological advancements, this progress also brings new challenges, particularly in data security and privacy.",  

"Cyber Threats in the AI Era",

"The year 2022 was a turbulent period in the world of cybersecurity. A report from the European Union Agency for Cybersecurity stated that an unstable geopolitical landscape had increased cyberattack incidents, including hacks exploited for political and economic gain. One growing threat is the use of AI in phishing attacks.",  

"According to Entrepreneur, AI-generated phishing emails have a higher success rate compared to manually crafted phishing emails. In fact, CNBC reported that the global market for AI-powered cybersecurity products is expected to grow from $14.9 billion in 2021 to $133.8 billion by 2030.",  

"This threat is becoming more sophisticated as AI advances. For example, an employee may receive an email appearing to be from their manager, requesting access to a system or a fund transfer. With AI, this email can display the sender’s real-time zone and location, making it more convincing. Attackers can even use deepfake voice technology to call employees directly, making these requests nearly indistinguishable from genuine communication.",  

"Tackling Challenges with AI Technology",  

"Although AI can be used by hackers, it can also be leveraged to enhance cybersecurity defenses. Some companies are already using AI and machine learning-based tools to detect and prevent cyberattacks before they occur. An effective security strategy must include continuous evaluation of potential vulnerabilities, as well as investment in security policies and risk management.",  

"In an increasingly complex digital environment, companies must develop cybersecurity strategies that match the sophistication of the threats they face. Collaborating with cybersecurity experts who specialize in AI-based solutions can be a crucial step in protecting businesses from ever-evolving cyber threats."
    ]
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

export default cybersecAI;