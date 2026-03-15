import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import { Link } from "react-router-dom"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {

    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if (error) {
      alert(error.message)
    } else {
      window.location.href = "/"
    }

  }

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow w-96"
      >

        <h2 className="text-2xl font-bold mb-4 text-center">
          Sign In
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="bg-green-500 text-white w-full p-2 rounded">
          Sign In
        </button>

        <p className="text-center mt-3">

          Don't have an account?

          <Link
            to="/register"
            className="text-green-600 ml-1"
          >
            Sign Up
          </Link>

        </p>

      </form>

    </div>

  )
}