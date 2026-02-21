// let numero = 50;
// let fn = fnMetade(numero);
// fn.then((resp)=>console.log(`A metade de ${numero} é ${resp}`)
// ).catch((erro)=>console.log(erro.message));

// async function fnMetade(n) {
//    if(n%2==0) return n/2;
//    else throw new Error('Número não é par')
// }


async function carga(n) {
  let resp1 = await fetch('https://reqres.in/api/users' + n, )
  let user = await resp1.json();
  let resp2 = await fetch(user.data.avatar);
  let avatar = await resp.blob();
  console.log(avatar);
  image.src = URL.createObjectURL(avatar);
  console.log(Image.src);
      method: 'GET',
       headers: {
            'x-api-key': 'reqres-free-v1'
        }
}
    output.innerHTML = `
    <p>
        <input id="idUser" type="number" value="1" />
        <button id="btn">Ver avatar</button>
    </p>
    <p>
        <img id"imagem" />
    </p>
   `;

btn.onclick = () => carga(idUser.value);
