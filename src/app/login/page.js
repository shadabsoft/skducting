"use client"

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <main className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        {!session ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Login to Your Account</h1>
            <button
              onClick={() => signIn("github")}
              className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition"
            >
              Sign in with Google
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6">Welcome, {session.user.name}</h1>
            <img
              src={session.user.image}
              alt={session.user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-600 transition"
            >
              Sign out
            </button>
          </>
        )}
      </div>
    </main>
  );
}
