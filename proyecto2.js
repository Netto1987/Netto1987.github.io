let guardar  = () => {
    
    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let documento = document.querySelector('#txtDocumento').value;
    let nombre = document.querySelector('#txtNombre').value;
    let correo = document.querySelector('#txtCorreo').value;
    let telefono = document.querySelector('#txtTelefono').value;

    datos.push({
        'documento' : documento,
        'nombre' : nombre,
        'correo' : correo,
        'telefono' : telefono

    });

    localStorage.info = JSON.stringify(datos);

    listar();

    alert("Se guardo")

}

let listar = () => {
    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);
    let tabla = document.querySelector("#tblDatos");
    tabla.innerHTML = "";

    datos.forEach(element => {
        tabla.innerHTML += `
        <tr>
            <td>${element.documento}</td>
            <td>${element.nombre}</td>
            <td>${element.correo}</td>
            <td>${element.telefono}</td>
            <td>
                <button class="btn btn_primary" onclick="editar(${element.documento})">Editar</button>
                <button class="btn btn_danger" onclick="eliminar(${element.documento})">Eliminar</button>
            </td>
        </tr>
        `;
        
    });
}

let editar = (doc)=>{
    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let documento = document.querySelector('#txtDocumento');
    let nombre = document.querySelector('#txtNombre');
    let correo = document.querySelector('#txtCorreo');
    let telefono = document.querySelector('#txtTelefono');
    let id = document.querySelector('#txtId');

    let btnGuardar = document.querySelector('#btnGuardar');
    let btnModificar = document.querySelector('#btnModificar');

    let resultado = datos.find(e => e.documento == doc);
    let resultadoIndex = datos.findIndex(e => e.documento == doc);

    if (resultado != undefined){
        
        btnGuardar.style.display = "none";
        btnModificar.style.display = "block";

        documento.value = resultado.documento;
        nombre.value = resultado.nombre;
        correo.value = resultado.correo;
        telefono.value = resultado.telefono;

        id.value = resultadoIndex;
    }else{
        alert("No lo encuentro");
    }
}

let modificar  = ()=>{
    
    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let documento = document.querySelector('#txtDocumento').value;
    let nombre = document.querySelector('#txtNombre').value;
    let correo = document.querySelector('#txtCorreo').value;
    let telefono = document.querySelector('#txtTelefono').value;
    let id = document.querySelector('#txtId').value;

    let btnGuardar = document.querySelector("#btnGuardar");
    let btnModificar = document.querySelector("#btnModificar");

    datos[id].documento = documento;
    datos[id].nombre = nombre;
    datos[id].correo = correo;
    datos[id].telefono = telefono;

    btnGuardar.style.display = "block";
    btnModificar.style.display = "none";

    localStorage.info = JSON.stringify(datos);

    alert("Se modifico")

}

let eliminar = (doc) => {

    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let resultadoIndex = datos.findIndex(e => e.documento == doc);

    if (resultadoIndex != -1){
        
        datos.splice(resultadoIndex, 1);
        
        localStorage.info = JSON.stringify(datos);

        listar();

    }else{
        alert("No lo encuentro");

    }
}