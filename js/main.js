/*
  =====================================================
  ⚡ main.js — EL COMPORTAMIENTO
  =====================================================
  Este archivo define CÓMO SE COMPORTA la página:
  qué pasa cuando el usuario hace scroll,
  cuándo aparecen las animaciones, interacciones, etc.

  El HTML dice "aquí hay un botón".
  El CSS dice "ese botón es verde".
  El JS dice "cuando hagan clic en ese botón, ejecuta esto".

  Piénsalo como la electricidad y la plomería de la casa:
  lo que hace que las cosas funcionen e interactúen.

  REGLA CLAVE: Este archivo se carga AL FINAL del HTML
  (justo antes de </body>), no en el <head>.
  ¿Por qué? Porque el JS necesita que el HTML exista
  primero para poder manipularlo. Si se carga antes,
  intentaría encontrar elementos que aún no están en
  la página — y fallaría silenciosamente.
  =====================================================
*/


/* =====================================================
   ANIMACIÓN DE SCROLL CON INTERSECTION OBSERVER
   =====================================================
   El Intersection Observer es una API moderna del navegador
   que "observa" elementos y avisa cuando entran o salen
   del viewport (la parte visible de la pantalla).

   ALTERNATIVA ANTIGUA (más lenta):
   window.addEventListener('scroll', () => {
     // Se ejecuta cientos de veces por segundo al hacer scroll
     // Muy ineficiente — puede hacer la página lenta
   })

   INTERSECTION OBSERVER (la forma correcta):
   Solo se ejecuta cuando el elemento ENTRA o SALE de pantalla.
   Mucho más eficiente.
===================================================== */

// Creamos el observer y le pasamos una función que se
// ejecutará cada vez que un elemento "observado" cambie su estado
const observer = new IntersectionObserver((entries) => {

    // "entries" es un array con todos los elementos que cambiaron estado
    entries.forEach(entry => {
  
      // entry.isIntersecting es true cuando el elemento
      // es visible en pantalla, false cuando no lo es
      if (entry.isIntersecting) {
  
        // Agregamos la clase "visible" al elemento
        // El CSS hace la transición (fade + slide up)
        entry.target.classList.add('visible');
  
        // Opcional: dejar de observar el elemento después de animarlo
        // para no ejecutar la lógica innecesariamente
        // observer.unobserve(entry.target);
      }
    });
  
  }, {
    // threshold: 0.1 significa "avísame cuando el 10% del elemento
    // sea visible en pantalla". Valor entre 0 y 1.
    // 0 = apenas el borde sea visible
    // 1 = el elemento completo debe ser visible
    threshold: 0.1
  });
  
  
  // document.querySelectorAll() selecciona TODOS los elementos
  // que tengan la clase "fade-in" y devuelve un NodeList (lista)
  const elementosAnimados = document.querySelectorAll('.fade-in');
  
  // .forEach() recorre cada elemento de la lista
  // y le decimos al observer que lo "vigile"
  elementosAnimados.forEach(elemento => {
    observer.observe(elemento);
  });
  
  
  /* =====================================================
     EFECTO DE SOMBRA EN LA NAVBAR AL HACER SCROLL
     =====================================================
     window es el objeto global del navegador.
     Representa la ventana completa.
  
     addEventListener escucha eventos:
     - 'scroll' → el usuario mueve la página
     - 'click' → el usuario hace clic
     - 'keydown' → el usuario presiona una tecla
     - 'resize' → el usuario cambia el tamaño de la ventana
     etc.
  ===================================================== */
  window.addEventListener('scroll', () => {
  
    // document.querySelector() selecciona el PRIMER elemento
    // que coincida con el selector CSS (aquí, la etiqueta nav)
    const navbar = document.querySelector('nav');
  
    // window.scrollY es cuántos píxeles se ha desplazado
    // la página verticalmente desde arriba.
    // Si scrollY > 50, el usuario ya bajó más de 50px
    if (window.scrollY > 50) {
  
      // Modificamos el estilo directamente con JavaScript
      // Esto equivale a escribir en el CSS:
      // nav { box-shadow: 0 4px 30px rgba(0,0,0,0.4); }
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  
    } else {
  
      // Si está en la parte superior, quitamos la sombra
      navbar.style.boxShadow = 'none';
    }
  });
  
  
  /* =====================================================
     AÑO DINÁMICO EN EL FOOTER
     =====================================================
     En lugar de escribir "2025" fijo en el HTML,
     usamos JS para obtener el año actual.
     
     Así en 2026, 2027, etc. el footer siempre
     mostrará el año correcto automáticamente
     sin que tengas que editar el HTML manualmente.
  ===================================================== */
  
  // new Date() crea un objeto con la fecha y hora actuales
  // .getFullYear() extrae solo el año (ej: 2025)
  const anioActual = new Date().getFullYear();
  
  // querySelector busca el elemento <span> dentro del <footer>
  // (el que tiene el nombre en color cyan)
  const footerSpan = document.querySelector('footer span');
  
  // Verificamos que el elemento existe antes de modificarlo
  // Esto es una buena práctica para evitar errores
  if (footerSpan) {
  
    // textContent cambia el texto visible del elemento
    // Usamos template literals (backticks `) para combinar
    // texto y variables sin concatenación complicada
    footerSpan.textContent = `Juan Alexis Leiva · ${anioActual}`;
  }
  
  
  /* =====================================================
     CIERRE DEL ARCHIVO
     =====================================================
     ¿Qué aprendiste en este archivo?
  
     1. IntersectionObserver → detectar elementos en pantalla
     2. addEventListener → escuchar eventos del usuario
     3. querySelector / querySelectorAll → seleccionar elementos HTML
     4. classList.add() → agregar clases CSS desde JS
     5. element.style → modificar estilos directamente desde JS
     6. new Date() → trabajar con fechas
     7. Template literals (``) → combinar texto y variables
  
     Estos 7 conceptos cubren el 80% del JavaScript
     que usarás en proyectos web reales.
  ===================================================== */