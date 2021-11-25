class MapaGeoJSON{
	
	
	constructor (){
		
		

    }
	
	definirFuncion(){
		this.initMap=function initMap(){
			var centro = {lat: this.a, lng: this.b};
			var mapa = new google.maps.Map(document.getElementsByTagName('main')[0],{zoom: 8,center:centro});
			
			
		}
		
	}
	
	definirMapaGeoJSON(){
		this.initMapGeoJSON=function initMapGeoJSON(archivo){
			var centro = {lat: this.a, lng: this.b};
			var mapa = new google.maps.Map(document.getElementsByTagName('main')[0],{zoom: 8,center:centro});
			
		
		
			var lector = new FileReader();
			lector.onload = function (evento) {
				var resultado= lector.result;
				var json=JSON.parse(resultado);
				
				var i;
				for (i=0;i<json.features.length;i++) { 
					var name=json.features[i].properties.name;
					var coordenadas = 
						{ lat: Number.parseFloat(json.features[i].geometry.coordinates.toString().split(",")[1]), 
						  lng: Number.parseFloat(json.features[i].geometry.coordinates.toString().split(",")[0]) };
						
						

					
					
					var marker = new google.maps.Marker({
						  position: coordenadas,
						  map: mapa,
						  label: {
							text: name,
							color: "#C70E20",
							fontWeight: "bold"
						}
					});
				}
				
				

				
				
				
          
				
			}      
			lector.readAsText(archivo);
			
			

			
			

			

		}
		
	}
	
	


	
	
	
	
	
	
	leerArchivo(files){
		var archivo = files[0];
		this.initMapGeoJSON(archivo);
		
	
		
		
		
  
        
        
		
		
		
	}
	
	defineCentro(c1,c2){
		this.a=c1;
		this.b=c2;
	}

	

	
	
	
		
	
}






