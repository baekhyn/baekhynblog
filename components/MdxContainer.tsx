import { ReactNode } from 'react'
import { MdxStyle } from './MdxContainer.style'

export const MdxContainer = ({ children }: { children: ReactNode }) => {
    return <MdxStyle>{children}</MdxStyle>
}
