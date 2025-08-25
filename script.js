const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const atualizarRelogio = () => {
    const data = new Date();
    const hora = data.getHours().toString().padStart(2, '0');
    const minuto = data.getMinutes().toString().padStart(2, '0');
    const segundo = data.getSeconds().toString().padStart(2, '0');
    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
    const relogio = horas.textContent + ':' + minutos.textContent + ':' + segundos.textContent;
}
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

const light = document.querySelector('.botaoa')
const reset = document.querySelector('.botaov')
const relogioContainer = document.querySelector('.relogio-container')

const acenderLampada = () => {
    const originalcor = relogioContainer.style.background;

    relogioContainer.style.background = '#6afa76ff';    
    setTimeout(() => {
        relogioContainer.style.background = originalcor || 'linear-gradient( to bottom,rgb(158, 248, 122) 0%, rgba(80, 241, 48, 0.781) 30%, rgba(116, 236, 69, 0.637) 100% ), #222'
    }, 1000);
}
const resetar = () => {
    horas.textContent = '00: ';
    minutos.textContent = '00:';
    segundos.textContent = '00';   
}


light.addEventListener('click', acenderLampada);
reset.addEventListener('click',resetar)