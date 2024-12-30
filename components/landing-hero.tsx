"use client"
import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import { Button } from './ui/button'
import Link from 'next/link'

const LandingHero = () => {
  return (
    <div className='font-bold py-36 text-center space-y-5'>
        <div className='text-4xl sm:text-5xl md:text-6xl lg:text-9xl space-y-5 font-extrabold'>
            <h1>The Best AI Tool</h1>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>
            <TypewriterComponent 
            options={{
                strings:[
                    "Generate Answers",
                    "Music Generation",
                ],
                autoStart: true,
                loop:true
            }}
            />
            </div>
        </div>
        <div className='text-sm md:text-xl font-light text-zinc-400'>
            Create content using AI 10x faster
        </div>
        <p>Note - this app under development you access to click on Dashboard button and redirect to Dashboard demo</p>
        <div className="space-x-4">
                    <Button>
                        <Link href="/auth/register">Get Started</Link>
                    </Button>
                    <Link href='/dashboard'>
                        <Button variant="outline" >Dashboard</Button>
                    </Link>
                </div>
                <div className="mt-12 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Experience the power of:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white border rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">AI-driven Services</h3>
                            <p className="text-gray-600">Automatically prioritize your Answers with our advanced AI system.</p>
                        </div>
                        <div className="bg-white border rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">Full-text search</h3>
                            <p className="text-gray-600">Quickly find solution  with our powerful search functionality.</p>
                        </div>
                        <div className="bg-white border rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">Shortcut-focused interface</h3>
                            <p className="text-gray-600">Navigate your multiple services</p>
                        </div>
                    </div>
                </div>

       
    </div>
  )
}

export default LandingHero