var metalCrusher = document.querySelector("#mettaton");
metalCrusher.play();
metalCrusher.autoplay = true;
metalCrusher.load();
metalCrusher.volume = 1;
metalCrusher.loop = true;
var cartas = [
  {
    nome: "Froggit",
    img: "https://c.tenor.com/xbJuKe87bSQAAAAC/swaying-blinking.gif",
    atributos: { ataque: 4, defesa: 7, magia: 1 }
  },
  {
    nome: "Napstablook",
    img: "https://i.imgur.com/3NSWPhL.gif",
    atributos: { ataque: 4, defesa: 9, magia: 3 }
  },
  {
    nome: "Aaron",
    img: "https://i.makeagif.com/media/12-10-2015/sioLNT.gif",
    atributos: { ataque: 5, defesa: 8, magia: 0 }
  },
  {
    nome: "Doguinho",
    img:
      "https://pm1.narvii.com/6461/9bc4a9e12f718e9fa45cf3f73c2883a7c5f94b1c_hq.jpg",
    atributos: { ataque: 9, defesa: 7, magia: 2 }
  },
  {
    nome: "Boboneco",
    img:
      "https://gartic.com.br/imgs/mural/ta/tales_3004/boboneco-undertale.png",
    atributos: { ataque: 0, defesa: 0, magia: 0 }
  },
  {
    nome: "Doggo",
    img: "https://c.tenor.com/xAMJURr9PeYAAAAM/undertale-doggo.gif",
    atributos: { ataque: 3, defesa: 8, magia: 6 }
  },
  {
    nome: "Dogamy e Dogaressa",
    img:
      "http://pm1.narvii.com/6726/3e08105b0dd3c6a7fa2ab5c260d39cb2a5e176a3v2_00.jpg",
    atributos: { ataque: 8, defesa: 6, magia: 3 }
  },
  {
    nome: "Dogão",
    img:
      "http://pa1.narvii.com/6263/1bd94f8819bf23867871be2d982b3edfef3382c0_00.gif",
    atributos: { ataque: 9, defesa: 6, magia: 2 }
  },
  {
    nome: "Vegetóide",
    img:
      "http://pa1.narvii.com/7072/c9a19344f1227540298fd43c09d656dab6d2266ar1-720-720_00.gif",
    atributos: { ataque: 7, defesa: 4, magia: 6 }
  },
  {
    nome: "Shyren",
    img:
      "https://th.bing.com/th/id/OIP.hm43zHzWa7NkKukvUZ_ONQHaFj?w=208&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    atributos: { ataque: 9, defesa: 2, magia: 9 }
  },
  {
    nome: "Snowdrake",
    img:
      "https://64.media.tumblr.com/044a2d0c5bf3b7c97b25b8cf684e83c5/0f0439b290b8d6eb-be/s250x250_c1/31a0731e58288f2c12468a5b88f1e6c7d95d3a9b.jpg",
    atributos: { ataque: 4, defesa: 6, magia: 5 }
  },
  {
    nome: "Ice Cap",
    img:
      "https://pa1.narvii.com/6569/825d827725c6282d6c1338cd6aa8c6ec2e09b148_128.gif",
    atributos: { ataque: 4, defesa: 9, magia: 6 }
  },
  {
    nome: "Madjicko",
    img: "https://art.pixilart.com/b797c9eba079648.png",
    atributos: { ataque: 6, defesa: 3, magia: 10 }
  },
  {
    nome: "Loox",
    img: "https://art.pixilart.com/71e048012c95203.gif",
    atributos: { ataque: 5, defesa: 7, magia: 4 }
  },
  {
    nome: "Asriel",
    img:
      "https://www.bing.com/th/id/OGC.ceba2184c959248ce9b10a93c7eb0edd?pid=1.7&rurl=https%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2018%2f06%2fundertale-asriel-gif-3.gif&ehk=H%2b78TdqgH5xUTSwWZlxSUq9t1r2%2fYqLk2Uv%2fyDsBYpI%3d",
    atributos: { ataque: 10, defesa: 10, magia: 10 }
  }
];
var deathByGlamour = document.querySelector("#mettatonEx");
deathByGlamour.volume = 0.8;
var lose = document.querySelector("#lose");
var win = document.querySelector("#win");
var victory = document.querySelector("#victory");
var defeat = document.querySelector("#defeat");
var pontosMaquina = 0;
var pontosJogador = 0;
var cartaMaquina;
var cartaJogador;
var divCartaMaquina = document.getElementById("carta-maquina");
var pontuacao = document.getElementById("pontuacao");
function sortearCarta() {
  metalCrusher.pause();
  deathByGlamour.play();
  deathByGlamour.loop = true;
  divCartaMaquina.innerHTML = `<img
                            src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
                            style=" width: inherit; height: inherit; position: absolute;">`;
  divCartaMaquina.style.backgroundImage = `url(${"https://media.discordapp.net/attachments/1026231369522745344/1026255323113201684/unknown.png"})`;
  document.getElementById("escolhaSeuAtributo").innerHTML =
    "ESCOLHA SEU ATRIBUTO PARA TENTAR ME VENCER (E FALHAR MISERAVELMENTE)";
  pontuacao.innerHTML =
    `<p>Sua fama: ` +
    pontosJogador +
    ` ponto(s) <br> Minha fama: ` +
    pontosMaquina +
    ` ponto(s)</p>`;
  cartaMaquina = cartas[parseInt(Math.random() * cartas.length)];
  while (cartaJogador == cartaMaquina) {
    cartaMaquina = cartas[parseInt(Math.random() * cartas.length)];
  }
  cartaJogador = cartas[parseInt(Math.random() * cartas.length)];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  deathByGlamour.pause();
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  var atributoSelecionado = obtemAtributoSelecionado();
  var atributoJogador = cartaJogador.atributos[atributoSelecionado];
  var atributoMaquina = cartaMaquina.atributos[atributoSelecionado];
  var resultado = document.getElementById("resultado");

  if (atributoSelecionado == null || atributoSelecionado == "") {
    resultado.innerHTML =
      "<p>ESCOLHA UM ATRIBUTO, QUER QUE EU GANHE POR W.O? VOU TIRAR UM PONTO SEU POR ISSO</p>";
    pontosJogador = pontosJogador - 1;
    lose.play();
  } else if (atributoJogador < atributoMaquina) {
    resultado.innerHTML = `<p>VOCÊ PERDEEEEEEEEU</p><img src="https://gifimage.net/wp-content/uploads/2017/08/mettaton-ex-gif-12.gif">`;
    pontosMaquina++;
    lose.play();
    if (pontosMaquina == 2) {
      resultado.innerHTML += `<p>MAIS UMA VITÓRIA E EU SAIO COMO VENCEDOR HEIN HEHE, MELHOR VOCÊ COMEÇAR A JOGAR DE VERDADE PORQUE...PARECE QUE EU VOU GANHAR</p>`;
    }
  } else if (atributoJogador > atributoMaquina) {
    resultado.innerHTML = `<p>NÃÃÃÃÃÃO, VOCÊ ME VENCEU... FOI APENAS- SORTE DE PRINCIPIANTE, TENTE NOVAMENTE</p> <img src="https://www.bing.com/th/id/OGC.288bb96e56cb7f89c0887634be1b0d2b?pid=1.7&rurl=https%3a%2f%2fcdn63.picsart.com%2f185062073001202.gif&ehk=ylHn0mZ%2f6kWHyWoLxrV897rn7DE5R9Q9%2bJM%2bVXf5%2fzA%3d">`;
    pontosJogador++;
    win.play();
    if (pontosJogador == 2) {
      resultado.innerHTML = `<p>V-VOCÊ GANHOU... DE NOVO... TENHO QUE PARAR DE TE SUBESTIMAR E COMEÇAR A JOGAR DE VERDADE, ISSO MESMO- EU ESTAVA- TE TESTANDO</p> <img src="https://th.bing.com/th/id/OIP.8yQ2rgDncfQtsNy4SSgLlQHaFm?pid=ImgDet&w=225&h=169&c=7&dpr=1,25">`;
    }
  } else if (atributoJogador == atributoMaquina) {
    resultado.innerHTML = `<p>EMPATAMOS, MAS NA PRÓXIMA EU GANHO HEHE</p>`;
  }
  if (pontosJogador == 3) {
    victory.play();
    resultado.innerHTML = `<p>ESSA NÃO...PARECE QUE...VOCÊ...ME DERROTOU..... <br> COMO EU DEIXEI ISSO ACONTECER...AGORA MINHA FAMA...MEU SUCESSO........<br> <b>O MTT SHOW.....<i>ACABOU</i></b></p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAB+1BMVEUAAADRzqX9/fvv7+P///8FAAEAAALs7OvR0c/Dw8PRzafQz6PZ1al2dWD/AADV0qabmoJpaWgwMDKAgH/19fQ6Oy0PDxNUVEPX1LHv7+X/P0C0tKyJiIIjAwP3+erd3MGRCAj1CAgrAwLgAAJlAAO9AQF/AQFYAAGmoVCQjUtIRSTp59SlnlVcWixLAAD1AAIRAAG0sY5eWzjAvpPNAAB+fnHl5MeoqZU/PhiBgFv/LjT3Y2T/PkNYVzvS2dP4UUuRjm5+ez7BOzFSTyFwb05pZTRUUiuEgD+am3NYWFienp4dHRinp6cbGR5ralMUFAM9PT3Ly7mHhWivrIX96+ncY2DGr6CRkIP5x75YUTPWw5rW1caln4GLk3zHn37fmH3wal37kJKXUDzUvbrDc1PcvJnuem7ZmpN0elrkiXCDaEv7q6r7TUzxfHqRY1JHTy+YPipkQiPdpIiralqvk4fYbmrXMSibq57zp6iFUTq6imvkZVfot6P0oI/ty7v00dDMgE38eXiZXzPoYUjpPzLHqX+khk6lenb2WFuHQizHmo7OQDizQS/Na1LSU1G3TkHeakJrOSC+woZBMgBLTxSjUji7pWLtWECDZzHNLiyzdldoVC3GeEPBjVRuaCeAUySGjl4oKgB9LyHZi4puVj+qqG6OLhE2AAOlCwaVe0UtAAAUBUlEQVR4nO2djUPa1t7HCWJ0CQzurvdZElbo+yAkXUMmEARJSgI8d3vYA7FXrbRqO63UuFp727Vbu87VbXa4dfXadT6763XbZeuf+ZyTgILSXd+o0OXbmjeSQ84nv/M7v3NyEiydpiyopbGet73+s9/b68XqP58JiqL6FC7U7906uXiRQp+z/MeVScFkAGUyMBlAmQxQk4Hl+THSH0emHZgMoEwGJgMok4HJAMpkYDKAMhnshcF/d7eEXvvrATL4k83aArK9ZnvXZGC17dUS2p9Bz54h7AMD2wFKZ7BXCHtm0HWw6oEM9ghhrwxsr+3l2/dBOoO9Qdg7g3ccu1PvG42042QMBnuCsHcGf7HvSkTI00ABO7HDdCoM9gJhHxg4sd0I8ZIdWxVAdpiM/TVrxTnuPk7YBwYIgu9CTsCA3KKAc4fJ2P9nI2T808ExcOLIzoURje0AGMiO5My+nn3P8mdd/3twDHZBAMrbAAFgsNNkgEt4/b+M8vDnXeZk9/dY9sgAe44d7DwlwMCoH9uOwXN84kEwOLCy8Bw72EVK7cuACDTyBx3ePxSDRmbQQYYOgMFB+QOMaGgGJgOTwR+QQY0/IEmPZ4PBTsPONmZQg6AjF4/ndCYkDJZxIS4jzm1HCm1cLwQ2DCF33tp13oDgBVkX3VYyz7/0DLDaGCkXtnW4wnGwFAgTOKJmXWFbf55/+RlsxMqkgxw4e/ZvuY4Oz3lRtSN8hg9abYPqS8XAcHI4juE4guEw/3itHUAGVHTIQ3bkh7mI6nQ6MbnHNsht1ze2BQPk3Dn9yoOMYwYTrK694MrZhjRqpCPPCVxBVhFVIG3k+QvbRLB3Brsfl7YDOxgdO4cjTrCEOXHIAYfWsMHAE7faxqMXXXnRTvCCIOb7bbZL7ydeGIMXUhYmFsdwZwHUd6oMco/oPGrbjcApDiwmuFBucvKylxA5j22gLxp9qRggeDF6Tg1neUQIT+GjiXMTRbzWJ3aQ7rDnSmJsbGZxWjtLAAgzZ6PU6HYrxzaJkbBEbIH6IOtwXL00m1icixXrygIMkq5duEtRv2pa9PIIQUzeL1Jzm1LQ/xq6yTaxA/x+jOobsA4NXV+gihNa0VkfI4HA4AYFpFFU398HvXN9xdhmK8Axu5rhmmMHL4bBHMjd/PR4NHpXo/oSsCQgdW2mgRs3qSKkQN348NZ4lKJGt1xxTpAkqSGE9mCATNyG+YtSZ8DlPvORHjHUFYWPo8U7EyDrVCxRisYoam4K2wSBV/w+Jkk3Ch5blMGmDDiFkb5FmENo7NPneby+WiADVya8Hi3Wl+iDO1HRu15VwDbSgqmxPh9D05FGhtCqDOpKM87nu3ou65eZ0oYG3BnEaDfWVI6DVu/krYHHt/TyoH3SE4THGYlMYDC4SvkYRmkSg+bUC/UOzZlx28hVHQFFJe7ZsjoDkqx2HpDkyGCACAX6JnUEVNFObjDAx4oYjmGsj/n0fZoW2ofBJmXc4/PR6T4qOj5PfXlv/gfDDshK7wkQZDCRiI7FDAYEGbRXMeIfxyZGM3Lks/vU6lU60j4MJuocAp65uDhw6Qy0ck0booYMOwgACIFAIBsHGh7s8GjRRIxagK5zPOCJBIFSGYzHkHOgyrzweSlBJb6g24gBvjiBV50ZmN7JuK3Z6cUZWBZiC5f1sqA7xQAtyxgBxA+SA9HE3cWZL+c1qrQ41C/ArURBlmUC/xhYRiIxufBR6sGDa+3DYJSacxotRcCgmAD+4MziwD3g8SnqYv86A3JEDhGG+K+08cWxZwHPJ4ml80MzhcpmApPtGWy2RC1pX1/7eSnx8Brwp5tvTbdoveAsanMgsiPwyVEnnpgDDKhvvtKifff6YqBNuG4HI3I1r8Tk0syTT7/I8w+/Tb9+5eakfZ0BJ0xdK8VK99dmY9ojORgR7RgmtgEDcKGK1AQ//MM31KPCZALH8x/Pu39N9A24v6HGbS51vf8gLFbyOkeVSorP51cYholMnVscq2wPImL588RSiUqMalTs62WZlhEhFcRanwHQXHT0/DRwAPPTNycQsbRq7f5HbmSFE0t9A3mW0/sPQK2Qy1evd/E2H1H8jI/xR2Q1eCFxrmIGTtH/ZOkxFYtRoEQ8/I6lgSKCsy0YTExq04vz0XGKmuUz15987w7DDDI+pbT6BTMIQx04FscTNpwfJnIEPyzSksTKgkyERGoSbuZozC7+n/YDaHFRiccL2pmioiNoC38AhH8QXbzVBxj8zGeH/umT/AAA/PcZ9UTql+0GgxFBmoLFgRMKGCFyPMdxRJ4jROzxHQBmSkgLyEcLs49g0JAANefNL5RIZDOCFmaAKDFqUQMVQeL+jUvf+/zsCqDAPE0qPz55ZA1ndH9A5p76/BIMBegM8IJiENSFQQ4WAVoOBmVgOSlk4gO1RBXnQK06S02uRVR1S7OpdRngY9TCgh4dl3qsH0psufyvR2zSX/YrQgI2GQjdHzwF5QPIHxH5IMg6RhQyBDeFxWHzAJadOIJPaFRx7RpISPsG+FJ+azdKyzLA8EXtxplYFPiEa2CvbBIPXdZ+XOY9/p9y431ucNk7DAY+mFu/oihxTgYmQMgFMQnWdDQ+XxDEytGvhQsJWBwEEG81aDy3IgOj0YjNPR6nYsAvTg6D3XLJcsD29cKQDfE7umxD7gxBkB2edTsAJHyS9Nlk0U5MPZX8EIxPt4MUgc2N2i/cpGJjY1QRQZbxrb2MrchA58AjeClK/TpDRee4QZvNtsKUl7+jtAs+f9hm68ojBOGZPjsiMxvy+b5fpYqFCHScvupGv14NTvRRj6593gcgLDfoUWxRBk6VZVXQQvoYtgLlpMtq63/qK/s+pSj/FNk1kBPsxMS0NhRgfboJ+PQS4WOUVeqxbgR+4CblB9+CJViDqLdLt5m1qzQ1hjUwgxZlwGfyaeZfsemZaS22uvC+XwrnSMFHMOmPtNkHZ5ZWHcqFOSox5OlnQWhoSL/6vuHS/U8/ZSThdigUuhO7D8BABslUZJlfFiLffjPXNgw417s974qJ97+Kjmva7R+pi93dg25SeCqF++9psCvl1uxqtDgE2gssqDMNKTqEq9dKFPX++Tnt7id3EwsP/LodiGtSRBCEYIQR2qdPVXwFOIDL0e+knx0PbjPSz/NgNW7rGonbbNN6J0k0Fh0lPB0dI0oVgQGBoenvn1DaJAgrFqPUHZekMwiW1+QIHYlklIzobBcGGToev/q3AeDwygwjvdJ/LZu92mu1OcihkqYziC1MX9HbjUmFrYHA+GhaYmDnq94Be0f7p8+nMxDzMETmghmxAYLWZOAUuZzrp35SYBRGctuy8VwuOAKazEMLs6s6g4UlqgRj5UCSZQWhCkGCPcfS03PATiYoahXw+tZv2IGYAQySfDsxwO2ZiJDqt5GCSwh7Pdk1OSkpbvd17ZeS0WG4RM0M6/1ILCuGvIJQUAWdQZqm2SS81zJJUWdmwfyRX2eQX07RdBpvJwYgQAra+bzV1tXTbQ2EC0gw7WPS0o8XZ4x+Y6o07y7odsAmOa+LILwuL4AAnAOweJcGe5v0VtJ4dAuDtvEHQBHBzgcHe8ie7ngB4yJpvdm8WkFAJR5q12BfmsxmvF455PUGQyLLsynYOfDDwpcD87rTeJC4m/XLCML6RRH6A56VxEY3XVuTAcZHZDCh41k6DgK9QkSCERA73wdMIGYUh0eYt4NU2ELImwcM8iFASmcQeViy3opSfaC1tXDDKzNpUQa2IADHEeF4peENx9Zk4Ay6HMBsxbwrXig4EdoVh70Hkns8ClwBtboEGhJX5oAdKKwaIgguxIWIEMcaDDDXh79EJ+9Ca+Fcfl86K5RlQgAxlMLxsl9E2qW94AyKjgII8EC1roISfNWV1Rmc0W81zXS/Mk5RYwmdgczbvWBfrx0E10ZZmAr9/eaMfg96kQDo/D+VGVkVQPzkFzjWl2wwbLFVGfglmkPUlN7vJbOMAloB0sMEcPWJR//uzcJby1f0ssAqgpfAvJiiVBnQwcXoncXo/PystvgZ4/PTfl85IzEpCeTfz7DNsYPd6vd8YpBhlIwquLKOsADvmisSgPKdgt1dvZRz9Z8dKxapR3mPwy/BjgOF87IAQQoiiP+j+3bs+kOj62zhDAgZpGBQKKRZSUmzfDDYRv5A9PsVISKIObekxNdSjJBy0OXymhCOO1zh3uGwuPbw63xO0FvMjCRyil9JRWDFmHv9kpbIjVLa9eulG//uW2J8aRGxi+kUZIA0qhlblQFCJEGlJqaEtTVF5gtsWg2SyvKaIKytWLu6bVlJEtaW15IQQRosr6woQjIZjtA/deTcM7cuhq/evOiQ3YMjAw/BLul8plBh0F7jkVRF4BE6pSgR0S746VSuS1kul9f8isNqC9Nluby8vAYMnUmrMkZwPEYI6pfun8Jk7iI14P7wl1h/f38vCK97YWvSLw1XGbSTHeB8KoNwEVCKgVPkU64uqzUslcvKspIjyX7QEFwrl+MS8PqZtQ6rrrDCiXAwxq+JAZv7YWKEjo9YrT1Ten+KIKZZPCOxm8c1tDYDIKczpaTWhpVkwc67HG63LNNrgEEkAso9KBbJvCfsSEuiEKg88S5kRE8HOZICV7/LJdNyuAdYzNN0WgKRoqCksIySVBuPYG5dBjiSklguKLEFp5MTBdFuVyNBIahXf4IcEQl4lykvyJmKFFGEPQrhMMg6F8p68t22rvDreZGzI+qKlHIWWGW4SWWhieNQUn5FDfqVgm4V4A8E/RHa+KNpGY5P9OSC8nr/gZAHDNzhLsdf3XE5lY2MOAZ7HPBAgDAUxDOFULDdGGAYzdJqkKUz1fECspH5jD5L6fedAwER9p7oPSmhAByhJub6R+K5/mzXYHyEDKtwaKpTlcopJCOVlXZjILAKI3FBRmJZeG8Ix3k16XA4gD0LcJbhIAOSFEFrKDcFEKzA8UlkgM87Rrr748He/hE6K8IHHhBV8vlYrACqEaHhsy37wGC3+n0G8JT9kppi/D4mCJ/PcgqDbputm0bschjMwyljgGKOY5M5gWXFsDFmV8yH8u8FRURIvVfwxuGzLM6IJEk0UmAlSWlW/0FzGKjwhpmAqWDK6gwQfrC3t1cEuVIzvb1vvKF6jXFp4spKTl5ZkY3hywE+JedV3onYeTUflI2kCoWCivBgWmiOHTSLAcIDYU6Eg/OaLQis5OGS01t5mC8QgMPTKk+ABxAM7o5DL1o9zgnqWXj9waRhsNy6dWN1iGVtnQ5vE+l/QMTGezAMGIYdYJsTMMZgwf/Y5jHM7cAAR2oHkfH63Vi8MmQPMeyArAIgq3ZQA2B9mGa1odD4qY6W9YlbxcP7ZDXDBxq9A4I8oHeBvBgGRv7xDQb1z3Cs62Ce+X4xDGBHK27YQoVBQwS7eSFK2zDA1xkYmWz8OhRQGHaMoDXqxu28zwoWBEPG/LnvAnHu+K1bzhZg4NzWO874+lWi4Sui9Gf/d6pWqBvtMIb5jwLXq1b2xu/B8ITs20msPqmDZ/COa1sSxfr1sLuhwttLrU5/OWgG7+zy8H3VwTKwdr/SArIeLIMDfa1uRdaDZtAyMhmYDKAOgkHPAb9eerN6Xnyf6sskk4HJwPwtEiiTAZTJwGQAZTJoAoPOffmWBgc072o1lQHaadF/VrxT37r5F8Y7txxR+TFyMO/sNFY7qx+iTTTYfU+6LkFUr3hgbjvhSv3vy6Nb9u/Uf43dYGccUJNSQwPblxPef7zo1jUUrZ9bKitbTmF9v+qHNT9P3yxDaMZv2qKHaoTqa/Br9HntZ0dPo8YpnK47oBNOoSkYa0c3Ptn3M62cbzPKwrEjGzpqeRtMT4HtJ8D8OPps46O3Dle++2TN/icsp8D0bZDKb/r80Hpix5plCU2JEw8DvfXqq6/C+WnLMbB0Cpj022B+HD0BpicOGzpVOYeTYNuxyrbj6JtgDTBAT4H5EfQoSOgtI8GTh9uHge7cj4Ac6O6wAYOTVUdgeDmdwYnqedQxOGYwgPtWE2yG9r8s6ClCO+jUnXwjBkbmK45eZ/Bs/XQggyPHTlh+22AAPSNMcL9Pdf2U9z1FvWaHp3xad7kNGFS+uZbBiYp/NOwA5L6WgaViWM3zivsso6rRGYA6vcIAbKllgNbGPDUM0MYMqnbQNgyMVA0GVX9w4tmzZ0c2fOIzqDfX99V9or7tZIXBsePHnz2rsQPUgNqcc23Wb95vYgDrtlfXGRh13cl1L3hyfduJdZ94yrCGKgO0iQya1YeyicGbp0/XlYXTUOv76mWhus2wA/TlY3AKzLfjDyxVBpajz068NAwsVZ/YoF6otA0shh0Y6qwwsBg+0VLxidAfvNWuDFD0d2IkY2bEB3X1wjGw/291dtDEurFpfaqVGAl8w9aycPjQUV2nq+0FaAenjW2HKgwslpo4Eex/6Mirx461F4MtZaGWQVWV+F+3g6rethj1gqUmPqgIbVI3StMYnATNHMMO4NJRaPFg/ht6/PCGTlUYnKrZdtLyG5yC7B7S56c3PmrKiVqafH8BrZ3UzSufo7Wz2qPQjR2b3+dr3mMxGUCZDEwGUCYDkwGUycBkAGUyMBlAmQxMBlAmA5MBlMnAZABlMjAZQJkMTAZQJgOTAZTJAMpkYNqByQDKZGAygDIZmAygTAYmAyiTgckAymRgMoAyGZgMoEwGJgMok4HJAMpkYDKAMhmYDKBMBr/P4OWi8/yHYFD9tRuVpbrHK9BO40EKtBYUqu8GPzL+W9afzkIr/zZ/5zZBosYbL9D6I9D6PbaX1HoGNk7MWH9eCsaDhmjtd2zasdFTRLUZRtGtx9Sc9fZPHN2azT2V1EbpNTaG/wf4I8qZzjKXyAAAAABJRU5ErkJggg==">`;
    pontosJogador = 0;
    pontosMaquina = 0;
  }
  if (pontosMaquina == 3) {
    defeat.play();
    resultado.innerHTML = `<p>EU...EU GANHEEI!!!!! HAHA, ACHOU QUE IA VENCER? POIS SAIBA QUE ESSE É O MEU SHOW, VOCÊ TÁ NA MINHA ÁREA, AQUI QUEM MANDA SOU EU</p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-KmrSOJWkGlhgi-IxbCPTfICJtUZZKqTeAg&usqp=CAU">`;
    pontosJogador = 0;
    pontosMaquina = 0;
  }
  document.getElementById("btnJogar").disabled = true;
  exibirCartas();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      `<input class="atributos" type="radio" name="atributo" value="` +
      atributo +
      `">` +
      atributo +
      `<br>`;
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
function exibirCartas() {
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  pontuacao.innerHTML =
    `<p>Sua fama: ` +
    pontosJogador +
    ` ponto(s) <br> Minha fama: ` +
    pontosMaquina +
    ` ponto(s)</p>`;
}