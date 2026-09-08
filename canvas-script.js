const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');

// Configuración de elementos geométricos animados
let time = 0;

// Lista de bloques decorativos estáticos y dinámicos (Únicamente rectángulos/cuadrados)
const blocks = [
    // Fondo de grillas rectangulares
    { x: 50, y: 50, w: 120, h: 120, color: '#d4af37', speed: 0.02, offset: 0 },
    { x: 200, y: 80, w: 80, h: 200, color: '#1a1a1a', stroke: '#d4af37', speed: 0.015, offset: 1 },
    { x: 320, y: 50, w: 160, h: 90, color: '#2a2a2a', speed: 0.03, offset: 2 },
    { x: 520, y: 100, w: 220, h: 140, color: '#141414', stroke: '#ffffff', speed: 0.01, offset: 1.5 },
    
    // Bloques centrales de acento
    { x: 100, y: 220, w: 180, h: 180, color: 'rgba(212, 175, 55, 0.2)', stroke: '#d4af37', speed: 0.025, offset: 0.5 },
    { x: 320, y: 180, w: 160, h: 220, color: '#d4af37', speed: 0.02, offset: 2.5 },
    { x: 500, y: 280, w: 120, h: 120, color: '#ffffff', speed: 0.035, offset: 3 },
    
    // Detalle geométrico inferior
    { x: 50, y: 410, w: 700, h: 15, color: '#d4af37', speed: 0.01, offset: 0 }
];

function draw() {
    // 1. Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Fondo base
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 3. Dibujar composición geométrica con animación básica (efecto de pulso/desplazamiento)
    blocks.forEach((block) => {
        ctx.save();
        
        // Cálculo del movimiento/animación sinusoidal
        const offsetY = Math.sin(time * block.speed + block.offset) * 15;
        const currentY = block.y + offsetY;

        // Dibujar relleno si existe
        if (block.color) {
            ctx.fillStyle = block.color;
            ctx.fillRect(block.x, currentY, block.w, block.h);
        }

        // Dibujar borde si existe
        if (block.stroke) {
            ctx.strokeStyle = block.stroke;
            ctx.lineWidth = 2;
            ctx.strokeRect(block.x, currentY, block.w, block.h);
        }

        ctx.restore();
    });

    // 4. Elementos dinámicos en cascada (cuadrados flotantes en movimiento continuo)
    for (let i = 0; i < 8; i++) {
        const xPos = (time * 50 + i * 100) % canvas.width;
        const yPos = 30 + (i * 55);
        
        ctx.fillStyle = 'rgba(212, 175, 55, 0.6)';
        ctx.fillRect(xPos, yPos, 12, 12); // Cuadrados pequeños
    }

    // Incrementar el tiempo para la animación
    time += 0.05;

    // Bucle de animación continuo
    requestAnimationFrame(draw);
}

// Iniciar animación
draw();
