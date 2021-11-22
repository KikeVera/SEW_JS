class GeoL{
	
	
  constructor (){
	
         navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
		this.show=false;
		
		
		
    }
	
	
	
	
    getPosicion(posicion){
		this.mensaje = "Se ha realizado correctamente la peticion de geolocalización";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
	
	 verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la peticion de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }
   
    mostrar(){
        if(!this.show){
			var datos='<p>'+this.mensaje+'</p><ul>'; 
			datos+='<li>Longitud: '+this.longitud +' grados</li>'; 
			datos+='<li>Latitud: '+this.latitud +' grados</li>';
			datos+='<li>Precisión de la latitud y longitud: '+ this.precision +' metros</li>';
			datos+='<li>Altitud: '+ this.altitud +' metros</li>';
			datos+='<li>Precisión de la altitud: '+ this.precisionAltitud +' metros</li>'; 
			datos+='<li>Rumbo: '+ this.rumbo +' grados</li>'; 
			datos+='<li>Velocidad: '+ this.velocidad +' metros/segundo</li>';
			datos+='</ul>';
			document.getElementsByTagName("section")[0].innerHTML = document.getElementsByTagName("section")[0].innerHTML+ datos;
			this.show=true;
        }
    }
	
	mostrarMapa(){
        
        
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
       
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        
        var centro = "center=" + this.latitud + "," + this.longitud;
        
        var zoom ="&zoom=15";
       
        var tamaño= "&size=800x600";
        var tipo="&maptype=terrain";
        var marcador = "&markers=color:blue%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        
        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor +tipo+ apiKey;
       document.getElementsByTagName("section")[1].innerHTML = document.getElementsByTagName("section")[1].innerHTML+ "<img alt=\"mapa\" src='"+this.imagenMapa+"'/>";
    }
	
	
	
	


	
	
		
	
}






