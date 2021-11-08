class Calculadora{
	
	constructor (){
       this.pantalla=""; 
	   this.mem;
	   this.calculations=[];
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

		else if(keyName==']'){
			this.sumarNumeroMemoria();
		}

		else if(keyName=='['){
			this.restarNumeroMemoria();
		}

		else if(keyName=='{'){
			this.leerMemoria();
		}

		else if(keyName=='}'){
			this.borrarMemoria();
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
			this.calculations=[];
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
			this.calculations.push(Number(x));
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

class CalculadoraCientifica extends Calculadora{
	
	constructor (){
        super();
		this.ang="deg";
		this.FE=false;
		this.hiper=false;
		document.addEventListener('keydown', (event) => {
			const keyName = event.key;
			
			 if(keyName=='('){
				this.parIzq();
			}

			if(keyName==')'){
				this.parDer();
			}

			if(keyName=='!'){
				this.calcularFactorial();
			}

			if(keyName=='p'){
				this.digito('3.141592653589793');
			}

			if(keyName=='e'){
				this.digito('2.718281828459045');
			}

			if(keyName=='b'){
				this.back();
			}

			if(keyName=='r'){
				this.calculaRaiz();
			}

			if(keyName=='n'){
				this.calcularPEnesima();
			}

			if(keyName=='l'){
				this.calculaLogaritmo();
			}

			if(keyName=='x'){
				this.exponente();
			}

			if(keyName=='%'){
				this.calculaResto();
			}

			if(keyName=='a'){
				this.calcularCuadrado();
			}

			if(keyName=='i'){
				this.calculaPotencia10();
			}

			if(keyName=='g'){
				this.cambiaSigno();
			}

			if(keyName=='v'){
				this.previusCalculation();
			}

			if(keyName=='#'){
				this.guardarEnMemoria();
			}

			if(keyName=='o'){
				this.cambiaTrigonometria();
			}

			if(keyName=='u'){
				this.cambiaUdsAngulo();
			}

			if(keyName=='f'){
				this.FE;
			}


			if(keyName=='s'){
				if(!this.hiper){
					this.calculaSin();
				}

				else{
					this.calculaSinh();
				}
			}

			if(keyName=='c'){
				if(!this.hiper){
					this.calculaCos();
				}

				else{
					this.calculaCosh();
				}
			}

			if(keyName=='t'){
				if(!this.hiper){
					this.calculaTan();
				}

				else{
					this.calculaTanh();
				}
			}
	
			
			
		  });
		
    }

	cambiaExponente(){
		var x=Number(eval(this.pantalla));
		if(!this.FE){
		var i=x.toString().split(".")[0].length;
			this.pantalla=Number(x/(Math.pow(10,(i-1))))+'e+'+(Number(i-1));
			this.FE=true;
		}

		else{
			this.pantalla=eval(this.pantalla);
			
			this.FE=false;
		}

		document.getElementById("ans").value=this.pantalla;
	}

	guardarEnMemoria(){
		if(this.pantalla!=""){
			this.mem=Number(eval(this.pantalla));
		}
	}

	parIzq() {
		try { 
			this.pantalla=this.pantalla+"(";
			document.getElementById("ans").value=this.pantalla;
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}

	parDer() {
		try { 
			this.pantalla=this.pantalla+")";
			document.getElementById("ans").value=this.pantalla;
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}

	exponente() {
		try { 
			this.pantalla=this.pantalla+"e+";
			document.getElementById("ans").value=this.pantalla;
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}
	
	back(){
		if(this.pantalla!=""){
			this.pantalla=this.pantalla.substring(0,this.pantalla.length-1);
			document.getElementById("ans").value=this.pantalla;
		}
		
		
	}	
	
	previusCalculation(){
		if(this.calculations.length>'1'){
			this.calculations.pop();
			this.pantalla=this.calculations[this.calculations.length-1];
			document.getElementById("ans").value=this.pantalla;
			
		}
		
	}
	
	calculaResto(){
		if(this.pantalla!=""){
		
			this.evaluar();
			
		}

		this.pantalla=this.pantalla+"%";
		document.getElementById("ans").value=this.pantalla;
		
	}
	
	calculaLogaritmo(){
		if(this.pantalla!=""){
			this.pantalla=Math.log(Number(eval(this.pantalla)));
			document.getElementById("ans").value=this.pantalla;
			this.calculations.push(Number(this.pantalla));
		}
		
		
	}
	
	calculaPotencia10(){
		if(this.pantalla!=""){
			
			this.pantalla =Math.pow(10,eval(this.pantalla));
			document.getElementById("ans").value=this.pantalla;
			this.calculations.push(Number(this.pantalla));
		}
	}
	
	calculaRaiz(){
		if(this.pantalla!=""){
			this.pantalla =Math.sqrt(eval(this.pantalla));
			document.getElementById("ans").value=this.pantalla;
			this.calculations.push(Number(this.pantalla));
		}
	}
	
	calculaAngulo(){
		
		var x;
		x=eval(this.pantalla);
		if(this.ang=="deg"){
			
			x=x*'0.0174533';
			
		}
		
		return x;
		
		
	}
	
	
	
	calculaSin(){
		if(this.pantalla!=""){
			var x;
		
			x=this.calculaAngulo();
			this.pantalla =Math.sin(x);
			document.getElementById("ans").value=this.pantalla;
			this.calculations.push(Number(this.pantalla));
		
		}	
		
	}
	
	calculaSinh(){
		if(this.pantalla!=""){
			var x;
		
			x=this.calculaAngulo();
			this.pantalla =Math.sinh(x);
			document.getElementById("ans").value=this.pantalla;
			this.calculations.push(Number(this.pantalla));
		
		}	
		
		
	}
	
	calculaCos(){
		if(this.pantalla!=""){
			var x;
		
			x=this.calculaAngulo();
			this.pantalla =Math.cos(x);
			document.getElementById("ans").value=this.pantalla;
			this.calculations.push(Number(this.pantalla));
		
		}	
		
	}
	
	calculaCosh(){
		if(this.pantalla!=""){
			var x;
		
			x=this.calculaAngulo();
			this.pantalla =Math.cosh(x);
			document.getElementById("ans").value=this.pantalla;
			this.calculations.push(Number(this.pantalla));
		
		}	
		
	}
	
	calculaTan(){
		if(this.pantalla!=""){
			var x;
		
			x=this.calculaAngulo();
			this.pantalla =Math.tan(x);
			document.getElementById("ans").value=this.pantalla;
			this.calculations.push(Number(this.pantalla));
		
		}	
		
	}
	
	calculaTanh(){
		if(this.pantalla!=""){
			var x;
		
			x=this.calculaAngulo();
			this.pantalla =Math.tanh(x);
			document.getElementById("ans").value=this.pantalla;
			this.calculations.push(Number(this.pantalla));
		
		}	
		
	}
	
	calcularCuadrado(){

		if(this.pantalla!=""){
			this.pantalla =Math.pow(eval(this.pantalla),2)
			document.getElementById("ans").value=this.pantalla;
			this.calculations.push(Number(this.pantalla));
		}
	}
	
	calcularPEnesima(){
		if(this.pantalla!=""){
			this.evaluar();
		}

		this.pantalla=this.pantalla+'e+';
		document.getElementById("ans").value=this.pantalla;
	}
	
	calcularFactorial(){
		if(this.pantalla!=""){
			this.evaluar();
			var x;
			x=Number(this.pantalla);
			x=Math.round(x);
			var i=x;
			while(i>'1'){
				i--;
				x=x*i;
			}
		
			this.pantalla=x;
			document.getElementById("ans").value=this.pantalla;
			this.calculations.push(Number(this.pantalla));
		}
	
		
	}
	
	cambiaSigno(){
	if(this.pantalla!=""){
		this.evaluar();	
	}
	
	this.pantalla=-Number(this.pantalla);
	document.getElementById("ans").value=this.pantalla;
			
		
	}
	
	cambiaUdsAngulo(){
		if(this.ang=="deg"){
			this.ang="rad";
			document.getElementById("angs").value="RAD";
		}
		
		else{
			this.ang="deg";
			document.getElementById("angs").value="DEG";
		}
	
	}
	
	cambiaTrigonometria(){
		if(this.hiper){
			this.hiper=false;
		}
		else{
			this.hiper=true;
		}
		if(document.getElementById("sin").value=="sin"){
			document.getElementById("sin").value="sinh";
			document.getElementById("sin").setAttribute("onclick","calculadora.calculaSinh()");
		}
		
		else{
			document.getElementById("sin").value="sin";
			document.getElementById("sin").setAttribute("onclick","calculadora.calculaSin()");
		}
		
		if(document.getElementById("cos").value=="cos"){
			document.getElementById("cos").value="cosh";
			document.getElementById("cos").setAttribute("onclick","calculadora.calculaCosh()");
		}
		
		else{
			document.getElementById("cos").value="cos";
			document.getElementById("cos").setAttribute("onclick","calculadora.calculaCos()");
		}
		
		if(document.getElementById("tan").value=="tan"){
			document.getElementById("tan").value="tanh";
			document.getElementById("tan").setAttribute("onclick","calculadora.calculaTanh()");
		}
		
		else{
			document.getElementById("tan").value="tan";
			document.getElementById("tan").setAttribute("onclick","calculadora.calculaTan()");
		}
	}
	
	
	
	
}