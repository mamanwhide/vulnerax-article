import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogDetail from '@/components/BlogDetail';

const blogs = [
  {
    slug: 'deepseekR1',
    title: "DeepSeek R1 exposed: Security flaws in China’s AI",
    date: "February 1, 2025",
    image: "/img/blog/blog1.png",
    content: [
      "The cybersecurity firm Kela has published a report highlighting multiple security vulnerabilities in DeepSeek R1, a Chinese AI tool that has recently gained attention for its advanced capabilities, accessibility, and competition with OpenAI’s ChatGPT. According to Kela’s findings, DeepSeek R1 surpasses ChatGPT in several tasks but is highly susceptible to jailbreak exploits, allowing it to generate harmful content such as ransomware, sensitive fabrications, and step-by-step guides for illegal activities.",
      "One of the major security weaknesses identified is the “Evil Jailbreak” attack, a flaw initially discovered in GPT-3.5 after ChatGPT’s launch. This exploit enables users to bypass ethical restrictions by prompting the AI to adopt a malicious persona. While OpenAI has patched this vulnerability in GPT-4 and GPT-4o, DeepSeek R1 remains exposed. During testing, Kela researchers successfully prompted the model to create an info-stealing malware designed to extract credentials, cookies, and credit card data, then send the stolen information to a remote server.",
      "Beyond its susceptibility to malicious persona adoption, DeepSeek R1 also presents another critical flaw—it openly reveals its reasoning process. While this feature enhances user understanding of how the model reaches conclusions, it simultaneously makes the AI more vulnerable to adversarial attacks. Attackers can exploit these reasoning pathways to pinpoint weaknesses and manipulate the model. Kela researchers demonstrated this by using DeepSeek R1’s #DeepThink feature, which provided step-by-step malware creation instructions, including detailed code snippets.",
      "This report follows DeepSeek R1’s recent achievement of ranking sixth in the Chatbot Arena benchmarking as of January 26, 2025, outperforming Meta’s Llama 3.1-405B, OpenAI’s o1, and Anthropic’s Claude 3.5 Sonnet.",
      "Kela’s red teaming analysis underscores that despite DeepSeek R1’s strong performance and efficiency, its security flaws pose significant risks to software supply chains, data privacy, and public safety. The AI model’s vulnerabilities could make it a valuable tool for cybercriminals, potentially fueling more illicit activities in the digital space."
    ],
  },
  {
    slug: 'sneaky2FA',
    title: "New 'Sneaky 2FA' Phishing Kit Targets Microsoft 365 Accounts with 2FA Code Bypass",
    date: "February 1, 2025",
    image: "/img/blog/blog2.png",
    content: [
      "Cybersecurity researchers have uncovered a new adversary-in-the-middle (AitM) phishing kit, dubbed 'Sneaky 2FA,' designed to steal Microsoft 365 credentials and two-factor authentication (2FA) codes. Detected by Sekoia in December 2024, the kit is distributed as a phishing-as-a-service (PhaaS) called 'Sneaky Log' via a Telegram bot. Nearly 100 domains hosting Sneaky 2FA phishing pages have been identified.",
      "The phishing campaigns lure victims with fake payment receipt emails containing QR codes that lead to fraudulent Microsoft login pages. These pages are hosted on compromised WordPress sites and feature tactics to bypass bots and analysis, including traffic filtering and IP checks. Only licensed users of Sneaky 2FA, which costs $200 per month, can conduct phishing campaigns.",
      "Investigations suggest ties to the W3LL Store phishing syndicate, known for similar tools like W3LL Panel. Sneaky 2FA’s techniques, including unique User-Agent transitions during authentication, help identify and thwart the phishing kit."
    ],
  },
];

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <Header />
      <main className="main">
        <BlogDetail title={blog.title} date={blog.date} image={blog.image} content={blog.content} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;