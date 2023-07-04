import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import whitReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
   
    e.preventDefault();

    const request = () =>
    new Promise((resolve, reject) => {


      setTimeout(() => {
       
        resolve(username);
        }, 2000);
        });
      
      /*   try {
          const response = await request();
        
          toast(`Registro Exitoso. Bienvenido ${response}`);
          } catch (error) {
        
          toast("Ha ocurrido un error. Intente nuevamente");
          } */

          try {
            const response = await request()

            MySwal.fire({
              icon: "success",
              title: `Registro Exitoso ${response}`
            })
          } catch (error) {
            MySwal.fire({
              icon:"error",
              title: "Hay un Error"
            })
          }

  }

  return (
    <>
      <div className="App">
       

        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Ingresa tu nombre de usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
          <hr/>
          <input
            type="password"
            placeholder="Ingresa tu password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <hr/>
          <button type="submit"> Registrarme </button>
        </form>
      </div>
    </>
  )
}

export default App
