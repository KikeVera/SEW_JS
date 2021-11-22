class TiempoJS{ 
	
	
	constructor (){
		this.codigoPais="ES"
		this.unidades = "&units=metric";
		this.idioma = "&lang=es";
		this.apikey="420f7478cd524a6600c748a1158f4cea";
		this.urlOviedo="http://api.openweathermap.org/data/2.5/weather?q=" + "Oviedo" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.urlCoviella="http://api.openweathermap.org/data/2.5/weather?q=" + "Coviella" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.urlBurgos="http://api.openweathermap.org/data/2.5/weather?q=" + "Burgos" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.urlPamplona="http://api.openweathermap.org/data/2.5/weather?q=" + "Pamplona" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.urlMadrid="http://api.openweathermap.org/data/2.5/weather?q=" + "Madrid" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		
		
		
    }
	
	cargarDatosOviedo(){
		
		$.ajax({
            dataType: "json",
            url: this.urlOviedo,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+datos.weather['0'].icon+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + datos.name + "</li>";
					stringDatos += "<li>País: " + datos.sys.country + "</li>";
                    stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
					stringDatos += "<li>Tiempo: " + datos.weather['0'].main + "</li>";
					stringDatos += "<li>Descripccion: " + datos.weather['0'].description + "</li>";
                    stringDatos += "<li>Temperatura: " + datos.main.temp + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " ºº</li>";
                    stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *'1000').toLocaleDateString() + "</li>";
                    stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                     stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    
                    $("section:eq(0)").append(stringDatos);
            },
            error:function(){
				$("section:eq(0)").append(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	cargarDatosCoviella(){
		
		$.ajax({
            dataType: "json",
            url: this.urlCoviella,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+datos.weather['0'].icon+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + datos.name + "</li>";
					stringDatos += "<li>País: " + datos.sys.country + "</li>";
                    stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
					stringDatos += "<li>Tiempo: " + datos.weather['0'].main + "</li>";
					stringDatos += "<li>Descripccion: " + datos.weather['0'].description + "</li>";
                    stringDatos += "<li>Temperatura: " + datos.main.temp + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " ºº</li>";
                    stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *'1000').toLocaleDateString() + "</li>";
                    stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                     stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    
                    $("section:eq(1)").append(stringDatos);
            },
            error:function(){
				$("section:eq(1)").append(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	cargarDatosBurgos(){
		
		$.ajax({
            dataType: "json",
            url: this.urlBurgos,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+datos.weather['0'].icon+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + datos.name + "</li>";
					stringDatos += "<li>País: " + datos.sys.country + "</li>";
                    stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
					stringDatos += "<li>Tiempo: " + datos.weather['0'].main + "</li>";
					stringDatos += "<li>Descripccion: " + datos.weather['0'].description + "</li>";
                    stringDatos += "<li>Temperatura: " + datos.main.temp + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " ºº</li>";
                    stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *'1000').toLocaleDateString() + "</li>";
                    stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                     stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    
                    $("section:eq(2)").append(stringDatos);
            },
            error:function(){
				$("section:eq(2)").append(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	cargarDatosPamplona(){
		
		$.ajax({
            dataType: "json",
            url: this.urlPamplona,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+datos.weather['0'].icon+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + datos.name + "</li>";
					stringDatos += "<li>País: " + datos.sys.country + "</li>";
                    stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
					stringDatos += "<li>Tiempo: " + datos.weather['0'].main + "</li>";
					stringDatos += "<li>Descripccion: " + datos.weather['0'].description + "</li>";
                    stringDatos += "<li>Temperatura: " + datos.main.temp + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " ºº</li>";
                    stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *'1000').toLocaleDateString() + "</li>";
                    stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                     stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    
                    $("section:eq(3)").append(stringDatos);
            },
            error:function(){
				$("section:eq(3)").append(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	cargarDatosMadrid(){
		
		$.ajax({
            dataType: "json",
            url: this.urlMadrid,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+datos.weather['0'].icon+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + datos.name + "</li>";
					stringDatos += "<li>País: " + datos.sys.country + "</li>";
                    stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
					stringDatos += "<li>Tiempo: " + datos.weather['0'].main + "</li>";
					stringDatos += "<li>Descripccion: " + datos.weather['0'].description + "</li>";
                    stringDatos += "<li>Temperatura: " + datos.main.temp + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " ºº</li>";
                    stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *'1000').toLocaleDateString() + "</li>";
                    stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                     stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    
                    $("section:eq(4)").append(stringDatos);
            },
            error:function(){
				$("section:eq(4)").append(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	
	
	
	
	
		
	
}
