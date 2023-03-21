let user = [
  {
    name: "Yuri",
    pass: "123321"
  },
  {
    name: "João Victor",
    pass: "123321"
  },
  {
    name: "Vitor",
    pass: "123321"
  },
  {
    name: "Ana Julia",
    pass: "123321"
  },
  {
    name: "Nathã",
    pass: "123321"
  },
  {
    name: "Rafael",
    pass: "123321"
  },
  {
    name: "Bruno",
    pass: "123321"
  },
  {
    name: "Ana Clara",
    pass: "123321"
  },
  {
    name: "Ricardo",
    pass: "123321"
  },
  {
    name: "Daniela",
    pass: "123321"
  },
  {
    name: "Fernando",
    pass: "123321"
  },
  {
    name: "Letícia",
    pass: "123321"
  },
  {
    name: "Pedro",
    pass: "123321"
  },
  {
    name: "Juliano",
    pass: "123321"
  },
  {
    name: "Gabriela",
    pass: "123321"
  }
];


let nomepag2 = localStorage.getItem("userlogado");
if (nomepag2 != undefined) {

  window.addEventListener("beforeunload", function (e) {
    localStorage.removeItem(`userlogado`);
  });

  const nomeT = document.querySelector("p.ola");
  nomeT.innerHTML += `${nomepag2}`;

  let criareU = document.querySelector(`#criare`);
  criareU.addEventListener("click", crU);

  let validU = document.querySelector(`#valide`);
  validU.addEventListener("click", valideU);

  let tesU = document.querySelector(`#test`);
  tesU.addEventListener("click", testlogU);

  function back() {
    window.location.assign(`./index.html`);
    localStorage.removeItem("userlogado");
  }

  function liste() {

    const listU = document.querySelector("section.listU");
    listU.innerHTML = ""

    for (let i = 0; i < user.length; i++) {
      listU.innerHTML += `<li>${user[i].name}</li>`;
    }
  }

  function cleare() {
    const listU = document.querySelector("section.listU");
    listU.innerHTML = "";
  }

  function delt() {
    const listU = document.querySelector("section.listU");
    listU.innerHTML = "";

    for (let i = 0; i < user.length; i++) {
      listU.innerHTML += `<input type="checkbox" id="${i}"/><label> ${user[i].name}</label><br>`;
    }

    listU.innerHTML += `<input type="button" value="Deletar User" class="Deletar buttons" id="delete"/>`;

    const deletar = document.querySelector(`#delete`);
    deletar.addEventListener("click", deletes);
  }

  function deletes() {
    let usuariodeletado = [""];
    for (let i = 0; i < user.length; i++) {
      let checkbox = document.getElementById(`${i}`);
      if (checkbox.checked == true) {
        usuariodeletado[i] = 1;
      } else {
        usuariodeletado[i] = 0;
      }
    }
    for (let i = usuariodeletado.length - 1; i >= 0; i--) {
      if (usuariodeletado[i] == 1) {
        user.splice(i, 1);
      }
    }
    delt();
  }

  function crU() {
    let lista = document.querySelector(`.listU`);
    lista.innerHTML = "";
    lista.innerHTML += `Adicionar Usuário <br><br>`;
    lista.innerHTML += `<form>
                            <label form="inputname">Digite o Usuário:</label><br>
                            <input type="text" class="inputname input-text" placeholder="Digite o Usuário" required/><br>
                            <label form="inputpass"/>Digite à senha:</label><br>
                            <input type="password" class="inputpass input-text" placeholder="Digite a senha"/><br>
                            <input type="button" class="adicionar buttons" id="adicionarUser" value="Válidar" required/>
                            </form>`;

    let adicionarUsers1 = document.querySelector(`#adicionarUser`);
    adicionarUsers1.addEventListener("click", addUser);
  }
  function addUser() {
    let novoUsuario = {
      name: document.querySelector(`.inputname`).value,
      pass: Number(document.querySelector(`.inputpass`).value)
    };
    let repetida = 0;
    for (let i = 0; i < user.length; i++) {
      if (user[i].name == novoUsuario.name) {
        repetida = 1;
        alert(`Usuário já existe no cadastro, digite outro nome`);
        crU()
      }
    }
    if (novoUsuario.name == "") {
      alert(`Digite um usuário Válido`)
      repetida = 2;
    }
    if (repetida == 0) {
      user.push(novoUsuario);
      alert(`Usuário adicionado com sucesso`);
      showUser()
    }
  }

  function valideU() {
    let lista = document.querySelector(".listU");

    lista.innerHTML = "";
    lista.innerHTML += `Válidar Usuário <br><br>`;
    lista.innerHTML += `<form>
                          <label form="inputname1">Digite o Usuário:</label><br>
                          <input type="text" class="inputname1 input-text" placeholder="Digite o Usuário"/><br>
    
                          <label form="inputpass1"/>Digite à senha:</label><br>
                          <input type="password" class="inputpass1 input-text" placeholder="Digite a senha"/><br>
    
                          <label form="inputnameNova">Digite o Usuário novo:</label><br>
                          <input type="text" class="inputnameNova input-text" placeholder="Digite o Usuário"/><br>
    
                          <label form="inputpassNova"/>Digite à senha nova:</label><br>
                          <input type="password" class="inputpassNova input-text" placeholder="Digite a senha"/><br>
    
                          <label form="inputpassNova"/>Confirme à senha:</label><br>
                          <input type="password" class="inputpassConfirm input-text" placeholder="Digite a senha"/><br>
    
                          <input type="button" class="validar buttons" id="validarUser" value="Adicionar"/>
                          </form>`;

    let validarUsers = document.querySelector(`#validarUser`);
    validarUsers.addEventListener("click", validarUsersClickHere)
  }

  function validarUsersClickHere() {

    let oldUser = {
      name: document.querySelector(".inputname1").value,
      pass: Number(document.querySelector(".inputpass1").value)
    }

    let newUser = {
      name: document.querySelector(".inputnameNova").value,
      pass: Number(document.querySelector(".inputpassNova").value)
    }

    let confirmPass = document.querySelector(".inputpassConfirm").value

    for (let i = 0; i < user.length; i++) {
      if (oldUser.name == user[i].name && oldUser.pass == user[i].pass) {

        if (confirmPass == newUser.pass) {
          user[i] = newUser;
          alert(`Usuário ${newUser.name} adicionado com sucesso`);
          showUser()
        } else {
          alert(`As senhas não batem novamente com sucesso`);
        }

      } else if (oldUser.name == user[i].name && oldUser.pass != user[i].pass) {
        alert(`Senha incorreta, tente novamente`)
      }
    }
  }

  function testlogU() {
    let lista = document.querySelector(".listU");

    lista.innerHTML = `<label for="email">Insira seu nome de usuario</label><br />
      <input
      class="input-text"
      type="e-mail"
      id="userName"
      name="email"
      placeholder="Nome de usuario"
      required
    /><br />
    <label for="senha">Insira sua Senha</label><br />
    <input
      class="input-text"
      type="password"
      id="pass"
      name="pass"
      placeholder="Senha"
      required
    /><br />
    <div class="button">
      <input
        type="button"
        class="pbutton"
        value="Confirmar"
        id="newLog"
      />`

    let butoNLog = document.querySelector("#newLog");
    butoNLog.addEventListener("click", log2);
  }

  function log2() {


    let userName = document.querySelector("#userName").value;
    let pass = Number(document.querySelector("#pass").value);
    let control = 0;


    for (let i = 0; i < user.length; i++) {
      if (userName === user[i].name && pass === user[i].pass) {
        alert(`Seja bem vindo(a) ${userName} está cadastrado em nosso sistema`);
        control = 1;
        i = user.length;
      } else if (userName === user[i].name && pass != user[i].pass) {
        alert(`O user ${userName} está em nosso sistema porém a senha está incorreta, tente novamente!`);
      }
    }

    if (control === 0) {
      alert(`${userName} é inexistente`);
    }
  }

} else {

  function login() {
    let usuario = document.querySelector("input#nomer").value;
    let pass = Number(document.querySelector("input#password").value);
    let control = 0;
    for (let i = 0; i < user.length; i++) {
      if (usuario == user[i].name && pass == user[i].pass) {
        alert(`Seja bem vindo(a) ${usuario}`);
        control = 1;
        window.location.assign(`./page2.html`)
        localStorage.setItem("userlogado", user[i].name);
        i = user.length;

      } else if (usuario == user[i].name && pass != user[i].pass) {
        alert(`O user ${usuario} está em nosso sistema porém a senha está incorreta, tente novamente!`);
      }
    }
    if (control == 0) {
      alert(`${usuario} é inexistente`);
    }
  }
}