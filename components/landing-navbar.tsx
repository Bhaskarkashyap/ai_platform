
import Link from "next/link"
import NavbarLinks from "@/components/navigation-links"

// import GoogleLogin from "@/components/auth/google-login"
// import { auth } from "@/auth"
import { Button } from "./ui/button"

const LandingNavbar = async () => {
  // const session = await auth()
  // const source = session?.user?.name
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between ">

        <div className="flex items-center">
        <Link href='/' className="flex items-center">
      
            <h2 className="text-2xl font-extrabold ">Ai-Platform</h2>
            </Link>
           <NavbarLinks />
        </div>
        <div>
         
        {/* { source ? <h1>{source}</h1> :          <GoogleLogin />} */}
     <Link href='/auth/register'>
     <Button>
        Get Started
       </Button>
     </Link>
     

        </div>
    </nav>
  )
}

export default LandingNavbar