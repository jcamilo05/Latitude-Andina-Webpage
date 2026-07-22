// ============================================================
// Inyecta navbar y footer compartidos en todas las páginas.
// Así se editan una sola vez y se reflejan en todo el sitio.
// ============================================================

const NAV_LINKS = [
  { href: "/index.html", label: "Inicio", key: "inicio" },
  { href: "/nosotros/index.html", label: "Nosotros", key: "nosotros" },
  { href: "/marca/index.html", label: "Tours en Monguí y Boyacá", key: "marca" },
  { href: "/filosofia-latitude/index.html", label: "Filosofía Latitude Andina", key: "filosofia-latitude" },
  { href: "/contacto/index.html", label: "Contacto", key: "contacto" },
];

// Con URLs tipo carpeta (ej. /nosotros/index.html en vez de /nosotros.html),
// TODOS los archivos se llaman literalmente "index.html" — comparar por
// nombre de archivo ya no sirve, porque siempre coincidiría. En su lugar,
// comparamos por el nombre de la CARPETA en la URL actual.
function currentPageKey() {
  let path = window.location.pathname;
  path = path.replace(/index\.html$/, ""); // quita "index.html" del final, si está
  path = path.replace(/\/$/, "");           // quita la barra final, si queda
  const segments = path.split("/").filter(Boolean);
  return segments.length ? segments[segments.length - 1] : "inicio";
}

function renderNavbar() {
  const active = currentPageKey();
  const links = NAV_LINKS.map(
    (link) => `
      <li class="nav-item">
        <a class="nav-link ${link.key === active ? "active" : ""}" href="${link.href}">${link.label}</a>
      </li>`
  ).join("");

  document.getElementById("navbar-placeholder").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-la sticky-top">
      <div class="container">
        <a class="navbar-brand" href="/index.html"><img src="../img/Logo-latitude-andina.png" alt="Latitude Andina" height="60"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" ara-label="Abrir menú">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul class="navbar-nav align-items-lg-center">
            ${links}
            <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a href="https://wa.me/573204881690" target="_blank" rel="noopener" class="btn btn-la-primary btn-sm">
                <i class="fa-brands fa-whatsapp me-1"></i>Reservar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  document.getElementById("footer-placeholder").innerHTML = `
    <footer class="footer-la">
      <div class="container">
        <div class="row g-4 align-items-start">

          <div class="col-lg-3 col-12 text-center">  
            <a href="index.html" class="d-inline-block mb-3">
              <img src="/img/logo-latitude-andina-negativo.png" alt="Latitude Andina" class="footer-logo">
            </a>
            <p class="mb-2" style="opacity:.85;">Experiencias auténticas en Monguí, Boyacá.</p>
            <p class="mb-3" style="opacity:.7; font-size:.85rem;">
              RNT: <a href="https://www.rues.org.co/registro-nt?rnt=274278" target="_blank" rel="noopener">274278</a>
            </p>

            <div class="footer-social">
              <a href="https://www.instagram.com/latitudeandina" target="_blank" rel="noopener" class="footer-social-icon" style="background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/573204881690" target="_blank" rel="noopener" class="footer-social-icon" style="background-color:#25d366;" aria-label="WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://www.booking.com/searchresults.es.html?aid=311839&label=celavi-hostel-Cu8ApLTlXeJGiW4bM9bXagS704403890337%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2161282227481%3Alp20205%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YavywThF4buZaN3e9Rle2iM&gclid=Cj0KCQjw6_HSBhCpARIsANvVltaJ6W_ownHSGOq6mdYivgipGQ6W2vFFoTdorEyOQGFMHOYLIxDyOEYaAubKEALw_wcB&redirected=1&city=-592708&highlighted_hotels=9603326&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=dbbbf2661fd3c96939ea9087bd5652cd" 
                target="_blank" rel="noopener" class="footer-social-icon" style="background-color:#003580; font-family:var(--font-display); font-weight:700;" aria-label="Booking">
                B.
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-12 text-center text-lg-center">
            <h6>Explora</h6> 
            <ul class="list-unstyled">
              ${NAV_LINKS.map((l) => `<li class="mb-2"><a href="${l.href}">${l.label}</a></li>`).join("")}
            </ul>
          </div>

          <div class="col-lg-3 col-12 text-center text-lg-center">
            <h6>Contacto</h6> 
             <ul class="list-unstyled footer-contact-list" style="opacity:.9;">
              <li class="mb-2"><span class="footer-icon-box"><i class="fa-regular fa-envelope"></i></span><a href="mailto:latitudeandina@gmail.com">latitudeandina@gmail.com</a></li>
              <li class="mb-2"><span class="footer-icon-box"><i class="fa-solid fa-location-dot"></i></span><span>Cra 5a # 5-28, Monguí-Boyacá</span></li>
              <li class="mb-2"><span class="footer-icon-box"><i class="fa-solid fa-phone"></i></span><a href="https://wa.me/573204881690" target="_blank" rel="noopener">+57 320 488 1690</a></li>
            </ul>
          </div>
           
          <div class="col-lg-3">
            <div class="footer-map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.927937502337!2d-72.85356832635536!3d5.723520331945208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a49e6321cd023%3A0xf0c710602334d92f!2sLatitude%20Andina%20Tours!5e0!3m2!1sen!2sco!4v1771110362068!5m2!1sen!2sco"
                width="100%"
                height="280"
                style="border:0; filter: saturate(0.85);"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación de Latitude Andina en Monguí">
              </iframe>
            </div>
          </div>

        </div>
        <div class="footer-bottom text-center">
          Copyright © 2026 - Latitude Andina - Todos los derechos reservados - Registro Nacional de Turismo:
          <a href="https://www.rues.org.co/registro-nt?rnt=274278" target="_blank" rel="noopener">274278</a>
        </div>
      </div>
    </footer>

    <a href="https://wa.me/573204881690" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  // Navbar transparente → sólida al hacer scroll.
  // Solo tiene sentido el estado "transparente" en páginas con hero/carrusel
  // detrás (donde hay una foto grande). En páginas sin hero (Nosotros,
  // Tours, etc.) el nav arranca directamente en su tamaño compacto,
  // porque si no, se ve "grueso" contra el fondo verde del page-header.
  const nav = document.querySelector(".navbar-la");
  const hasHero = document.querySelector(".hero, #heroCarousel, .filosofia-hero");

  if (!hasHero) {
    nav.classList.add("scrolled");
  } else {
    const toggleNavBg = () => {
      if (window.scrollY > 60) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };
    toggleNavBg();
    window.addEventListener("scroll", toggleNavBg);
  }
});
