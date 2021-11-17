

class GeoL{
	
	
  constructor (){
		
		
		
	
		
    }
	
	definirFuncion(){
		this.initMap=function initMap(){
			var centro = {lat: this.a, lng: this.b};
			var mapa = new google.maps.Map(document.getElementsByTagName("main")[0],{zoom: 8,center:centro});
			
			var marcador = new google.maps.Marker({position:centro,map:mapa});
		}
		
	}
	
	definirDesplazar(){
		
		this.desplazar=function desplazar(){
			var centro = {lat: this.a, lng: this.b};
			var mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName("main")[0],{zoom: 8,center:centro});
			
			var marcador = new google.maps.Marker({position:centro,map:mapaGeoposicionado});
			var infoWindow = new google.maps.InfoWindow;
			
			
			$.ajax({
			dataType: "json",
			url: "https://maps.googleapis.com/maps/api/geocode/json?address="+document.getElementById("direccion").value+"CA&key=AIzaSyAoAdfDnwfjlipFtRhfrTS8M0UFdt8UxHY",
            method: 'GET',
            success: function(datos){
				
				if(datos.status=="OK"){
					
					var x=datos.results[0].geometry.location.lat;
					var y=datos.results[0].geometry.location.lng;
					var address = datos.results[0].formatted_address;
					
					
			
		
		
					var pos = {
						lat: x,
						lng: y
					};
					
					

					infoWindow.setPosition(pos);
					infoWindow.setContent('Localización encontrada: '+address);
					infoWindow.open(mapaGeoposicionado);
					mapaGeoposicionado.setCenter(pos);
					
			}
			
			else{
				infoWindow.setPosition(centro);
				
				infoWindow.setContent('Localizacion no encontrada, se volverá automaticamente al centro');
				infoWindow.open(mapaGeoposicionado);
				mapaGeoposicionado.setCenter(centro);
				
				
			}
				
                    
            },
			
			error:function(){
				
				
			}
           
               
        });
			
			
			
			
		}	
	}
	
	estableceDireccion(){
		
		
		
	}
	
	desplazarA(){
		this.desplazar();
	}
	
	
	defineCentro(c1,c2){
		this.a=c1;
		this.b=c2;
	}
	
	

	

	
		
	
}






