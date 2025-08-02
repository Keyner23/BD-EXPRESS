
const $form = document.getElementById("miFormulario");

$form.addEventListener("submit", function (e) {
  e.preventDefault();

  const $email = document.getElementById("exampleInputEmail1").value
  const $contraseña = document.getElementById("exampleInputPassword1").value

  fetch("http://localhost:3000/cuentas")
    .then(resp => resp.json())
    .then(user => {
      user.forEach(user => {
        if (user.email === $email && user.contraseña === $contraseña) {
          alert("credenciales correctas.")
          // console.log(user.email)
        } else {
          alert("credenciales incorrectas.")
        }
      });
    })
});