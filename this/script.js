class Pessoa { 
    constructor (n) {
        this.nome = n;
    }
    
    fn(n) {
        let self = this;
        setTimeout(function () {
            self.nome = n;
            console.log(self);
        }, 1000);
    }
}
let p = new Pessoa('Marcos');
p.fn('Pedro');
