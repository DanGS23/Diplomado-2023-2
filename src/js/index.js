$(document).ready(function() {
    // Cuando se hace clic en un enlace dentro del menú
    $(".menu a").click(function(event) {
      // Evita que el enlace redireccione a una nueva página
      event.preventDefault(); 
  
      var url = $(this).data("url"); // Obtiene la URL asociada al enlace clicado
      if (url) {
        // Realiza una solicitud AJAX para obtener el contenido de la URL
        $.ajax({
          url: url,
          method: "GET",
          success: function(data) {
            $("article").html(data); // Reemplaza el contenido del elemento <article> con el contenido obtenido
          },
          error: function() {
            alert("Error al cargar el contenido."); // Muestra una alerta en caso de error en la solicitud AJAX
          }
        });
      }
    });
  });

  // Graficas para hotel y habitaciones
