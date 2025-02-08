import Head from 'next/head';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import Resource from '@/components/Resource';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VulneraX - Cybersecurity Service</title>
        <meta name="description" content="Innovative security solutions to protect and empower your business in the digital era." />
      </Head>
      <Navbar />
      <main className="main">
        {/* Blog Section */}
        <section id="blog" className="blog section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Blog Post</h2>
            <p>This blog will present the latest reports, security incident analysis and global threat trends affecting businesses, organizations and individuals. From major ransomware attacks, corporate data leaks, zero-day exploits, etc. We provide in-depth insights to keep you one step ahead in cybersecurity.</p>
          </div>
          <Resource />
        </section>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}