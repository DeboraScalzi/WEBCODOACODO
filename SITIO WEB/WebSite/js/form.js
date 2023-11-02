//Validación del formulario
function validar(){
    let checkIn = document.getElementById("checkIn").value;
    let checkOut = document.getElementById("checkOut").value;
    let adultos = document.getElementById("adultos").value;
    let menores = document.getElementById("menores").value;
    let nombre = document.getElementById("firstname").value;
    let apellido = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    if (checkIn == "" || checkOut == "" || adultos == "" || menores == "" || nombre == "" || apellido == "" || email == "" || telefono == ""){
        document.getElementById("aviso").innerHTML= `<span class="rojo"> Faltan completar campos </span>`
    }
    else{
        document.getElementById("aviso").innerHTML= `<p><h3>Por favor, verifique los datos ingresados antes de confirmar la reserva</h3><br>
        <b>Check In:</b> ${checkIn} <br><br>
        <b>Check Out:</b> ${checkOut} <br><br>
        <b>Cantidad de adultos:</b> ${adultos} <br><br>
        <b>Cantidad de menores:</b> ${menores} <br><br>
        <b>Nombre/s:</b> ${nombre} <br><br>
        <b>Apellido/s:</b> ${apellido} <br><br>
        <b>Email:</b> ${email} <br><br>
        <b>Teléfono:</b> ${telefono} <br><br>
        <button class="button" onclick="confirmar()">Confirmar</button></p>`
    }
}

function confirmar(){
    const archivoDestino = "show_data.html"
    window.location.href = archivoDestino
}
