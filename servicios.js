//PASOS PARA CONSUMIR DATOS DE UNA API

//1.Se establece para donde voy
//2. Se configura la peticion de envio
//3. Llamo al servicio

export async function consumirParaBuscar(){
    
    const URL="http://localhost:8000/usuarios"
    let peticion={
    method:"GET",
    }
    let respuestaInicial=await fetch(URL,peticion)
    let usuarios=await respuestaInicial.json()

    console.log(usuarios)

}

export async function consumirParaGuardarUsuario(datosEnvio){
    const URL="http://localhost:8000/usuarios"
    let peticion={
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(datosEnvio)
    }
    let respuestaInicial=await fetch(UTL,peticion)
    let usuarios=await respuestaInicial.json()

    console.logo(usuarios)
}