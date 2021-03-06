class CalculadoraRPN{
	
	
	constructor (){
       this.pantalla=""; 
	   this.pila=[];
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
		
		else if(keyName=='!'){
				this.calcularFactorial();
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
			document.getElementById("ans").value = "El siguiente ekemento no es válido para ser introducido en la pila";
		}
	
	}

	enter(){
		try{
			var x;
			x= Number(this.pantalla);
			console.log(x);
			if(x!=""){
				if(isNaN(x)){
					document.getElementById("ans").value = "Elemento no válido";
				}
				else{
					this.pila.push(x);
					this.pantalla="";
					document.getElementById("ans").value=this.pantalla;
					
				}
			}
			
			this.escribePila();
			}
		catch(err) {
			document.getElementById("ans").value = "El siguiente elemento no es válido para ser introducido en la pila";
		}
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
			var x=Number(this.pila.pop());
			var y=Number(this.pila.pop());
		
			this.pila.push(y+x);
			this.escribePila();
		}
		
	}
	
	restar(){
		if(this.pila.length>=2){
			var x=Number(this.pila.pop());
			var y=Number(this.pila.pop());
		
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
		if(i==1||i==2){
			representacion=representacion+"Operando: Pila["+i+"] = "+this.pila[this.pila.length-i]+"\n";
		}
		
		else{
			representacion=representacion+"Pila["+i+"] = "+this.pila[this.pila.length-i]+"\n";
		}
		i--;
		}
		representacion=representacion+"";
		document.getElementsByTagName('textarea')[0].innerHTML=representacion;
	}
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}