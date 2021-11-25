class MapaKML{
	
	
	constructor (){
		
		

    }
	
	definirFuncion(){
		this.initMap=function initMap(){
			var centro = {lat: this.a, lng: this.b};
			var mapa = new google.maps.Map(document.getElementsByTagName('main')[0],{zoom: 8,center:centro});
			
			
		}
		
	}
	
	definirMapaKML(){
		this.initMapKML=function initMapKML(archivo){
			var centro = {lat: this.a, lng: this.b};
			var mapa = new google.maps.Map(document.getElementsByTagName('main')[0],{zoom: 8,center:centro});
			
			
			
			var lector = new FileReader();
			lector.onload = function (evento) {
				var xmlDoc = $.parseXML(lector.result),
				$xml = $(xmlDoc),
				$options = $xml.find("Placemark");
			
				$.each($options, function() {
					var name=$(this).children("name").text();
					var leerCoordenadas=$(this).children("Point").children("coordinates").text();
					var coordenadas = { lat: Number.parseFloat(leerCoordenadas.split(",")[1]), lng: Number.parseFloat(leerCoordenadas.split(",")[0])};
					
					var marker = new google.maps.Marker({
						  position: coordenadas,
						   map: mapa,
						  label: {
							text: name,
							color: "#C70E20",
							fontWeight: "bold"
						}
					});

					
					
					
				});
				
				
          
				
			}      
			lector.readAsText(archivo);
			
			

			
			

			

		}
		
	}
	
	


	
	
	
	
	
	
	leerArchivo(files){
		var archivo = files[0];
		this.initMapKML(archivo);
		
		
	
	}
	
	defineCentro(c1,c2){
		this.a=c1;
		this.b=c2;
	}

	

	
	
	
		
	
}






