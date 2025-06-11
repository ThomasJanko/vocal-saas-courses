import Image from "next/image"
import Link from "next/link"
import NavBarItems from "./NavBarItems"
import { SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton } from "@clerk/nextjs"

const NavBar = () => {
  return (
    <div className="navbar">
        <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
            <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
        </Link>
        <div className="flex items-center gap-8">
            <NavBarItems />
            <SignedOut>
              <SignInButton>
                <button className="btn-signin">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="btn-signup">Sign Up</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default NavBar