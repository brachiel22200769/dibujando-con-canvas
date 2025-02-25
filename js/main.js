function dibujar() {
    const dibujos = [
        (ctx) => ctx.fillRect(10, 10, 100, 50), // Rectángulo relleno
        (ctx) => { ctx.strokeStyle = "red"; ctx.lineWidth = 4; ctx.strokeRect(10, 10, 100, 50); }, // Rectángulo con borde
        (ctx) => { ctx.beginPath(); ctx.moveTo(75, 10); ctx.lineTo(130, 80); ctx.lineTo(20, 80); ctx.closePath(); ctx.fillStyle = "green"; ctx.fill(); }, // Triángulo
        (ctx) => { ctx.beginPath(); ctx.arc(75, 50, 30, 0, Math.PI * 2); ctx.strokeStyle = "purple"; ctx.stroke(); }, // Círculo
        (ctx) => { ctx.beginPath(); ctx.arc(75, 50, 30, 0, Math.PI); ctx.stroke(); }, // Arco (sonrisa)
        (ctx) => { ctx.beginPath(); ctx.moveTo(10, 10); ctx.lineTo(140, 90); ctx.stroke(); }, // Línea diagonal
        (ctx) => { ctx.beginPath(); ctx.moveTo(10, 80); ctx.quadraticCurveTo(75, 10, 140, 80); ctx.stroke(); }, // Curva cuadrática
        (ctx) => { ctx.beginPath(); ctx.moveTo(10, 80); ctx.bezierCurveTo(40, 10, 110, 10, 140, 80); ctx.stroke(); }, // Curva Bézier
        (ctx) => { ctx.font = "16px Arial"; ctx.fillText("Canvas API", 10, 50); ctx.strokeText("Bordes", 10, 80); }, // Texto
        (ctx) => { let gradient = ctx.createLinearGradient(10, 50, 140, 50); gradient.addColorStop(0, "red"); gradient.addColorStop(1, "yellow"); ctx.fillStyle = gradient; ctx.fillRect(10, 30, 130, 40); } // Gradiente
    ];

    dibujos.forEach((dibujo, i) => {
        const canvas = document.getElementById(`canvas${i + 1}`);
        if (canvas) {
            const ctx = canvas.getContext("2d");
            dibujo(ctx);
        }
    });
}

// Cargar imágenes en el canvas
function dibujarImagenes() {
    const canvas = document.getElementById("canvas11");
    const ctx = canvas.getContext("2d");

    // Cargar imagen normal
    const img1 = new Image();
    img1.src = "imagen.png";  
    img1.onload = function () {
        ctx.drawImage(img1, 10, 10, 100, 100);
    };

    // Cargar patrón
    const img2 = new Image();
    img2.src = "patron.png"; 
    img2.onload = function () {
        const pattern = ctx.createPattern(img2, "repeat");
        ctx.fillStyle = pattern;
        ctx.fillRect(10, 120, 100, 100);
    };
}

window.onload = function () {
    dibujar();
    dibujarImagenes();
};
