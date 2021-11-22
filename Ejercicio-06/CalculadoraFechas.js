class CalculadoraRPN{
	
	
	constructor (){
       this.pantalla=""; 
	   this.pila=[];
	   document.addEventListener('keydown', (event) => {
		const keyName = event.key;
		if(keyName=='0' || keyName=='1' || keyName=='2' || keyName=='3' || keyName=='4' || keyName=='5' || keyName=='6' || keyName=='7' || keyName=='8' || keyName=='9'){
			this.digito(Number(keyName));
		}

		else if(keyName=='b'){
				this.back();
			}
		else if(keyName=='e'){
				this.enter();
			}

	
	  });
	   
		
		
    }
	

	digito(x) {
		try { 
		
			this.pantalla=this.pantalla+Number(x).toString();
			document.getElementById("ans").value=this.pantalla;
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}
	
	decimal() {
		try { 
			this.pantalla=this.pantalla+".";
			document.getElementById("ans").value=this.pantalla;
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}

	enter(){
		
		var x;
		x= this.pantalla;
		if(x!=""){
			this.pila.push(x);
			this.pantalla="";
			document.getElementById("ans").value=this.pantalla;
		}
		
		this.escribePila();
	}
	 
	 borrar(){
		 this.pantalla="";
		 document.getElementById("ans").value=this.pantalla;
		 this.pila=[];
		 this.escribePila();
		 
	 }
	 
	cambiaSigno(){
		
		this.pantalla=-Number(this.pantalla);
		document.getElementById("ans").value=this.pantalla;
			
		
	}
	
	back(){
		this.pila.pop();
		this.escribePila();
	}
	
	sumar(){
		if(this.pila.length>=2){
			var x=Date(this.pila.pop());
			var y=Date(this.pila.pop());
		
			this.pila.push(y+x);
			this.escribePila();
		}
		
	}
	
	restar(){
		if(this.pila.length>=2){
			var x=this.pila.pop();
			var y=this.pila.pop();
		
			this.pila.push(y-x);
			this.escribePila();
		}
	}
	
	multiplicar(){
		if(this.pila.length>=2){
			var x=Number(this.pila.pop());
			var y=Number(this.pila.pop());
		
			this.pila.push(y*x);
			this.escribePila();
		}
		
	}
	
	dividir(){
		if(this.pila.length>=2){
			var x=Number(this.pila.pop());
			var y=Number(this.pila.pop());
		
			this.pila.push(y/x);
			this.escribePila();
		}
		
	}
	
	calcularFactorial(){
		
		if(this.pila.length>=1){
			var x;
			x=Number(this.pila.pop());
			x=Math.round(x);
			var i=x;
			while(i>'1'){
				i--;
				x=x*i;
			}
		
			this.pila.push(x);
			this.escribePila();
			
		}
	
		
	}
	
	calculaLogaritmo(){
		if(this.pila.length>=1){
			var x=Number(this.pila.pop());
			x=Math.log(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
		
	}
	
	
	calculaRaiz(){
		if(this.pila.length>=1){
			var x=Number(this.pila.pop());
			x=Math.sqrt(x);
			this.pila.push(x);
			this.escribePila();
			
		}
	}
	
	calcularCuadrado(){
		if(this.pila.length>=1){
			var x=Number(this.pila.pop());
			x=Math.pow(x,2);
			this.pila.push(x);
			this.escribePila();
			
		}
	}
	
	
	
	calculaSin(){
		if(this.pila.length>=1){
			var x=Number(this.pila.pop());
			x=Math.sin(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	
	calculaArcSin(){
		if(this.pila.length>=1){
			var x=Number(this.pila.pop());
			x=Math.asin(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	
	
	calculaCos(){
		if(this.pila.length>=1){
			var x=Number(this.pila.pop());
			x=Math.cos(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	
	calculaArcCos(){
		if(this.pila.length>=1){
			var x=Number(this.pila.pop());
			x=Math.acos(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	
	
	calculaTan(){
		if(this.pila.length>=1){
			var x=Number(this.pila.pop());
			x=Math.tan(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	
	calculaArcTan(){
		if(this.pila.length>=1){
			var x=Number(this.pila.pop());
			x=Math.atan(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	

	escribePila(){
		var i;
		i=this.pila.length;
		var representacion;
		representacion="";
		
		while(i>'0'){
		
		representacion=representacion+"Pila["+i+"] = "+this.pila[this.pila.length-i]+"\n";
		i--;
		}
		representacion=representacion+"";
		document.getElementsByTagName('textarea')[0].innerHTML=representacion;
	}
}


class CalculadoraFechas extends CalculadoraRPN{
	
	
	constructor (){
		super();
       this.año=""; 
	   this.mes=""; 
	   this.dia="";
	   this.selected="año";	 
	   this.calendario= new Map();
	   this.añadeFestivos();
	  
	   
	   
	  
		
		
    }
	

	digitoFecha(x) {
		try { 
			if(this.selected=="año"){
				this.año=this.año+Number(x).toString();
				document.getElementById("año").value=this.año;
			}
			if(this.selected=="mes"){
				this.mes=this.mes+Number(x).toString();
				document.getElementById("mes").value=this.mes;
			}
			
			if(this.selected=="dia"){
				this.dia=this.dia+Number(x).toString();
				document.getElementById("dia").value=this.dia;
			}
			
			
		}
		catch(err) {
			document.getElementById("año").value = "Error = " + err;
		}
	
	}
	

	enterFecha(){
		
		try { 
			if(this.año!=""&&this.mes!=""&&this.dia!=""){
				var x;
				x= new Date(this.año,this.mes,this.dia)
				this.pila.push(x);
				this.año="";
				this.dia="";
				this.mes="";
				document.getElementById("año").value=this.año;
				document.getElementById("mes").value=this.mes;
				document.getElementById("dia").value=this.dia;
				this.escribePila();
			}
		
		}
		
		catch(err) {
			document.getElementById("año").value = "Error = " + err;
		}
	}
	
	
	 
	 borrarFecha(){
		this.año="";
		this.dia="";
		this.mes="";
		document.getElementById("año").value=this.año;
		document.getElementById("mes").value=this.mes;
		document.getElementById("dia").value=this.dia;
		 this.pila=[];
		 this.escribePila();
		 
	 }
	 
	 añadeFestivos(){
		this.calendario.set(new Date('2020','1','1'),"Año Nuevo");
		this.calendario.set(new Date('2020','1','6'),"Reyes");
		this.calendario.set(new Date('2020','4','9'),"Jueves Santo");
		this.calendario.set(new Date('2020','4','10'),"Viernes Santo");
		this.calendario.set(new Date('2020','5','1'),"Fiesta del Trabajo");
		this.calendario.set(new Date('2020','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2020','9','8'),"Día de Asturias");
		this.calendario.set(new Date('2020','10','10'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2020','11','2'),"Dia de todos los Santos (Traslado al Lunes)");
		this.calendario.set(new Date('2020','11','7'),"Día de la Constitución");
		this.calendario.set(new Date('2020','12','8'),"Inmaculada Concepción");
		this.calendario.set(new Date('2020','12','25'),"Navidad");
		
		this.calendario.set(new Date('2019','1','1'),"Año Nuevo");
		this.calendario.set(new Date('2019','1','7'),"Reyes (Traslado al Lunes)");
		this.calendario.set(new Date('2019','4','18'),"Jueves Santo");
		this.calendario.set(new Date('2019','4','19'),"Viernes Santo");
		this.calendario.set(new Date('2019','5','1'),"Fiesta del Trabajo");
		this.calendario.set(new Date('2019','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2019','9','9'),"Día de Asturias (Traslado al Lunes)");
		this.calendario.set(new Date('2019','10','12'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2019','11','1'),"Dia de todos los Santos");
		this.calendario.set(new Date('2019','12','6'),"Día de la Constitución");
		this.calendario.set(new Date('2019','12','9'),"Inmaculada Concepción");
		this.calendario.set(new Date('2019','12','25'),"Navidad");
		
		this.calendario.set(new Date('2018','1','1'),"Año Nuevo");
		this.calendario.set(new Date('2018','1','6'),"Reyes ");
		this.calendario.set(new Date('2018','3','29'),"Jueves Santo");
		this.calendario.set(new Date('2018','3','30'),"Viernes Santo");
		this.calendario.set(new Date('2018','5','1'),"Fiesta del Trabajo");
		this.calendario.set(new Date('2018','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2018','9','8'),"Día de Asturias ");
		this.calendario.set(new Date('2018','10','12'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2018','11','1'),"Dia de todos los Santos");
		this.calendario.set(new Date('2018','12','6'),"Día de la Constitución");
		this.calendario.set(new Date('2018','12','8'),"Inmaculada Concepción");
		this.calendario.set(new Date('2018','12','25'),"Navidad");
		
		this.calendario.set(new Date('2017','1','2'),"Año Nuevo (Traslado al Lunes)");
		this.calendario.set(new Date('2017','1','6'),"Reyes ");
		this.calendario.set(new Date('2017','4','13'),"Jueves Santo");
		this.calendario.set(new Date('2017','4','14'),"Viernes Santo");
		this.calendario.set(new Date('2017','5','1'),"Fiesta del Trabajo");
		this.calendario.set(new Date('2017','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2017','9','8'),"Día de Asturias ");
		this.calendario.set(new Date('2017','10','12'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2017','11','1'),"Dia de todos los Santos");
		this.calendario.set(new Date('2017','12','6'),"Día de la Constitución");
		this.calendario.set(new Date('2017','12','8'),"Inmaculada Concepción");
		this.calendario.set(new Date('2017','12','25'),"Navidad");
		
		this.calendario.set(new Date('2016','1','1'),"Año Nuevo ");
		this.calendario.set(new Date('2016','1','6'),"Reyes ");
		this.calendario.set(new Date('2016','3','24'),"Jueves Santo");
		this.calendario.set(new Date('2016','3','25'),"Viernes Santo");
		this.calendario.set(new Date('2016','5','2'),"Fiesta del Trabajo (Traslado al Lunes)");
		this.calendario.set(new Date('2016','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2016','9','8'),"Día de Asturias ");
		this.calendario.set(new Date('2016','10','12'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2016','11','1'),"Dia de todos los Santos");
		this.calendario.set(new Date('2016','12','6'),"Día de la Constitución");
		this.calendario.set(new Date('2016','12','8'),"Inmaculada Concepción");
		this.calendario.set(new Date('2016','12','26'),"Navidad (Traslado al Lunes)");
		
		this.calendario.set(new Date('2015','1','1'),"Año Nuevo ");
		this.calendario.set(new Date('2015','1','6'),"Reyes ");
		this.calendario.set(new Date('2015','4','2'),"Jueves Santo");
		this.calendario.set(new Date('2015','4','3'),"Viernes Santo");
		this.calendario.set(new Date('2015','5','1'),"Fiesta del Trabajo ");
		this.calendario.set(new Date('2015','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2015','9','8'),"Día de Asturias ");
		this.calendario.set(new Date('2015','10','12'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2015','11','2'),"Dia de todos los Santos (Traslado al Lunes)");
		this.calendario.set(new Date('2015','12','7'),"Día de la Constitución (Traslado al Lunes)");
		this.calendario.set(new Date('2015','12','8'),"Inmaculada Concepción");
		this.calendario.set(new Date('2015','12','25'),"Navidad ");
		
		
		
		
	}
	
	getFestivos(){
		if(this.pila.length>=2){
			var end=this.pila.pop();
			var start=this.pila.pop();
			
			
			
			var representacion;
			representacion="";
			
			
			var loop= new Date(start);
			while(loop <= end){
				for (var [clave, valor] of this.calendario) {
					
					if(clave.getTime()==loop.getTime()){
						representacion=representacion+clave.toLocaleDateString("es-ES")+" : "+valor+"\n";
						this.pila.push(clave);
					}
					
				
				
				}
				
				var newDate = loop.setDate(loop.getDate() + 1);
				loop = new Date(newDate);
				
			}
			
			document.getElementsByTagName('textarea')[1].innerHTML=representacion;
			this.escribePila();
		
		}
		
		
	}
	
	cambiarInput(){
		
		if(this.selected=="año"){
			this.selected="mes";
			document.getElementById("btAño").value="Mes";
		}
		else if(this.selected=="mes"){
			this.selected="dia";
			document.getElementById("btAño").value="Dia";
		}
		
		else if(this.selected=="dia"){
			this.selected="año";
			document.getElementById("btAño").value="Año";
		}
	}
	
	restaDias(){
		if(this.pila.length>=2){
			var end=this.pila.pop();
			var start=this.pila.pop();
			var x=new Number(0);
			var loop= new Date(start);
			while(loop <= end){
				x=x+1
				
				var newDate = loop.setDate(loop.getDate() + 1);
				loop = new Date(newDate);
				
			}
				
				
				
			var representacion=x+" dias";
			document.getElementsByTagName('textarea')[1].innerHTML=representacion;
			this.escribePila();
		}
		
	}
	 
	
	

}