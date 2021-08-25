function formulario(elEvento){
    elEvento.preventDefault();

    var  nombre1 = document.querySelector("#primNombre").value;
    var  nombre2 = document.querySelector("#SegunNombre").value;
    var  apellido = document.querySelector("#apellido").value;
    
    var  correo = document.querySelector("#correo").value;
    var  contraseña = document.querySelector("#contraseña").value;
    var  SegContraseña = document.querySelector("#SegContraseña").value;
    
    var boton = document.querySelector("#boton");
    var respuestas = document.querySelector("#respuestas");
    

    if(contraseña == SegContraseña ){
      respuestas.innerHTML=' <h3>contraseña  correcta</h3>';
      respuestas.style.color = 'green';
      
    }else {
      respuestas.innerHTML = ' <h3>contraseña incorrecta, Vuelve a intentarlo</h3>';
      respuestas.style.color = 'red';
    }

}
var boton = document.querySelector("#boton");
boton.addEventListener("submit",formulario)
