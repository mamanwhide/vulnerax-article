const title = 'VulneraX - Cybersecurity Service';
const url = 'https://vulnerax.com'; 
const description = 'Innovative security solutions to protect and empower your business in the digital era.';
const author = 'VulneraX Team';
const twitter = '@vulneraxdotcom'; 

export default function Head() {
  return (
    <>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='Cybersecurity, Penetration Testing, Vulnerability Assessment, Red Teaming, System Hardening, Threat Hunting, Incident Response, Ransomware Readiness'
      />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />

      {/* Facebook Open Graph meta tags */}
      <meta property='og:title' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={'/img/logo.png'} /> 
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />

      {/* Icons */}
      <link rel='apple-touch-icon' href='/img/logo-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/img/logo-icon.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/img/logo-icon.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' color='#000000' href='/img/logo-icon.png' />

      {/* Meta Tags for HTML pages on Mobile */}
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />
      <link rel='shortcut icon' href='/img/logo-icon.png' />

      {/* Twitter Summary card */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content={twitter} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={'/img/logo.png'} /> 
    </>
  );
}