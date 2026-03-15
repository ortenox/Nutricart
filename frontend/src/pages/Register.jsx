import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import { Link } from "react-router-dom"

export default function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async (e) => {

    e.preventDefault()

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    })

    if (error) {
      alert(error.message)
    } else {
      alert("Register berhasil! cek email untuk verifikasi")
      window.location.href = "/login"
    }

  }

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded shadow w-96"
      >

        <h2 className="text-2xl font-bold mb-4 text-center">
          Sign Up
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
          Sign Up
        </button>

        <p className="text-center mt-3">

          Already have an account?

          <Link
            to="/login"
            className="text-green-600 ml-1"
          >
            Sign In
          </Link>

        </p>

      </form>

    </div>

  )
}