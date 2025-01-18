import { Link } from "react-router-dom"

export default function Registro() {
  return (
    <>
        <h1 className="text-4xl font-black">Crea tu cuenta</h1>
        <p>Crea tu cuenta llenando el formulario</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
                <div className="mb-4">
                    <label className="text-slate-800"
                     htmlFor="name">Nombre</label>
                    <input type="text"
                            placeholder="Tu nombre"
                             name="name" 
                             id="name"
                             className="mt-2 w-full p-3 bg-gray-50" />
                </div>
                <div className="mb-4">
                    <label className="text-slate-800"
                     htmlFor="email">Email</label>
                    <input type="email"
                            placeholder="Tu email"
                             name="email" 
                             id="email"
                             className="mt-2 w-full p-3 bg-gray-50" />
                </div>
                <div className="mb-4">
                    <label className="text-slate-800"
                     htmlFor="password">Password</label>
                    <input type="password"
                            placeholder="Tu password"
                             name="password" 
                             id="password"
                             className="mt-2 w-full p-3 bg-gray-50" />
                </div>
                <div className="mb-4">
                    <label className="text-slate-800"
                     htmlFor="password_confirmation">Repetir Password</label>
                    <input type="password"
                            placeholder="Repetir Password"
                             name="password_confirmation" 
                             id="password_confirmation"
                             className="mt-2 w-full p-3 bg-gray-50" />
                </div>

                <input type="submit"
                    value="Crear Cuenta" 
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 font-bold cursor-pointer"/>
                
            </form>
        </div>
        <nav className='mt-5'>
            <Link to="/auth/login">¿Ya tienes cuenta aún? Inicia Sesión</Link>
        </nav>
    </>
  )
}
