class Lector{
	
	
	constructor (){
		 
		

    }
	
	
	
	leerArchivo(files){
		
		for (var i = 0; i < files.length; i++) {
		
			var archivo = files[i];
			var datos="";
			datos+="Nombre del archivo: " + archivo.name+  "\n";
			datos+="Tamaño del archivo: " + archivo.size + " bytes\n";
			datos+="Tipo del archivo: " + archivo.type+  "\n";
			datos+="Fecha de la última modificación: " + archivo.lastModifiedDate+  "\n";
			
			document.getElementsByTagName("textarea")[0].innerHTML=document.getElementsByTagName("textarea")[0].innerHTML+datos;
		
			var tipoTexto = /text.*/;
		
			if (archivo.type.match(tipoTexto)) 
			{
				var lector = new FileReader();
				lector.onload = function (evento) {
          
				document.getElementsByTagName("textarea")[1].innerHTML = document.getElementsByTagName("textarea")[1].innerHTML+lector.result+"\n";
			}      
			lector.readAsText(archivo);
			}
			else {
				document.getElementsByTagName("textarea")[1].innerHTML =document.getElementsByTagName("textarea")[1].innerHTML+ "\n Error : no se puede leer el contenido del archivo";
			}     
		}
		
	}
	
	

	

	
	
	
		
	
}






