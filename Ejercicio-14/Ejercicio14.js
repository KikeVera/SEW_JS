class Contador{
	
	
	constructor (){
		
		

    }
	
	
	
	definirFuncion(){
		this.initFuncion=function initFuncion(archivo){
			
			
			var lector = new FileReader();
			lector.onload = function (evento) {
				var palabras=lector.result.split(" ");
				for (var i = 0; i < palabras.length; i++) {
					if(palabras[i].length>3){
						if (localStorage.getItem(palabras[i].toLowerCase() )===null) {
							localStorage.setItem(palabras[i].toLowerCase() , 1);
						
						} else {
							var valor=Number.parseInt(localStorage.getItem(palabras[i].toLowerCase() ))+1;
							localStorage.setItem(palabras[i].toLowerCase() , valor);
						}			
					
					}
				}
				
				
				
				
          
				
			}      
			lector.readAsText(archivo);
			
			
			
			
			

			

		}
		
	}
	
	
	
	mostrar(){
		var palabras=[];
		
		for (var i = 0; i < localStorage.length; i++){
			if(palabras.length<10){
				palabras.push(localStorage.key(i));
				
			}
			
			else{
				var minimo=Number.MAX_VALUE;
				var pos=palabras.length+1;
				for(var j=0; j<palabras.length;j++){
					if(Number.parseInt(localStorage.getItem(palabras[j]))<	minimo){
						minimo=Number.parseInt(localStorage.getItem(palabras[j]));
						pos=j;
					}
				}
				
				if(minimo<	Number.parseInt(localStorage.getItem(localStorage.key(i)))){
						palabras[pos]=localStorage.key(i);
						
				}
			
			}
			
		}
		
		
	
		var maximo=0;
		for(var i=0; i<palabras.length;i++){
			if(Number.parseInt(localStorage.getItem(palabras[i]))>maximo){
				maximo=Number.parseInt(localStorage.getItem(palabras[i]));
				
			}
			
			
		}
		
		
		
		if(maximo!=0){
			palabras=this.ordenar(palabras);
			var canvas = document.getElementsByTagName('canvas')[0];
			var canvas1 = canvas.getContext('2d');
			canvas1.clearRect(0, 0, canvas.width, canvas.height);

			for(var i=0; i<palabras.length;i++){
				
				canvas1.beginPath();
		
		
				canvas1.strokeStyle = "rgba(255, 0, 0, 1)";
				canvas1.moveTo(80, 20+10*i);
				canvas1.lineTo(80+120*(Number.parseFloat(localStorage.getItem(palabras[i])/maximo)), 20+10*i);
		
				canvas1.closePath();
				canvas1.stroke();
		
				canvas1.beginPath();
				canvas1.strokeStyle = "rgba(0, 0, 255, 1)";
				canvas1.font = ' Helvetica sans-serif';
				canvas1.strokeText(palabras[i], 5, 20+10*i);
				canvas1.strokeText(localStorage.getItem(palabras[i]), 210, 20+10*i);
		
				canvas1.closePath();
				canvas1.stroke();
			}
		
		}

	}
	
	ordenar(palabras){
		
		for(var i=0; i<palabras.length;i++){
			var imin=i;
			for(var j=i+1; j<palabras.length;j++){
				if(Number.parseInt(localStorage.getItem(palabras[j]))>Number.parseInt(localStorage.getItem(palabras[imin]))){
					imin=j;
				}
			}
			
			var aux=palabras[i];
			palabras[i]=palabras[imin];
			palabras[imin]=aux;
			
			
		}
		
		return palabras;
		
	}

	
	limpiar(){
		localStorage.clear();
		
		
	}
	
	
	
	leerArchivo(files){
		for (var i = 0; i < files.length; i++) {
			this.initFuncion(files[i]);
		}
		
		
	
        
		
		
		
	}
	
	

	

	
	
	
		
	
}






