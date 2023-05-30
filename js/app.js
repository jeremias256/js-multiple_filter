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
    mostrarAutos(autos);
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
const mostrarAutos = (autos) => {
    
    limpiarHTML();

    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - Puertas:${puertas} -
                Transmisión:${transmision} - Precio:$${precio} - Color:${color}
        `;

        resultado.appendChild(autoHTML);

    })
}

const limpiarHTML = () =>{
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

const llenarSelect = () => {
    
    for(let i=max; i>=min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

const noResultado = () => {

    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}

const filtrarAuto = () => {
    const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

const filtrarMarca = (auto) =>{
    const { marca } = datosBusqueda;
    if( marca ){
        return auto.marca==marca;
    }
    return auto;
}
const filtrarYear = (auto) => {
    const { year } = datosBusqueda;
    if( year ){
        return auto.year === parseInt(year);
    }
    return auto;
}
const filtrarMinimo = (auto) => {
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo
    }
    return auto;
}
const filtrarMaximo = (auto) => {
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo
    }
    return auto;
}
const filtrarPuertas = (auto) => {
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas == puertas
    }
    return auto;
}
const filtrarTransmision = (auto) => {
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision == transmision
    }
    return auto;
}
const filtrarColor = (auto) => {
    const {color} = datosBusqueda;
    if(color){
        return auto.color == color
    }
    return auto;
}
