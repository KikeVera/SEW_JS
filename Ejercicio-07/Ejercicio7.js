class RasmusJS{
	
	
	constructor (){
       this.recorrer=false;
		
		
		
    }
	
	ocultarTitulos(){
		$("h3:first").hide();
		$("h3:eq(1)").hide();
	}
	
	
	mostrarTitulos(){
		$("h3:first").show();
		$("h3:eq(1)").show();
	}
	
	codificar(){
		
		$("p:eq(0)").html("<p>43924dd78738d2af7ce01a5f3bf6de66</p>");
		$("p:eq(2)").html("<p>e879d0d9acb48aaa647eff1ce79dd734</p>");
		
	}
	
	descodificar(){
		$("p:eq(0)").html("<p>PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web​ Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 1994​ En la actualidad, la implementación de referencia de PHP es producida por The PHP Group.</p>");
		$("p:eq(2)").html("<p>Rasmus Lerdorf (nacido el 22 de noviembre de 1968) es un programador danés-canadiense. Fue coautor e inspiró el lenguaje de scripting PHP, también fue autor de las dos primeras versiones del lenguaje y participó en el desarrollo de versiones posteriores dirigidas por un grupo de desarrolladores que incluía a Jim Winstead (quien más tarde creó blogs), Stig Bakken, Shane Caraveo , Andi Gutmans y Zeev Suraski. Continúa contribuyendo al proyecto.</p>");
		
	}
	
	añadirBreveHistoria(){
		
		
		var titulo = "<h3>Breve historia PHP</h3>";
		
		
		var parrafo = "<p>Fue originalmente diseñado en Perl, con base en la escritura de un grupo de CGI binarios escritos en el lenguaje C. El 8 de junio de 1995 fue publicado \"Personal Home Page Tools\" después de que Lerdorf lo combinara con su propio Form Interpreter para crear PHP/FI.</p>";
		
		$("table").after(titulo);
		$("h3:eq(4)").after(parrafo);
		
		
	}
	
	eliminarBreveHistoria(){
		$("h3:eq(4)").remove();
		$("p:eq(3)").remove();
		
	}

	recorrido(){
		if(!this.recorrer){
			var html = "<h2>Recorrido elementos</h2>";
			html=html+"<ul>";
			var elementos=$("*", document.body);
			for(var i =0;i< elementos.length; i++){
				var etiquetaPadre = $(elementos[i]).parent().get(0).tagName;
				html=html+"<li>"+"Etiqueta padre : ("  + etiquetaPadre + ") elemento : (" + $(elementos[i]).get(0).tagName +")</li>"
			}
			html=html+"</ul>";
			this.recorrer=true;
		}
		
		$("main").append(html);
		
	}
	
	sumaFilasYColumnas(){
		var rowCount = $("table tr").length;
		var colCount = $("thead th").length;
		document.getElementById("ans").value ="Filas: "+rowCount+" Columnas: "+colCount;
		
	}
	

	
	
		
	
}