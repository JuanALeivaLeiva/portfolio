/*
  =====================================================
  main.js — Portfolio Juan Alexis Leiva
  Comportamiento e interactividad
  =====================================================
*/

/* =====================================================
   1. MENÚ HAMBURGUESA (para móvil)
   =====================================================
   En pantallas pequeñas el menú se oculta y aparece
   un botón de 3 líneas (hamburguesa). Al hacer clic,
   el menú se despliega verticalmente.
===================================================== */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
  
    // toggle() agrega la clase si no existe, la quita si existe
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  }
  
  function cerrarMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  }
  
  // Cerrar el menú si el usuario hace clic fuera de él
  document.addEventListener('click', (e) => {
    const nav = document.getElementById('navbar');
    if (!nav.contains(e.target)) {
      cerrarMenu();
    }
  });
  
  
  /* =====================================================
     2. ANIMACIÓN DE SCROLL (Intersection Observer)
     =====================================================
     Detecta cuando los elementos con clase "fade-in"
     entran en pantalla y les agrega la clase "visible"
     para activar la animación CSS.
  ===================================================== */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
  
        // Si el elemento visible contiene barras de habilidades,
        // las animamos en ese momento
        const barras = entry.target.querySelectorAll('.skill-bar-fill');
        if (barras.length > 0) {
          animarBarras(barras);
        }
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  
  
  /* =====================================================
     3. ANIMACIÓN DE BARRAS DE HABILIDADES
     =====================================================
     Las barras empiezan en width: 0% (definido en CSS).
     Cuando entran en pantalla, tomamos el valor del
     atributo data-width y se lo asignamos como width.
     El CSS hace la transición suavemente (1 segundo).
     
     Ejemplo en HTML:
     <div class="skill-bar-fill" data-width="80"></div>
     → El JS lo convierte en: style="width: 80%"
  ===================================================== */
  function animarBarras(barras) {
    barras.forEach(barra => {
      // dataset.width lee el atributo data-width del HTML
      const anchura = barra.dataset.width;
      if (anchura) {
        // Pequeño delay para que la animación se vea después del fade-in
        setTimeout(() => {
          barra.style.width = anchura + '%';
        }, 300);
      }
    });
  }
  
  
  /* =====================================================
     4. EFECTO DE SOMBRA EN NAVBAR AL HACER SCROLL
  ===================================================== */
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
  
  
  /* =====================================================
     5. AÑO DINÁMICO EN EL FOOTER
  ===================================================== */
  const footerSpan = document.querySelector('footer span');
  if (footerSpan) {
    const anio = new Date().getFullYear();
    footerSpan.textContent = `Juan Alexis Leiva · ${anio}`;
  }