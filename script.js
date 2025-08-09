const convertirBtn = document.getElementById("convertirBtn");
const temperaturaInput = document.getElementById("temperaturaInput");
const listaConversiones = document.getElementById("listaConversiones");

convertirBtn.addEventListener("click", convertirTemperatura);

function convertirTemperatura() {
  const celsius = parseFloat(temperaturaInput.value);

  if (isNaN(celsius) || temperaturaInput.value.trim() === "") {
    alert("Por favor, ingresa una temperatura válida.");
    return;
  }

  // Conversión de Celsius a Fahrenheit
  const fahrenheit = (celsius * 9/5) + 32;
  
  // Alerta si temperatura muy alta
  if (celsius > 40) {
    alert("⚠️ ¡Temperatura muy alta! Mayor a 40°C");
  }

  // Crear elemento de la lista
  const li = document.createElement("li");
  li.className = "conversion";

  // Determinar clase según temperatura y icono
  let claseTemperatura, icono;
  
  if (celsius < 15) {
    claseTemperatura = "fria";
    icono = "";
  } else if (celsius >= 15 && celsius <= 30) {
    claseTemperatura = "media";
    icono = "";
  } else {
    claseTemperatura = "caliente";
    icono = "";
  }

  li.classList.add(claseTemperatura);

  li.innerHTML = `
    <span>${icono} ${celsius}°C = ${fahrenheit.toFixed(1)}°F</span>
  `;

  listaConversiones.appendChild(li);
  temperaturaInput.value = "";
  temperaturaInput.focus();
}