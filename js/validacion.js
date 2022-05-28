
//validacion formulario

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
	correo: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grup-${campo}`).classList.remove('formulario-grup-incorrecto');
		document.getElementById(`grup-${campo}`).classList.add('formulario-grup-correcto');
		document.querySelector(`#grup-${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grup-${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grup-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grup-${campo}`).classList.add('formulario-grup-incorrecto');
		document.getElementById(`grup-${campo}`).classList.remove('formulario-grup-correcto');
		document.querySelector(`#grup-${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grup-${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grup-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if( campos.nombre && campos.correo ){
		formulario.reset();

		document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo');
    document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
    document.getElementById('imagen-error').src="";
		setTimeout(() => {
			document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario-grup-correcto').forEach((icono) => {
			icono.classList.remove('formulario-grup-correcto');
		});

    //document.getElementById('imagen-error').src="img/log.jpg";
	} else {
		document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');
    document.getElementById('imagen-error').src="img/no-gif.gif";
	}
});
