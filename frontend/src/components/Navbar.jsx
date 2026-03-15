import { Link } from "react-router-dom"
import { supabase } from "../lib/supabaseClient"
import { useEffect, useState } from "react"

export default function Navbar() {

  const [session, setSession] = useState(null)

  useEffect(() => {

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      listener.subscription.unsubscribe()
    }

  }, [])

  const handleLogout = async () => {

    const { error } = await supabase.auth.signOut()

    if (error) {
      alert("Logout gagal")
    } else {
      window.location.reload()
    }

  }

  return (

    <nav className="bg-green-500 text-white p-4 flex justify-between items-center">

      <h1 className="font-bold text-lg">
        NutriCart AI
      </h1>

      <div className="flex gap-4 items-center">

        <Link to="/">Home</Link>

        <Link to="/shopping-list">Shopping List</Link>

        <Link to="/buy-ingredients">Buy Ingredients</Link>

        {!session && (
          <>
            <Link to="/login">Sign In</Link>
            <Link to="/register">Sign Up</Link>
          </>
        )}

        {session && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        )}

      </div>

    </nav>

  )
}