const $form = document.getElementById("miFormulario");
const $get = document.getElementById("traer")
const $table = document.getElementById("mostrar")


$form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const $email = document.getElementById("exampleInputEmail1").value
  const $contraseña = document.getElementById("exampleInputPassword1").value

  // usamos el metodo post del endpoint que levantamos
  try {
    const response = await fetch("http://localhost:3000/cuentas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      //aqui mandamos por el body de la peticion los valores escritos en el front
      // para insertarlos en la peticion, deben llamarse igual en ambos lados
      body: JSON.stringify({ $email, $contraseña })
    });

    // insertamos la data en una variable para su manejo
    const data = await response.json();

    // console.log("Respuesta del servidor:", data);
    alert(data.mensaje || "Datos insertados"); //mostramos la alerta de que se creo 
  }
  catch (error) {
    alert("Error al enviar los datos:", error);
  }
});




// creamos un boton para que traiga los valores en la base de datos
$get.addEventListener("click", async function () {

  try {
    const resp = await fetch("http://localhost:3000/clientes");
    const users = await resp.json(); // convertimos siempre los datos a json 

    //hacemos un ciclo para recorrerer toda la api y lo insertamos en la tabla
    // de forma dinamica
    users.forEach(user => {
      $table.innerHTML += `
      <tr>
          <td></td>
          <td>${user.email}</td>
          <td>${user.contraseña}</td>
        </tr>`
    });

  } catch{
    alert("no se pudieron traer los usuarios")
  }
});



// ESTE LO USO CUANDO NECESITE UN LOGIN
// recorremos el enpoint creado con express en el localhost
// fetch("http://localhost:3000/cuentas")
//   .then(resp => resp.json())
//   .then(user => {
//     user.forEach(user => {
//       //validamos si los valores ingresados estan en la base de datos, pero por medio
//       // de la api
//       if (user.email === $email && user.contraseña === $contraseña) {
//         alert("credenciales correctas.")
//         // console.log(user.email)
//       } else {
//         alert("credenciales incorrectas.")
//       }
//     });
//   })
