class GeoL{
	
	
  constructor (){
	
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
		this.show=false;
		
		
		
    }
	
	
	
	
    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
   
    mostrar(){
        if(!this.show){
			var datos='<ul>'; 
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
	
	
	
	


	
	
		
	
}






