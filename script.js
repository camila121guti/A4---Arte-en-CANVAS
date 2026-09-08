// Obtener el lienzo Canvas
const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');

let time = 0;

// Definición de rectángulos y cuadros para la composición artística
const geometricArt = [
    // Fondo de grillas rectangulares estructuradas
    { x: 40, y: 40, w: 140, h: 140, color: '#d4af37', speed: 0.02, offset: 0 },
    { x: 200, y: 70, w: 90, h: 220, color: '#1a1a1a', stroke: '#d4af37', speed: 0.015, offset: 1 },
    { x: 310, y: 40, w: 180, h: 100, color: '#262626', speed: 0.03, offset: 2 },
    { x: 510, y: 90, w: 240, h: 150, color: '#141414', stroke: '#ffffff', speed: 0.01, offset: 1.5 },
    
    // Bloques centrales de acento
    { x: 90, y: 210, w: 200, h: 190, color: 'rgba(212, 175, 55, 0.25)', stroke: '#d4af37', speed: 0.025, offset: 0.5 },
    { x: 310, y: 160, w: 180, h: 240, color: '#d4af37', speed: 0.02, offset: 2.5 },
    { x: 510, y: 260, w: 140, h: 140, color: '#ffffff', speed: 0.035, offset: 3 },
    
    // Líneas rectangulares decorativas en la base
    { x: 40, y: 420, w: 710, h: 12, color: '#d4af37', speed: 0.01, offset: 0 },
    { x: 40, y: 440, w: 710, h: 4, color: '#ffffff', speed: 0.01, offset: 0.5 }
];

// Función principal de dibujo y animación
function renderCanvas() {
    // 1. Limpiar el lienzo en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Fondo del arte
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 3. Renderizar cada figura rectangular con animación de movimiento sinusoidal
    geometricArt.forEach((rect) => {
        ctx.save();
        
        // Movimiento flotante en el eje Y
        const offsetY = Math.sin(time * rect.speed + rect.offset) * 12;
        const currentY = rect.y + offsetY;

        // Relleno
        if (rect.color) {
            ctx.fillStyle = rect.color;
            ctx.fillRect(rect.x, currentY, rect.w, rect.h);
        }

        // Contorno
        if (rect.stroke) {
            ctx.strokeStyle = rect.stroke;
            ctx.lineWidth = 2;
            ctx.strokeRect(rect.x, currentY, rect.w, rect.h);
        }

        ctx.restore();
    });

    // 4. Animación de partículas de cuadros pequeños en movimiento continuo
    for (let i = 0; i < 10; i++) {
        const posX = (time * 60 + i * 85) % canvas.width;
        const posY = 35 + (i * 42);
        
        ctx.fillStyle = 'rgba(212, 175, 55, 0.7)';
        ctx.fillRect(posX, posY, 10, 10); // Cuadrados pequeñitos flotantes
    }

    // Incrementar el tiempo para la animación
    time += 0.04;

    // Bucle de animación
    requestAnimationFrame(renderCanvas);
}

// Resaltar opción activa del menú al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    renderCanvas();

    const sections = document.querySelectorAll('section[id], main[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
