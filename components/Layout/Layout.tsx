
import { Suspense } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col h-full bg-[#FAFAFF] overflow-x-hidden">
                <Header />
                <main className="grow bg-inherit pb-10"> {children} </main>
                <Footer />
            </div>
        </Suspense>
    )
}
