    contadorObserver = {
        adicionaOuvinte: function(callback){
                     this.inscritos[this.inscritos.length] = callback;
                   },
        publica:function (oque) {
                  for (var i = 0; i < this.inscritos.length; i++) {
                                if (typeof this.inscritos[i] === 'function') {
                                                this.inscritos[i](oque);
                                 }
                            }
                     },
       fazObservado:function (o) { 
                  for (var i in this) {
                      o[i] = this[i];
                      o.inscritos= [];
                   }
                }
        };
		
    var observado = {
    	    executa:function(){
    	         var conteudo = 'Executado em: ' + new Date();
                     this.publica(conteudo);
              }
       };
     
       contadorObserver.fazObservado(observado);
     
    var observaObservado = {
          verifica:function(oque){
    		   console.log("Observou "+oque)
               }
         };
     
        observado.adicionaOuvinte(observaObservado.verifica);
        observado.executa();
