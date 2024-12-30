"use client"

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import AuthHeader from './auth-header'
import BackButton from './back-button'

interface CardWrapperProps {
    headerLabel : string
    title : string
    backButtonLabel: string;
    showSocial?: boolean;
    backButtonHref: string;
    children : React.ReactNode
}

const CardWrapper = ({headerLabel , title, backButtonHref, backButtonLabel, children} : CardWrapperProps) => {
  return (
    <Card className="xl:w-1/4 md:w-1/2 shadow-md">
    <CardHeader>
    <AuthHeader label={headerLabel} title={title} />
    </CardHeader>
    <CardContent>{children}</CardContent>
    <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
    </CardFooter>
    </Card>
  )
}

export default CardWrapper