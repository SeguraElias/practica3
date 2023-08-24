const btnAgregar = document.querySelector('#btn-agregar')
const btnEditar = document.querySelector('#btn-editar')

//deshabilitamos el boton de editar 
btnEditar.setAttribute('disabled', true)

//referenciando campos de formulario

const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const genero = document.querySelector('#genero')
const fechaNac = document.querySelector('#fechaNac')

const personas = {
    data: [],
    nextId: 0,
    add: function(persona){
        this.nextId++,
        persona.id = this.nextId
        this.data.push(persona)
    }
}

btnAgregar.addEventListener('click', function(){
    if(nombre.value === '' || apellido.value === '' ){
        return
    }

    const persona = {
        nombre: nombre.value,
        apellido: apellido.value,
        genero: genero.value,
        fechaNac: fechaNac.value
    }

    personas.add(persona)

    console.log(personas.data)
})

function mostrarPersonas(){
    filas.innerHTML = 
}