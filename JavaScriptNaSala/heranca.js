function Animal() {
  this.barulho = '';
}

Animal.prototype = {
	fazerBarulho: function(){
		return this.barulho;
	}
};

function Gato(){
	Animal.call(this);
	this.barulho = 'Miau'
}

Gato.prototype = new Animal();

function Cachorro(){
	Animal.call(this);
	this.barulho = 'Au'
}

Cachorro.prototype = new Animal();

function Manada(){
	this.manadas =[];
}

Manada.prototype = {
	adicionar: function(animal){
		this.manadas.push(animal);
	}
};

function ManadaSustenido(){
	Manada.call(this);
}

ManadaSustenido.prototype = new Manada();

ManadaSustenido.prototype.barulhos = function(){
		var saida = "";
		for (i= 0; i < this.manadas.length; i++) {
		if(i == this.listaManada.length-1)
			saida+=" "+this.manadas[i].fazerBarulho()+"#"+" "+this.manadas[i].fazerBarulho();
		else
			saida+=" "+this.manadas[i].fazerBarulho()+"#"+" "+this.manadas[i].fazerBarulho()+"#";
		};
		return saida;
	};

function ManadaVirgula(){
	Manada.call(this);
}

ManadaVirgula.prototype = new Manada();
ManadaVirgula.prototype.barulhos = function(){
		var saida = "";
		for (i= 0; i < this.manadas.length; i++) {
		if(i == this.listaManada.length-1)
			saida+=" "+this.manadas[i].fazerBarulho();
		else
			saida+=" "+this.manadas[i].fazerBarulho()+",";
		};
		return saida;
	};

var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());
