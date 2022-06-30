
//!variables
//var objeto
const marca         = document.getElementById('marca');
const year          = document.getElementById('year');
const minimo        = document.getElementById('minimo');
const maximo        = document.getElementById('maximo');
const puertas       = document.getElementById('puertas');
const transmision   = document.getElementById('transmision');
const color         = document.getElementById('color');


const resultado = document.getElementById('resultado');

//fechas
const max = new Date().getFullYear();
const min = max - 10;

//objeto de busqueda
const datosBusqueda = {
    marca:'',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//!eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();//? muestra auto al cargar
    llenarSelect();
});

marca.addEventListener('change', (e) =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})
year.addEventListener('change', (e) =>{
    datosBusqueda.year = e.target.value;
    filtrarAuto();
})
minimo.addEventListener('change', (e) =>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})
maximo.addEventListener('change', (e) =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})
puertas.addEventListener('change', (e) =>{
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
})
transmision.addEventListener('change', (e) =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
color.addEventListener('change', (e) =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})


//!funciones
const mostrarAutos = () => {
    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - Puertas:${puertas} -
                Transmisión:${transmision} - Precio:$${precio} - Color:${color}
        `;

        //insertar en el html
        resultado.appendChild(autoHTML);

    })
}

//? genera los years del select
const llenarSelect = () => {
    
    for(let i=max; i>=min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);// Agrega las opciones del year al select

    }
}

const filtrarAuto = () => {
    const resultado = autos.filter( filtrarMarca );
    console.log(resultado);
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if( marca ){
        return auto.marca===marca;
    }
    return auto;
}