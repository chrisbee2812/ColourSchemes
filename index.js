const button = document.getElementById('generate-colour-scheme');
const modeType = document.getElementById('colour-scheme-list');

modeType.addEventListener('change', () => {
    const mode = document.getElementById('colour-scheme-list').value;
   if (mode === 'triad') {
        document.getElementById('return-colours-number').value = '3';
        document.getElementById('return-colours-number').disabled = true;
    } 
    else if (mode === 'quad') {
        document.getElementById('return-colours-number').value = '4';
        document.getElementById('return-colours-number').disabled = true;
    } 
    else {
        document.getElementById('return-colours-number').disabled = false;
    }
})


button.addEventListener('click', () => {
    const seedColor = document.getElementById('seed-colour-input').value.slice(1);
    const mode = document.getElementById('colour-scheme-list').value;
    const count = document.getElementById('return-colours-number').value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}&count=${count}`)
        .then(response => response.json())
        .then(data => {
            const colors = data.colors.map(color => color.hex.value);
            console.log(colors);
            const htmlReturn = colors.map(color => {
                return `<div><div id="colour-scheme-output-${color}" class="colour-scheme-output-colours" style="background-color:${color}"></div>                   
                <p id="colour-scheme-output-${color}-text" class="colour-scheme-output-text">${color}</p></div>`;
            }).join('');
            document.getElementById('colour-scheme-output').innerHTML = htmlReturn;
            colourOutputRender();
        });
    
});

function colourOutputRender() {
    const count = document.getElementById('return-colours-number').value;
    switch (count) {
        case '1':
            document.getElementById('colour-scheme-output').style.gridTemplateColumns = 'repeat(1, 1fr)';
            break;
        case '2':
            document.getElementById('colour-scheme-output').style.gridTemplateColumns = 'repeat(2, 1fr)';
            break;
        case '3':
            document.getElementById('colour-scheme-output').style.gridTemplateColumns = 'repeat(3, 1fr)';
            break;
        case '4':
            document.getElementById('colour-scheme-output').style.gridTemplateColumns = 'repeat(4, 1fr)';
            break;
        case '5':
            document.getElementById('colour-scheme-output').style.gridTemplateColumns = 'repeat(5, 1fr)';
            break;
        case '6':
            document.getElementById('colour-scheme-output').style.gridTemplateColumns = 'repeat(6, 1fr)';
            break;
        case '7':
            document.getElementById('colour-scheme-output').style.gridTemplateColumns = 'repeat(7, 1fr)';
            break;
        case '8':
            document.getElementById('colour-scheme-output').style.gridTemplateColumns = 'repeat(8, 1fr)';
            break;
        default:
            document.getElementById('colour-scheme-output').style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
}
