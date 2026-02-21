let $ = (function() {
    let contadores = [];

    function Contador(i) {
          if(contadores[i] === undefined) contadores[i] = 0;
        this.incrementa = function() {
            contadores[i]++;
            return this;
        };
        this.decrementa = function() {
            contadores[i]--;
            return this;
        };
        this.valor = function() {
            return contadores[i];
        };
    }

    return function (i) {
        return new Contador(i);
    };
})();

$(3).incrementa().decrementa().incrementa().incrementa();
console.log(1, $(3).valor());

let c2 = $(0);
c2.incrementa();
console.log(2, c2.valor());
