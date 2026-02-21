import {v4} from 'uuid';
import translate from 'translate';

output.innerHTML = `
<p>Seu ID é ${v4()},</p> 
`;

translate.engine = 'libre';
translate.engine = 'pt';
translate.engine = 'en';

output2.innerHTML = `
    <p>
      <input type='text' id="original" />
      <button id="traduzir">Traduzir</button>
    </p>
    <p id="traduzida"></p>
`;
traduzir.onclick = () => {
    translate(originAgentCluster.value).then(t=>traduzida.innerHTML = t);
}
