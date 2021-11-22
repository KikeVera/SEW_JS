class Calculadora{
	
	
	
	
	constructor (){
       this.pantalla=""; 
	   this.mem;
	   document.addEventListener('keydown', (event) => {
		const keyName = event.key;
		if(keyName=='0' || keyName=='1' || keyName=='2' || keyName=='3' || keyName=='4' || keyName=='5' || keyName=='6' || keyName=='7' || keyName=='8' || keyName=='9'){
			this.digito(Number(keyName));
		}

		else if(keyName=='+'){
			this.sumar();
		}

		else if(keyName=='-'){
			this.restar();
		}

		else if(keyName=='*'){
			this.multiplicar();
		}

		else if(keyName=='/'){
			this.dividir();
		}

		else if(keyName=='='){
			this.evaluar();
		}

		else if(keyName=='.'){
			this.decimal();
		}

		else if(keyName=='c'){
			this.borrar();
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
	
	sumar() {
		try { 
			this.pantalla=this.pantalla+"+";
			document.getElementById("ans").value=this.pantalla;
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}
	
	restar() {
		try { 
			this.pantalla=this.pantalla+"-";
			document.getElementById("ans").value=this.pantalla;
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}
	
	multiplicar() {
		try { 
			this.pantalla=this.pantalla+"*";
			document.getElementById("ans").value=this.pantalla;
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}
	
	dividir() {
		try { 
			this.pantalla=this.pantalla+"/";
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

	 borrar() {
		try { 
			this.pantalla="";
			document.getElementById("ans").value=this.pantalla;
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}

	evaluar() {
		try { 
			var x;
			x = Number(eval(this.pantalla));
		
			document.getElementById("ans").value = Number(x);
			this.pantalla=Number(x);
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	}
	
	sumarNumeroMemoria(){
		if(this.pantalla!=""){
			var x;
			x=Number(eval(this.pantalla));
			if(this.mem==null){
				this.mem=Number(x);
			}
			else{
				this.mem=Number(this.mem)+Number(eval(x));
			}
		}
	}
	
	restarNumeroMemoria(){
		if(this.pantalla!=""){
			var x;
			x=Number(eval(this.pantalla));
			if(this.mem==null){
				this.mem=Number(-x);
			}
			else{
				this.mem=Number(this.mem)-Number(eval(x));
			}
		}
	}
	
	
	
	borrarMemoria(){
		this.mem='';
		
	}
	
	leerMemoria(){
		this.pantalla=Number(this.mem);
		document.getElementById("ans").value=this.pantalla;
	}
}