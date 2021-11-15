

class GeoL{
	
	
  constructor (){
		
		this.a=0;
		this.b=0;
		
	
		
    }
	
	definirFuncion(){
		this.initMap=function initMap(){
			var centro = {lat: this.a, lng: this.b};
			var mapa = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:centro});
			var marcador = new google.maps.Marker({position:centro,map:mapa});
		}
		
	}
	
	defineCentro(c1,c2){
		this.a=c1;
		this.b=c2;
	}
	
	

	

	
		
	
}






