output.innerHTML = '';

let a;
let x = 10;
try {
  if(x < 0) throw new TypeError('Valor não pode ser negativo');
  a = x;
  output.innerHTML = `<p>A = ${a}</p>`;
} catch (erro) {
  output.innerHTML = `<p>Valor não pode ser negativo</p>`;
  console.log(erro.name);
  console.log(erro.message);
  console.log(erro.stack);
 } finally {
    console.log('fim');
 }
