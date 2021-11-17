

class GeoL{
	
	
  constructor (){
		
		
	
		
    }
	
	definirFuncion(){
		this.initMap=function initMap(){
			
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
				var centro = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				var mapa = new google.maps.Map(document.getElementsByTagName("main")[0],{zoom: 8,center:centro});
				var marcador = new google.maps.Marker({position:centro,map:mapa});
				var infoWindow = new google.maps.InfoWindow;
				

				infoWindow.setPosition(centro);
				infoWindow.setContent('Localización encontrada');
				infoWindow.open(mapa);
				
			
				},function() {
					var centro = {
						lat: 0,
						lng: 0
					};
					var mapa = new google.maps.Map(document.getElementsByTagName("main")[0],{zoom: 8,center:centro});
					var infoWindow = new google.maps.InfoWindow;
				

					infoWindow.setPosition(centro);
					infoWindow.setContent('No se ha podido obtener localizacion');
					infoWindow.open(mapa);
				});
				} 
			
			
		
			
		
			
		
		}
		
	}
	
	
	
	
	

	

	
		
	
}






