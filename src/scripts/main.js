AOS.init();

const dataEvento = new Date("Dec 12, 2025 00:00:00");
const timeStampDoEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasMs = 1000 * 60 * 60 * 24;
    const horasMs = 1000 * 60 * 60;
    const minutosMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasMs) / horasMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasMs / minutosMs));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado :('
    }

}, 1000)