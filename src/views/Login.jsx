import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Login() {
  return (
    <>
        <h1 className="text-4xl font-black">Iniciar Sesión</h1>
        <p>Para crear un pedido debes iniciar sesión</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
                
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

                <input type="submit"
                    value="INiciar Sesión" 
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 font-bold cursor-pointer"/>
                
            </form>
        </div>

        <nav className='mt-5'>
            <Link to="/auth/registro">¿No tienes cuenta aún? Crea una</Link>
        </nav>
    </>
  )
}

export default Login
