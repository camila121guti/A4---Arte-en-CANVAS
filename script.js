// ==========================================
// 1. CARITA FELIZ GEOMÉTRICA (Solo rectángulos/cuadrados)
// ==========================================
const faceCanvas = document.getElementById('happyFaceCanvas');
const fCtx = faceCanvas.getContext('2d');

function drawHappyFace() {
    fCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);

    // Fondo del canvas
    fCtx.fillStyle = '#08090c';
    fCtx.fillRect(0, 0, faceCanvas.width, faceCanvas.height);

    // Marco base / Cara (Amarillo brillante)
    fCtx.fillStyle = '#ffcc00';
    fCtx.fillRect(75, 75, 350, 350);

    // Sombra/Borde inferior de la cara
    fCtx.fillStyle = '#d4a000';
    fCtx.fillRect(75, 405, 350, 20);

    // Ojo Izquierdo (Cuadrado con pupila)
    fCtx.fillStyle = '#0d0e12';
    fCtx.fillRect(140, 150, 70, 90);
    fCtx.fillStyle = '#00f0ff'; // Detalle pupila neón
    fCtx.fillRect(170, 170, 30, 30);

    // Ojo Derecho (Cuadrado con pupila)
    fCtx.fillStyle = '#0d0e12';
    fCtx.fillRect(290, 150, 70, 90);
    fCtx.fillStyle = '#00f0ff'; // Detalle pupila neón
    fCtx.fillRect(300, 170, 30, 30);

    // Nariz (Rectángulo vertical)
    fCtx.fillStyle = '#e6b800';
    fCtx.fillRect(235, 250, 30, 45);

    // Sonrisa Geométrica (Construida exclusivamente con bloques rectangulares)
    fCtx.fillStyle = '#0d0e12';
    // Lado izquierdo de la sonrisa
    fCtx.fillRect(140, 310, 40, 30);
    // Centro de la sonrisa
    fCtx.fillRect(180, 330, 140, 40);
    // Lado derecho de la sonrisa
    fCtx.fillRect(320, 310, 40, 30);

    // Lengua o detalle de la sonrisa (Rosa neón)
    fCtx.fillStyle = '#ff007f';
    fCtx.fillRect(220, 345, 60, 20);
}

// ==========================================
// 2. ANIMACIÓN GEOMÉTRICA SYNTH (Ecualizador dinámico)
// ==========================================
const animCanvas = document.getElementById('animationCanvas');
const aCtx = animCanvas.getContext('2d');

let time = 0;

// Configuración de barras animadas
const barsCount = 14;
const barWidth = 32;
const gap = 12;
const startX = 20;

function drawSynthAnimation() {
    aCtx.clearRect(0, 0, animCanvas.width, animCanvas.height);

    // Fondo oscuro con rejilla sutil
    aCtx.fillStyle = '#08090c';
    aCtx.fillRect(0, 0, animCanvas.width, animCanvas.height);

    // Línea de suelo neón
    aCtx.fillStyle = '#7000ff';
    aCtx.fillRect(0, 350, animCanvas.width, 4);

    // Dibujar barras ecualizadoras de altura dinámica
    for (let i = 0; i < barsCount; i++) {
        const x = startX + i * (barWidth + gap);
        
        // Calcular altura oscilatoria usando ondas seno y coseno
        const height = Math.sin(time * 0.05 + i * 0.4) * 110 + Math.cos(time * 0.03 + i * 0.2) * 50 + 140;
        const y = 350 - height;

        // Gradiente simulado por capas de rectángulos
        aCtx.fillStyle = i % 2 === 0 ? '#00f0ff' : '#ff007f';
        aCtx.fillRect(x, y, barWidth, height);

        // Bloque flotante por encima de cada barra
        const floatY = y - 25 - Math.sin(time * 0.08 + i) * 15;
        aCtx.fillStyle = '#ffffff';
        aCtx.fillRect(x, floatY, barWidth, 10);
    }

    // Cuadrados de fondo flotantes en velocidad continua
    for (let j = 0; j < 8; j++) {
        const cloudX = (time * 40 + j * 90) % animCanvas.width;
        const cloudY = 30 + (j * 25);
        aCtx.fillStyle = 'rgba(112, 0, 255, 0.4)';
        aCtx.fillRect(cloudX, cloudY, 16, 16);
    }

    time += 1;
    requestAnimationFrame(drawSynthAnimation);
}

// Iniciar ambos Canvas cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    drawHappyFace();
    drawSynthAnimation();
});
