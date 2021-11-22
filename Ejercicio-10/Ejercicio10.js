class PetroleoJS{ 
	
	
	constructor (){
		
		this.symbols = "";
		this.apikey="kf04g0ueyek9klm1fv1hw10u9g83r2xy3gvd8m7gagx6g11s9exfx711u7k2";
		this.start_date="";
		this.end_date="";
		this.base="EUR";
		this.zona="";
		
    
		
		
		
    }
	
	cargarDatos(){
		this.start_date=document.getElementById("start").value;
		this.end_date=document.getElementById("end").value;
		this.base=document.getElementById("moneda").value;
		this.zona=document.getElementById("zona").value;
		if(this.zona=="América"){
			this.symbols="WTIOIL"
		}
		
		else if(this.zona=="Europa"){
			this.symbols="BRENTOIL"

		}
		
		console.log("https://commodities-api.com/api/timeseries?access_key="+this.apikey+"&start_date="+this.start_date+"&end_date="+this.end_date+"&base="+this.base+"&symbols="+this.symbols);
		$.ajax({
            dataType: "json",
            url: "https://commodities-api.com/api/timeseries?access_key="+this.apikey+"&start_date="+this.start_date+"&end_date="+this.end_date+"&base="+this.base+"&symbols="+this.symbols,
            success: function(datos){
				console.log(datos.data);
				if(datos.data.success){
					var table="<table><thead><tr><th>Fecha</th><th>Precio</th></tr></thead>"
					table+="<tbody>";
					
					
					for(const x in datos.data.rates ){
						table+="<tr>"
							
						table+="<td>"+x+"</td>"
						
						if(datos.data.rates[x].BRENTOIL!==undefined){
							table+="<td>"+Math.round(Number(1/datos.data.rates[x].BRENTOIL)*100)/100+" "+datos.data.base+"/barril</td>"
						}
						else if(datos.data.rates[x].WTIOIL!==undefined){
							table+="<td>"+Math.round(Number(1/datos.data.rates[x].WTIOIL)*100)/100+" "+datos.data.base+"/barril</td>"
						}
							
						
						table+="</tr>"
					}
					
					
					
					
					
					
					table+="</tbody>";
					table+="</table>";
					document.getElementsByTagName("section")[0].innerHTML="<h2>Precio del petróleo</h2><p>Datos del precio del petróleo en la zona, fecha y unidad monetaria seleccionada</p>"+table
					
					   
				}
				
				else{
					$("section").append("<p>Imposible obtener los datos, el formulario no tiene datos correctos</p>");
				}
            },
            error:function(){
				$("section").append(" <p>No se puede obtener JSON</p>");
			}
               
        });
		
		
	}
	
	
	
	
	
	
	
	
		
	
}
