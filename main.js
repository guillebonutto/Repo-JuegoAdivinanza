var min = 1
var max = 50
var mesa = Math.floor(Math.random() * (max - min)) + min
var gano = 0
var turno = 1
function numeroAleatorio(numero) {
	adivina.focus()
	let elem = document.getElementById('adivina').value
	segundo.style.display = 'none'
	if (elem == numero) {
		segundo.style.display = 'block'
		segundo.style.background = 'red'
		segundo.style.color = 'yellow'
		segundo.style.border = '5px solid #FFD700'
		segundo.innerHTML = 'FELICIDADES!!! 🥳🥳🥳🥳'
		primero.style.display = 'none'
		tercero.style.display = 'none'
		gano++
	} else if (elem != numero && elem >= 1 && elem <= 50) {
		turno++
		if (turno < 11) {
			primero.style.display = 'block'
			primero.style.background = 'red'
			primero.style.color = 'white'
			primero.style.marginRight = '1rem'
			primero.innerHTML = `Incorrecto! Te quedan ${11 - turno} intentos`
			if (elem > numero) {
				tercero.style.display = 'block'
				tercero.innerHTML = 'El número ingresado es más grande ➕'
				if (turno == 2) resultprimero.innerHTML += elem
				else resultprimero.innerHTML += ', ' + elem
			} else {
				tercero.style.display = 'block'
				tercero.innerHTML = 'El número ingresado es más chico ➖'
				if (turno == 1) resultprimero.innerHTML += elem
				else resultprimero.innerHTML += ', ' + elem
			}
		} else {
			tercero.style.display = 'none'
			primero.style.marginRight = '0rem'
			primero.innerHTML = `Incorrecto! Lo sentimos, agotaste todos tus intentos 😢 mejor suerte a la próxima! 🙂`
			resultprimero.innerHTML += ', ' + elem
		}
	} else if (elem < 1 || elem > 50) {
		if (elem < 1)
			primero.innerHTML = `El número ingresado es inferior al rango permitido (1-50)`
		else
			primero.innerHTML = `El número ingresado excede el rango permitido (1-50)`
	} else {
		primero.innerHTML = 'Error, no se registró ningún número'
	}
	labelturno.innerHTML = `Turno N°: ${turno}`
	if (gano == 1 || turno == 11) {
		btnprimary.style.display = 'block'
		precargar.style.display = 'block'
		adivina.disabled = true
		enviar.disabled = true
	}
}

function resetear() {
	adivina.disabled = false
	enviar.disabled = false
	adivina.focus()
	primero.style.display = 'none'
	segundo.style.display = 'none'
	tercero.style.display = 'none'
	btnprimary.style.display = 'none'
	precargar.style.display = 'none'
	resultprimero.innerHTML = 'Números ingresados: '
	min = 1
	max = 50
	mesa = Math.floor(Math.random() * (max - min)) + min
	gano = 0
	turno = 1
	labelturno.innerHTML = `Turno N°: ${turno}`
}
