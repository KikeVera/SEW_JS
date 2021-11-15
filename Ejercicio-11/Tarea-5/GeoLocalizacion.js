

class GeoL{
	
	
  constructor (){
		this.a=1;
		this.b=2;
		
		
	
		
    }
	
	definirFuncion(){
		this.initMap=function initMap(){
			var centro = {lat: this.a, lng: this.b};
			var mapa = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:centro});
			
			var marcador = new google.maps.Marker({position:centro,map:mapa});
		}
		
	}
	
	definirDesplazar(){
		this.desplazar=function desplazar(){
			var centro = {lat: this.a, lng: this.b};
			var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:centro});
			
			var marcador = new google.maps.Marker({position:centro,map:mapaGeoposicionado});
			var infoWindow = new google.maps.InfoWindow;
			
		
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				infoWindow.setPosition(pos);
				infoWindow.setContent('Localización encontrada');
				infoWindow.open(mapaGeoposicionado);
				mapaGeoposicionado.setCenter(pos);
				}, function() {
				handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
				});
				} else {
         
			handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
				}
				}

		function handleLocationError(browserHasGeolocation, infoWindow, pos) {
			infoWindow.setPosition(pos);
			infoWindow.setContent(browserHasGeolocation ?
                              'Error: Ha fallado la geolocalizaciÃ³n' :
                              'Error: Su navegador no soporta geolocalizaciÃ³n');
			infoWindow.open(mapaGeoposicionado);
		
		}
	}
	
	
	defineCentro(c1,c2){
		this.a=c1;
		this.b=c2;
	}
	
	

	

	
		
	
}






