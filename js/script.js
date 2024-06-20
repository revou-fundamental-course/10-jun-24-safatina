document.getElementById('konversi').onclick = () => convertTemp(false);
document.getElementById('reverse').onclick = () => convertTemp(true);
document.getElementById('reset').onclick = clearForm;

function convertTemp(reverse) {
    const celciusInput = document.getElementById("celcius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const rumusInput = document.getElementById("rumus");
    let celcius = parseFloat(celciusInput.value);
    let fahrenheit = parseFloat(fahrenheitInput.value);
    let rumus = "";

    if (reverse && !isNaN(fahrenheit)) {
        celcius = (fahrenheit - 32) * 5 / 9;
        rumus = `${fahrenheit}°F = (${fahrenheit} - 32) * 5/9 = ${celcius.toFixed(1)}°C`;
        celciusInput.value = celcius % 1 === 0 ? celcius.toFixed(0) : celcius.toFixed(1);
    } else if (!reverse && !isNaN(celcius)) {
        fahrenheit = (celcius * 9 / 5) + 32;
        rumus = `${celcius}°C = (${celcius} * 9/5) + 32 = ${fahrenheit.toFixed(1)}°F`;
        fahrenheitInput.value = fahrenheit % 1 === 0 ? fahrenheit.toFixed(0) : fahrenheit.toFixed(1);
    }
    rumusInput.value = rumus;
}

function clearForm() {
    document.getElementById('celcius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('rumus').value = '';
}

