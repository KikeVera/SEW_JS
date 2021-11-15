class TiempoJS{ 
	
	
	constructor (){
		this.codigoPais="ES"
		this.unidades = "&units=metric";
		this.idioma = "&lang=es";
		this.tipo="&mode=xml";
		this.apikey="420f7478cd524a6600c748a1158f4cea";
		this.urlOviedo="http://api.openweathermap.org/data/2.5/weather?q=" + "Oviedo" + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.urlCoviella="http://api.openweathermap.org/data/2.5/weather?q=" + "Coviella" + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.urlBurgos="http://api.openweathermap.org/data/2.5/weather?q=" + "Burgos" + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.urlPamplona="http://api.openweathermap.org/data/2.5/weather?q=" + "Pamplona"+ this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.urlMadrid="http://api.openweathermap.org/data/2.5/weather?q=" + "Madrid" + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
		
		
    }
	
	cargarDatosOviedo(){
		
		$.ajax({
            dataType: "xml",
            url: this.urlOviedo,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+$('weather',datos).attr("icon")+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + $('city',datos).attr("name") + "</li>";
					stringDatos += "<li>País: " + $('country',datos).text()+ "</li>";
                    stringDatos += "<li>Latitud: " + $('coord',datos).attr("lon"); + " grados</li>";
                    stringDatos += "<li>Longitud: " + $('coord',datos).attr("lat") + " grados</li>";
					stringDatos += "<li>Descripccion: " + $('weather',datos).attr("value") + "</li>";
                    stringDatos += "<li>Temperatura: " + $('temperature',datos).attr("value") + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + $('temperature',datos).attr("max") + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + $('temperature',datos).attr("min") + " ºº</li>";
                    stringDatos += "<li>Presión: " + $('pressure',datos).attr("value") + " milibares</li>";
                    stringDatos += "<li>Humedad: " + $('humidity',datos).attr("value") + " %</li>";
                    stringDatos += "<li>Amanece a las: " +  (new Date(Date.parse( $('sun',datos).attr("rise"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Oscurece a las: " + (new Date(Date.parse( $('sun',datos).attr("set"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Dirección del viento: " + $('direction',datos).attr("value") + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + $('speed',datos).attr("value") + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + (new Date(Date.parse($('lastupdate',datos).attr("value"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + (new Date(Date.parse($('lastupdate',datos).attr("value"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleDateString("es-ES") + "</li>";
                    stringDatos += "<li>Visibilidad: " + $('visibility',datos).attr("value") + " metros</li>";
                    stringDatos += "<li>Nubosidad: " + $('clouds',datos).attr("value") + " %</li></ul>";
					
					 
                    
                    $("section:eq(0)").append(stringDatos);
            },
            error:function(){
				$("section:eq(0)").append(" No se puede obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	cargarDatosCoviella(){
		
		$.ajax({
            dataType: "xml",
            url: this.urlCoviella,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+$('weather',datos).attr("icon")+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + $('city',datos).attr("name") + "</li>";
					stringDatos += "<li>País: " + $('country',datos).text()+ "</li>";
                    stringDatos += "<li>Latitud: " + $('coord',datos).attr("lon"); + " grados</li>";
                    stringDatos += "<li>Longitud: " + $('coord',datos).attr("lat") + " grados</li>";
					stringDatos += "<li>Descripccion: " + $('weather',datos).attr("value") + "</li>";
                    stringDatos += "<li>Temperatura: " + $('temperature',datos).attr("value") + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + $('temperature',datos).attr("max") + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + $('temperature',datos).attr("min") + " ºº</li>";
                    stringDatos += "<li>Presión: " + $('pressure',datos).attr("value") + " milibares</li>";
                    stringDatos += "<li>Humedad: " + $('humidity',datos).attr("value") + " %</li>";
                    stringDatos += "<li>Amanece a las: " +  (new Date(Date.parse( $('sun',datos).attr("rise"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Oscurece a las: " + (new Date(Date.parse( $('sun',datos).attr("set"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Dirección del viento: " + $('direction',datos).attr("value") + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + $('speed',datos).attr("value") + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + (new Date(Date.parse($('lastupdate',datos).attr("value"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + (new Date(Date.parse($('lastupdate',datos).attr("value"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleDateString("es-ES") + "</li>";
                    stringDatos += "<li>Visibilidad: " + $('visibility',datos).attr("value") + " metros</li>";
                    stringDatos += "<li>Nubosidad: " + $('clouds',datos).attr("value") + " %</li></ul>";
                    
                    $("section:eq(1)").append(stringDatos);
            },
            error:function(){
				$("section:eq(1)").append(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	cargarDatosBurgos(){
		
		$.ajax({
           dataType: "xml",
            url: this.urlBurgos,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+$('weather',datos).attr("icon")+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + $('city',datos).attr("name") + "</li>";
					stringDatos += "<li>País: " + $('country',datos).text()+ "</li>";
                    stringDatos += "<li>Latitud: " + $('coord',datos).attr("lon"); + " grados</li>";
                    stringDatos += "<li>Longitud: " + $('coord',datos).attr("lat") + " grados</li>";
					stringDatos += "<li>Descripccion: " + $('weather',datos).attr("value") + "</li>";
                    stringDatos += "<li>Temperatura: " + $('temperature',datos).attr("value") + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + $('temperature',datos).attr("max") + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + $('temperature',datos).attr("min") + " ºº</li>";
                    stringDatos += "<li>Presión: " + $('pressure',datos).attr("value") + " milibares</li>";
                    stringDatos += "<li>Humedad: " + $('humidity',datos).attr("value") + " %</li>";
                    stringDatos += "<li>Amanece a las: " +  (new Date(Date.parse( $('sun',datos).attr("rise"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Oscurece a las: " + (new Date(Date.parse( $('sun',datos).attr("set"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Dirección del viento: " + $('direction',datos).attr("value") + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + $('speed',datos).attr("value") + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + (new Date(Date.parse($('lastupdate',datos).attr("value"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + (new Date(Date.parse($('lastupdate',datos).attr("value"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleDateString("es-ES") + "</li>";
                    stringDatos += "<li>Visibilidad: " + $('visibility',datos).attr("value") + " metros</li>";
                    stringDatos += "<li>Nubosidad: " + $('clouds',datos).attr("value") + " %</li></ul>";
                    
                    $("section:eq(2)").append(stringDatos);
            },
            error:function(){
				$("section:eq(2)").append(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	cargarDatosPamplona(){
		
		$.ajax({
            dataType: "xml",
            url: this.urlPamplona,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+$('weather',datos).attr("icon")+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + $('city',datos).attr("name") + "</li>";
					stringDatos += "<li>País: " + $('country',datos).text()+ "</li>";
                    stringDatos += "<li>Latitud: " + $('coord',datos).attr("lon"); + " grados</li>";
                    stringDatos += "<li>Longitud: " + $('coord',datos).attr("lat") + " grados</li>";
					stringDatos += "<li>Descripccion: " + $('weather',datos).attr("value") + "</li>";
                    stringDatos += "<li>Temperatura: " + $('temperature',datos).attr("value") + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + $('temperature',datos).attr("max") + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + $('temperature',datos).attr("min") + " ºº</li>";
                    stringDatos += "<li>Presión: " + $('pressure',datos).attr("value") + " milibares</li>";
                    stringDatos += "<li>Humedad: " + $('humidity',datos).attr("value") + " %</li>";
                    stringDatos += "<li>Amanece a las: " +  (new Date(Date.parse( $('sun',datos).attr("rise"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Oscurece a las: " + (new Date(Date.parse( $('sun',datos).attr("set"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Dirección del viento: " + $('direction',datos).attr("value") + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + $('speed',datos).attr("value") + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + (new Date(Date.parse($('lastupdate',datos).attr("value"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + (new Date(Date.parse($('lastupdate',datos).attr("value"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleDateString("es-ES") + "</li>";
                    stringDatos += "<li>Visibilidad: " + $('visibility',datos).attr("value") + " metros</li>";
                    stringDatos += "<li>Nubosidad: " + $('clouds',datos).attr("value") + " %</li></ul>";
                    
                    $("section:eq(3)").append(stringDatos);
            },
            error:function(){
				$("section:eq(3)").append(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	cargarDatosMadrid(){
		
		$.ajax({
            dataType: "xml",
            url: this.urlMadrid,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+$('weather',datos).attr("icon")+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + $('city',datos).attr("name") + "</li>";
					stringDatos += "<li>País: " + $('country',datos).text()+ "</li>";
                    stringDatos += "<li>Latitud: " + $('coord',datos).attr("lon"); + " grados</li>";
                    stringDatos += "<li>Longitud: " + $('coord',datos).attr("lat") + " grados</li>";
					stringDatos += "<li>Descripccion: " + $('weather',datos).attr("value") + "</li>";
                    stringDatos += "<li>Temperatura: " + $('temperature',datos).attr("value") + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + $('temperature',datos).attr("max") + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + $('temperature',datos).attr("min") + " ºº</li>";
                    stringDatos += "<li>Presión: " + $('pressure',datos).attr("value") + " milibares</li>";
                    stringDatos += "<li>Humedad: " + $('humidity',datos).attr("value") + " %</li>";
                    stringDatos += "<li>Amanece a las: " +  (new Date(Date.parse( $('sun',datos).attr("rise"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Oscurece a las: " + (new Date(Date.parse( $('sun',datos).attr("set"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Dirección del viento: " + $('direction',datos).attr("value") + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + $('speed',datos).attr("value") + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + (new Date(Date.parse($('lastupdate',datos).attr("value"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleTimeString("es-ES") + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + (new Date(Date.parse($('lastupdate',datos).attr("value"))-new Date().getTimezoneOffset() * '60' * '1000')).toLocaleDateString("es-ES") + "</li>";
                    stringDatos += "<li>Visibilidad: " + $('visibility',datos).attr("value") + " metros</li>";
                    stringDatos += "<li>Nubosidad: " + $('clouds',datos).attr("value") + " %</li></ul>";
                    
                    $("section:eq(4)").append(stringDatos);
            },
            error:function(){
				$("section:eq(4)").append(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	
	
	
		
	
}
