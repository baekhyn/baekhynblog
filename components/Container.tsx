import Footer from './Footer'
import Header from './Header'
import { ContainerBox } from './Container.style'
import { ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
    return (
        <>
            <ContainerBox>
                <Header />
                <main>{children}</main>
            </ContainerBox>
            <Footer />
        </>
    )
}
