import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import autoraImg from "@/assets/autora-maria-fernanda.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit EducaKids Pro — Alfabetiza a tu Hijo en Casa | OFERTA" },
      {
        name: "description",
        content:
          "Más de 2.750 actividades imprimibles para alfabetizar a tu hijo de 3 a 8 años. Método fonético paso a paso + 5 bonos gratis. Garantía 7 días.",
      },
      { property: "og:title", content: "Kit EducaKids Pro — Alfabetiza a tu Hijo en Casa" },
      {
        property: "og:description",
        content: "+2.750 actividades imprimibles. Método fonético + 5 bonos gratis. Garantía 7 días.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/images/kit-mockup-BnVhh4i8.webp" },
      { name: "twitter:title", content: "Kit EducaKids Pro — Alfabetiza a tu Hijo en Casa" },
      {
        name: "twitter:description",
        content: "+2.750 actividades imprimibles. Método fonético + 5 bonos gratis. Garantía 7 días.",
      },
      { name: "twitter:image", content: "/images/kit-mockup-BnVhh4i8.webp" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: "/images/kit-mockup-BnVhh4i8.webp", fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Kit EducaKids Pro",
          description:
            "Más de 2.750 actividades imprimibles para alfabetizar niños de 3 a 8 años. Incluye 5 bonos gratis y garantía de 7 días.",
          image: "/images/kit-mockup-BnVhh4i8.webp",
          brand: { "@type": "Brand", name: "EducaKids Pro" },
          offers: {
            "@type": "Offer",
            price: "7.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Cómo recibo el material?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Recibirás todo inmediatamente en tu correo y WhatsApp tras la compra. Es 100% digital.",
              },
            },
            {
              "@type": "Question",
              name: "¿Tiene garantía?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí, 7 días de garantía incondicional. Si no te gusta, te devolvemos el 100% de tu dinero.",
              },
            },
            {
              "@type": "Question",
              name: "¿Tienen soporte por WhatsApp?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí. Tendrás soporte directo por WhatsApp para resolver cualquier duda sobre el material.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const PRO_URL = "https://pay.hotmart.com/W105866797V?checkoutMode=10";
const BASIC_URL = "https://pay.hotmart.com/R105951812O?checkoutMode=10";

const cadernos = [
  { title: "Caligrafía", img: "/images/caderno-caligrafia.png" },
  { title: "Consoantes", img: "/images/caderno-consoantes.png" },
  { title: "Fonemas y Grafemas", img: "/images/caderno-fonemas.png" },
  { title: "Silabários y sus Fonemas", img: "/images/caderno-silabarios.png" },
  { title: "Formando Palabras", img: "/images/caderno-formando-palabras.png" },
  { title: "Sílabas Simples y Complejas", img: "/images/caderno-silabas-simples.png" },
];

const bonuses = [
  { title: "Cuaderno de Caligrafía Inicial", price: "$9", img: "/images/bonus-caligrafia.webp" },
  { title: "Comprensión Lectora", price: "$5", img: "/images/bonus-lectora.webp" },
  { title: "Juegos Didácticos", price: "$7", img: "/images/bonus-juegos.webp" },
  { title: "Cuaderno de Matemática Inicial", price: "$9", img: "/images/bonus-matematica.webp" },
  { title: "Acceso al Grupo VIP de Mamás", price: "$12", img: null },
];

const testimonials = [
  { img: "/images/test-carla.png", name: "Carla" },
  { img: "/images/test-sofia.png", name: "Sofía" },
  { img: "/images/test-marta.png", name: "Marta" },
  { img: "/images/test-mariana.png", name: "Mariana" },
  { img: "/images/test-valeria.png", name: "Valeria" },
  { img: "/images/test-cida.webp", name: "Cida" },
];

const faqs = [
  {
    q: "¿Cómo recibo el material?",
    a: "<strong>Recibirás todo inmediatamente</strong> en tu <strong>correo</strong> y <strong>WhatsApp</strong> tras la compra. Es 100% digital.",
  },
  {
    q: "¿Tiene garantía?",
    a: "<strong>Sí, 7 días de garantía incondicional.</strong> Si no te gusta, <strong>te devolvemos el 100%</strong> de tu dinero. Sin preguntas.",
  },
  {
    q: "¿Tienen soporte por WhatsApp?",
    a: "<strong>Sí.</strong> Tendrás <strong>soporte directo por WhatsApp</strong> para resolver cualquier duda sobre el material.",
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LockIcon = ({ size = 12 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

function getTodayDate() {
  const now = new Date();
  return `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getFullYear()).slice(-2)}`;
}

function Index() {
  const [stickyVisible, setStickyVisible] = useState(false);


  useEffect(() => {
    const handler = () => {
      const el = document.getElementById("comprar");
      if (!el) return;
      const bottom = el.offsetTop + el.offsetHeight;
      setStickyVisible(window.scrollY > bottom);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <div className="top-bar">
        <span className="top-bar-inner">
          <span>Descuento solo</span>
          <span className="top-bar-date">HOY {getTodayDate()}</span>
          <span>en esta página</span>
        </span>
      </div>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            <h1>
              <span className="highlight">+2750</span> actividades interactivas para enseñar a tu hijo a leer en{" "}
              <span className="highlight">3 semanas</span>.
            </h1>

            <div className="video-wrapper">
              <iframe
                src="https://fast.wistia.net/embed/iframe/mv1yi5d2n5?seo=false&videoFoam=true&playerColor=4361ee&playButton=true&smallPlayButton=false&fullscreenButton=true&controlsVisibleOnLoad=false&stillUrl="
                title="Kit EducaKids Pro"
                allow="autoplay; fullscreen"
                className="video-iframe"
                frameBorder="0"
                scrolling="no"
              />
            </div>

            <div className="hero-cta-group">
              <a href="#plano-pro" className="btn-cta btn-glow">
                <BoltIcon />
                <span>SÍ, QUIERO EL MATERIAL AHORA</span>
              </a>
              <div className="hero-trust">
                <span><LockIcon size={14} /> Compra segura</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  Garantía 7 días
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Lo que recibes */}
        <section id="contenido" className="section section-soft">
          <div className="section-inner">
            <div className="section-header">
              <div className="badge-pill" style={{ background: "linear-gradient(to right,#22C55E,#16A34A)", color: "#fff", boxShadow: "0 4px 16px rgba(34,197,94,.35)", outline: "2px solid rgba(255,255,255,.6)", marginBottom: 16 }}>
                Contenido del Kit
              </div>
              <h2>Esto es <span className="highlight">lo que recibes</span></h2>
            </div>
            <div className="bonuses-grid">
              {cadernos.map((c, i) => (
                <div key={c.title} className="caderno-card">
                  <div className="caderno-card-header">
                    <span className="caderno-num">{i + 1}</span>
                    <h3>{c.title}</h3>
                  </div>
                  <div className="caderno-image-wrap">
                    <img src={c.img} alt={c.title} width={600} height={600} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Pricing */}
        <section id="comprar" className="section" style={{ scrollMarginTop: 8 }}>
          <div className="section-inner">
            <div className="section-header">
              <div className="badge-pill" style={{ background: "linear-gradient(to right,#DC2626,#EF4444)", color: "#fff", marginBottom: 12, boxShadow: "0 6px 20px rgba(220,38,38,.45)", outline: "2px solid rgba(255,255,255,.6)", animation: "pulse-urgent 1.6s ease-in-out infinite" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                ¡OFERTA LIMITADA HOY!
              </div>
            </div>
            <div className="pricing-grid">
              {/* Pro */}
              <div className="plan-card plan-pro" id="plano-pro" style={{ scrollMarginTop: 96 }}>
                <div className="popular-badge">Más popular</div>
                <div className="plan-card-header">
                  <div className="plan-badge" style={{ background: "#FFD600", color: "#1F2937" }}>Plan Pro completo</div>
                  <h3>Todo lo que llevas hoy:</h3>
                </div>
                <ul className="plan-features plan-pro-features">
                  <li><CheckIcon /><span>Kit Completo (+2.750 actividades)</span></li>
                  <li><CheckIcon /><span>Bono 1: Cuaderno de Caligrafía</span></li>
                  <li><CheckIcon /><span>Bono 2: Comprensión Lectora</span></li>
                  <li><CheckIcon /><span>Bono 3: Juegos Didácticos</span></li>
                  <li><CheckIcon /><span>Bono 4: Cuaderno de Matemática Inicial</span></li>
                  <li><CheckIcon /><span>Bono 5: Acceso al Grupo VIP de Mamás</span></li>
                </ul>
                <div className="plan-price-box white">
                  <p className="label">Valor total</p>
                  <p className="price-old">$33 USD</p>
                  <p className="label-green">Hoy pagas solo</p>
                  <p className="price-green">$7 USD</p>
                </div>
                <a href={PRO_URL} target="_blank" rel="noopener noreferrer" className="btn-pro btn-glow-green">
                  <BoltIcon />
                  <span>COMPRAR AHORA</span>
                </a>
                <p className="plan-security"><LockIcon /> Pago 100% seguro · Acceso inmediato</p>
              </div>

              {/* Básico */}
              <div className="plan-card">
                <div className="plan-card-header">
                  <div className="plan-badge" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Plan Básico</div>
                  <h3>Empieza ya</h3>
                  <p>Lo esencial para comenzar a alfabetizar</p>
                </div>
                <ul className="plan-features">
                  <li><CheckIcon /><span>120 actividades imprimibles</span></li>
                  <li><CheckIcon /><span>Bono 1: Cuaderno de Caligrafía</span></li>
                  <li><CheckIcon /><span>Garantía 7 días</span></li>
                </ul>
                <div className="plan-price-box muted">
                  <p className="label">Pago único</p>
                  <p className="price-main">$3,90 USD</p>
                </div>
                <a href={BASIC_URL} target="_blank" rel="noopener noreferrer" className="btn-basic">Quiero el Plan Básico</a>
                <p className="plan-security"><LockIcon /> Pago 100% seguro</p>
              </div>
            </div>
            <div className="payment-methods">
              <img src="/images/payment-methods-DVhKFudV.webp" alt="Métodos de pago aceptados" width={448} height={80} loading="lazy" />
            </div>
          </div>
        </section>

        {/* Bonuses */}
        <section className="section section-soft" style={{ position: "relative", overflow: "hidden" }}>
          <div className="section-inner">
            <div className="section-header">
              <div className="badge-pill" style={{ background: "linear-gradient(to right,#38BDF8,#0EA5E9,#22D3EE)", color: "#fff", boxShadow: "0 4px 16px rgba(56,189,248,.4)", outline: "2px solid rgba(255,255,255,.6)", marginBottom: 16 }}>
                Bonos Exclusivos
              </div>
              <h2>¡Y eso no es todo! Llévate estos <span className="gradient-sky">5 Bonos GRATIS</span></h2>
            </div>
            <div className="bonuses-grid">
              {bonuses.map((b) => (
                <div key={b.title} className="bonus-card">
                  {b.img ? (
                    <img src={b.img} alt={b.title} width={600} height={600} loading="lazy" />
                  ) : (
                    <div className="bonus-card-wpp">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.3A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.931L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                  )}
                  <div className="bonus-card-body">
                    <h3>{b.title}</h3>
                    <div className="bonus-price-row">
                      <span className="bonus-price-old">{b.price}</span>
                      <span className="bonus-free-tag">GRATIS</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section section-soft" style={{ position: "relative", overflow: "hidden" }}>
          <div className="section-inner">
            <div className="section-header">
              <div className="badge-pill" style={{ background: "linear-gradient(to right,#EC4899,#A855F7,#F43F5E)", color: "#fff", boxShadow: "0 4px 16px rgba(236,72,153,.3)", outline: "2px solid rgba(255,255,255,.6)", marginBottom: 16 }}>
                +3.485 mamás felices
              </div>
              <h2 style={{ maxWidth: 672, margin: "0 auto", lineHeight: 1.3 }}>
                Mamás que ya <span className="gradient-pink">transformaron</span> el aprendizaje de sus hijos
              </h2>
            </div>
            <div className="marquee">
              <div className="marquee-track">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={`${t.name}-${i}`} className="testimonial-card">
                    <img src={t.img} alt={`Testimonio de ${t.name}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="section">
          <div className="section-inner-sm">
            <div className="guarantee-box">
              <img src="/images/guarantee-badge-6zDzLzKe.webp" alt="Garantía 7 días" width={160} height={160} loading="lazy" />
              <h2>Garantía Incondicional de 7 Días</h2>
            </div>
          </div>
        </section>

        {/* Author */}
        <section className="section">
          <div className="section-inner-sm">
            <div className="author-box">
              <div className="author-img-wrap">
                <img src={autoraImg} alt="Maria Fernanda, autora del Kit EducaKids Pro" className="author-img" loading="lazy" width={320} height={400} />
              </div>
              <div className="author-content">
                <p className="author-eyebrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Quién está detrás de este material
                </p>
                <h2>Maria Fernanda</h2>
                <p className="author-role">Mamá · Profesora · Creadora del Kit</p>
                <div className="author-stats">
                  <span className="author-stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    +3.485 mamás
                  </span>
                  <span className="author-stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    +2.750 actividades
                  </span>
                  <span className="author-stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Hecho con amor
                  </span>
                </div>
                <p>Soy mamá y profesora, y sé lo importante que es tener actividades simples, bonitas y fáciles de usar para ayudar a los niños a aprender.</p>
                <p>Por eso creé estos cuadernos: materiales listos para imprimir, pensados para usar en casa o en el aula, de forma práctica, visual y divertida.</p>
                <p>Cada página fue hecha para reforzar la lectura, la escritura, la caligrafía y la concentración, sin que aprender se vuelva pesado.</p>
                <p>Mi misión es ayudar a mamás y profesoras a transformar la práctica diaria en avances reales para los niños.</p>
                <p><strong>Porque aprender también puede ser simple, divertido y con amor. 💜</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-soft">
          <div className="section-inner-sm">
            <h2 style={{ textAlign: "center", fontSize: "1.875rem", fontWeight: 900, marginBottom: 32 }}>Preguntas Frecuentes</h2>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>
                    {f.q}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="faq-chevron" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </summary>
                  <p dangerouslySetInnerHTML={{ __html: f.a }} />
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="section-inner-sm final-cta">
            <h2>Garantiza el futuro de tu hijo <span className="highlight">HOY</span></h2>
            <p>Antes de que esta oferta salga del aire. Acceso inmediato, garantía total y 5 bonos gratis incluidos.</p>
            <div className="cta-wrap">
              <a href="#plano-pro" className="btn-cta btn-glow" style={{ fontSize: "1.125rem" }}>
                <BoltIcon />
                <span>QUIERO MI KIT AHORA</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>&copy; {year} EducaKids Pro. Todos los derechos reservados.</footer>

      <div className={`sticky-cta${stickyVisible ? " visible" : ""}`}>
        <a href="#plano-pro" className="btn-cta btn-glow">
          <BoltIcon />
          <span>QUIERO MI KIT AHORA</span>
        </a>
      </div>
    </>
  );
}
