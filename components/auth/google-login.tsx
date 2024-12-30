"use client"

import { googleAuthenticate } from "@/actions/google-login"
import { useActionState } from "react"
import { Button } from "../ui/button"


const GoogleLogin = () => {
    const [ errorMsgGoogle , dispatchGoogle ] = useActionState(googleAuthenticate, undefined)
   console.log(dispatchGoogle)
    return (

        <form action={dispatchGoogle}>
            <Button variant={"outline"} className='flex flex-row items-center gap-3 w-full'>Google</Button>
            <p>{errorMsgGoogle}</p>
        </form>
    )
}

export default GoogleLogin