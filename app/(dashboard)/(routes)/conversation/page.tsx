"use client";

import * as z from 'zod';
import { MessageSquare } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

import Heading from '@/components/heading';
import { formSchema } from './constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Conversation = () => {

const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
        prompt:"",
    }
});

const isLoading = form.formState.isSubmitting;

const onSubmit = async (values :z.infer<typeof formSchema>) =>{
    console.log(values)
}

  return (
 <div>
       <Heading 
    title='Conversation'
    description='our most ai conversation '
    icon={MessageSquare}
    iconColor='text-violet-500'
    bgColor='bg-violet-500/10'
    />
    <div className='px-4 lg:px-8'>
     <div>
     <Form {...form}>
    <form
    onSubmit={form.handleSubmit(onSubmit)}
    className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 '
    >
    <FormField 
    name='prompt'
    render={({field}) => (
        <FormItem className='col-span-2 lg:col-span-11'>
            <FormControl className='m-0 p-0'>
             <Input 
             className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent' 
             disabled={isLoading}
             placeholder="what's your message..."
             {...field}
             />
            </FormControl>
        </FormItem>
    )}
    />
    <Button className="col-span-12 lg:col-span-1 w-full" disabled={isLoading}>Generate</Button>
    </form>
     </Form>
     </div>
     <div className='space-y-4 mt-4'>
       <div className='h-full p-20 flex flex-col items-center justify-center'>
        <div className='relative h-72 w-72'>
            <Image alt ='no conversation' fill src='/empty.jpg' />
        </div>
<p>no conversation Started</p>
       </div>
     </div>
    </div>
 </div>
  )
}

export default Conversation