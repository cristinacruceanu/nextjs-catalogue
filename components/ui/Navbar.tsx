import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "../../auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <div className="logo flex justify-between items-center">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <p className="ml-1 font-normal text-sm"> BooksCatalogue</p>
          </div>
        </Link>
        <div className="flex items-center gap-5 text-black font-normal text-xs">
          {session && session?.user ? (
            <>
              <Link href="/book/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <span> {session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
