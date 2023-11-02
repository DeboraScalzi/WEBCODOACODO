//Comentarios creados para la sección de recomendaciones
comentarios = ['¡Muy recomendadas! La ubicación es perfecta para los amantes de la naturaleza como yo. Disfruté de hermosas caminatas por los senderos cercanos y acogedoras noches alrededor de la fogata. Las cabañas estaban impecablemente limpias y equipadas con todo lo que necesitaba. Definitivamente volveré', '¡Increíble experiencia! Las cabañas ofrecen un acceso conveniente a muchas actividades emocionantes al aire libre. Pasé mis días haciendo senderismo y explorando las montañas cercanas. La cabaña en sí era acogedora y equipada con comodidades modernas. ¡Perfecta combinación de aventura y comodidad!','Qué lugar tan encantador para una escapada relajante. Las cabañas estaban impecablemente limpias y ofrecían una tranquilidad absoluta. Disfruté de mi café matutino en el comedor con vistas impresionantes y me relajé en la ducha por las noches. Sin duda, fue la escapada perfecta para recargar energías','Estas cabañas son ideales para aquellos que buscan un refugio tranquilo después de un largo día de trabajo. La conexión Wi-Fi era excelente y la ubicación apartada me permitió concentrarme en mis tareas.¡Definitivamente regresaré en mi próximo viaje de negocios!']

//Uso de la API 'jsonplaceholder' en la página 'hospedaje.html'
let url = 'https://jsonplaceholder.typicode.com/users'

for(let i=0;i<4;i++){
    fetch(url)
    .then(response => response.json())    
        .then(data =>{
            console.log(data)
            document.getElementById(`recomendaciones${i}`).innerHTML = `<b>${data[i].name}</b><br>${data[i].email}<p>${comentarios[i]}</p>`
        })
        .catch(error => {
            console.log("Ocurrió un error", error)
            document.getElementById("recomendaciones").textContent = `Ocurrió un error ${error}`
        })
}
