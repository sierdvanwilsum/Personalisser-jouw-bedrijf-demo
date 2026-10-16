import { useState } from 'react';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Diensten', href: '#diensten' },
  { label: 'Over ons', href: '#over-ons' },
  { label: 'Werkwijze', href: '#werkwijze' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { number: '01', title: 'Jouw dienst hier', description: 'Beschrijf kort wat je doet en welk resultaat je klanten mogen verwachten.' },
  { number: '02', title: 'Jouw specialisme hier', description: 'Geef aan waar jouw bedrijf in uitblinkt en waarom klanten voor jou kiezen.' },
  { number: '03', title: 'Persoonlijk advies', description: 'Laat zien hoe je meedenkt en samen met klanten tot een passend plan komt.' },
];

const steps = [
  { number: '01', title: 'Kennismaken', text: 'We bespreken je vraag, doelen en wat er nodig is om goed van start te gaan.' },
  { number: '02', title: 'Een helder plan', text: 'Je ontvangt een duidelijk voorstel met de aanpak, planning en investering.' },
  { number: '03', title: 'Samen aan de slag', text: 'We voeren het plan zorgvuldig uit en houden de lijnen kort gedurende het hele traject.' },
];

const projects = [
  { category: 'Project / branche', title: 'Voorbeeldproject één', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85' },
  { category: 'Project / branche', title: 'Voorbeeldproject twee', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85' },
  { category: 'Project / branche', title: 'Voorbeeldproject drie', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Jouw bedrijf hier, home"><span className="wordmark-small">Bedrijfsnaam</span><span className="wordmark-name">Jouw bedrijf</span><span className="wordmark-place">hier</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav id="site-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Hoofdnavigatie">{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>
        <a className="header-booking" href="#contact">Plan een kennismaking <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img className="hero-image" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=85" alt="Sfeerbeeld van een stijlvol restaurantinterieur" />
          <div className="hero-scrim" />
          <div className="hero-copy"><p className="eyebrow hero-eyebrow">Sterk in wat jij nodig hebt</p><h1 id="hero-title">Jouw bedrijf.<br />Jouw verhaal.</h1><p className="hero-subtitle">Een professionele basis voor een bedrijf dat gezien mag worden.</p><div className="hero-actions"><a className="button button-light" href="#diensten">Ontdek wat we doen <span aria-hidden="true">↓</span></a><a className="text-link text-link-light" href="#contact">Neem contact op <span aria-hidden="true">↗</span></a></div></div>
          <span className="photo-caption">Vervang dit sfeerbeeld door eigen fotografie</span><a className="hero-side-note" href="#over-ons">Persoonlijk. Duidelijk. Betrokken. <span aria-hidden="true">↓</span></a>
        </section>

        <section className="welcome section-wrap"><p className="eyebrow">Welkom bij Jouw bedrijf hier</p><h2>Goed werk begint<br />met vertrouwen.</h2><div className="welcome-copy"><p>Een heldere plek om te vertellen wie je bent, wat je doet en waarom klanten juist voor jou kiezen.</p><a className="text-link" href="#over-ons">Ontdek jouw bedrijf <span aria-hidden="true">↗</span></a></div><span className="section-number" aria-hidden="true">01</span></section>

        <section className="about section-wrap" id="over-ons"><div className="about-photo photo-frame"><img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85" alt="Sfeervol restaurantinterieur met tafels" loading="lazy" /><span className="photo-tag">Vervang door eigen sfeerfoto</span></div><div className="about-copy"><p className="eyebrow">02 / Over ons</p><h2>Een verhaal dat<br />bij jou past.</h2><p className="placeholder-copy">Vertel hier in een paar zinnen wie je bent, waar je voor staat en wat klanten aan jouw bedrijf hebben. Persoonlijk, concreet en zonder onnodige omwegen.</p><a className="text-link" href="#contact">Vertel jouw verhaal <span aria-hidden="true">↗</span></a></div><p className="photo-note">Ruimte voor een sterk beeld en een persoonlijk verhaal.</p></section>

        <section className="services-section" id="diensten"><div className="section-wrap services-inner"><div className="services-heading"><div><p className="eyebrow">03 / Wat we doen</p><h2>Van vraag<br />naar resultaat.</h2></div><p>Gebruik deze sectie om je belangrijkste diensten helder en overtuigend te presenteren.</p></div><div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>

        <section className="projects section-wrap"><div className="projects-heading"><div><p className="eyebrow">04 / Voorbeelden</p><h2>Werk waar je<br />trots op bent.</h2></div><p>Laat hier eerdere projecten, klanten of resultaten zien. Beeld maakt je verhaal direct concreet.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-image photo-frame"><img src={project.image} alt="Voorbeeld van een afgerond project" loading="lazy" /><span className="photo-tag">Eigen projectfoto</span></div><p className="project-category">{project.category}</p><h3>{project.title}</h3><a className="text-link" href="#contact">Bekijk project <span aria-hidden="true">↗</span></a></article>)}</div></section>

        <section className="process-section" id="werkwijze"><div className="section-wrap process-inner"><div className="process-heading"><p className="eyebrow">05 / Onze werkwijze</p><h2>Persoonlijk<br />van begin tot eind.</h2></div><div className="steps">{steps.map((step) => <article className="step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

        <section className="contact section-wrap" id="contact"><div className="contact-heading"><p className="eyebrow">06 / Contact</p><h2>Een goed idee<br />begint hier.</h2><p className="contact-intro">Benieuwd wat we voor jou kunnen betekenen? Laat je gegevens achter of neem direct contact op.</p><a className="button button-dark" href="mailto:hallo@jouwbedrijf.nl">Neem contact op <span aria-hidden="true">↗</span></a></div><div className="contact-details"><div className="contact-item"><h3>Bezoek</h3><p>[Straatnaam 00]<br />[Postcode] [Plaats]</p></div><div className="contact-item"><h3>Neem contact op</h3><p><a href="tel:+31000000000">[06 - 00 00 00 00]</a><br /><a href="mailto:hallo@jouwbedrijf.nl">hallo@jouwbedrijf.nl</a></p></div><div className="contact-item"><h3>Beschikbaar</h3><p>Maandag – vrijdag<br />09:00 – 17:00 uur</p></div></div><div className="map-placeholder" role="img" aria-label="Kaart placeholder"><span className="map-marker" aria-hidden="true">+</span><span>PLAATS HIER EEN KAART</span><span className="map-location">[Jouw locatie]</span></div></section>
      </main>

      <footer className="site-footer"><div className="footer-main"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-small">Bedrijfsnaam</span><span className="wordmark-name">Jouw bedrijf</span><span className="wordmark-place">hier</span></a><div className="footer-contact"><p>[Straatnaam 00]</p><p>[06 - 00 00 00 00]</p><p>hallo@jouwbedrijf.nl</p></div><nav className="footer-nav" aria-label="Footernavigatie"><a href="#home">Home</a><a href="#diensten">Diensten</a><a href="#over-ons">Over ons</a><a href="#contact">Contact</a></nav><div className="footer-social"><a href="#contact">LinkedIn <span aria-hidden="true">↗</span></a><a href="#contact">Instagram <span aria-hidden="true">↗</span></a></div></div><div className="footer-bottom"><span>© Jouw bedrijf hier</span><a href="#home">Terug naar boven ↑</a></div></footer>
    </>
  );
}

export default App;
