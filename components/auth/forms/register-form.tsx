"use client";
import React, { useState }  from 'react'
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import CardWrapper from "@/components/auth/card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFieldsValue, RegisterSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
// import { register } from "@/actions/register";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";
import CustomFormField from '../form-fields';
import { register } from '@/actions/register';


const RegisterForm = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

const form = useForm<RegisterFieldsValue>({
  resolver : zodResolver(RegisterSchema),
  defaultValues:{
    email: "",
    name: "",
    password: "",
    passwordConfirmation:""
  }
})

const onSubmit = ( data : RegisterFieldsValue) =>{
  setLoading(true)
  register(data).then((res) => {
    console.log(res.user)
    if(res.error) {
      setError(res.error)
      setLoading(false)
      setSuccess('')
    }
    if(res.sucess){
      setError('')
      setSuccess(res.sucess)
      setLoading(false)
    }
  })
}

  return (
    <CardWrapper
    headerLabel = "Create an account"
    title="Register"
    backButtonHref="/auth/login"
    backButtonLabel="Already have an account"
    showSocial
    >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" >
            <div className="space-y-4 ">
            <CustomFormField
            control={form.control}
            name="email"
            label="Email"
            placeholder="something@gmail.com"
            type="email"
          />
          <CustomFormField
            control={form.control}
            name="name"
            label="Name"
            placeholder="John Doe"
          />
          <CustomFormField
            control={form.control}
            name="password"
            label="Password"
            placeholder="*******"
            type="password"
          />
          <CustomFormField
            control={form.control}
            name="passwordConfirmation"
            label="Confirm Password"
            placeholder="*******"
            type="password"
          />
            </div>  
            <FormSuccess message={success} />
            <FormError message={error} />
            <Button type="submit" className="w-full" disabled={loading} >
            {loading ? "Loading..." : "Register"}
          </Button>
            </form>
        </Form>
    </CardWrapper>
  )
}

export default RegisterForm