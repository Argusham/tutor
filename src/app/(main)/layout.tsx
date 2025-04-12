import React from 'react'
import { Navbar } from '../components/layout/Navbar'

interface props {
    children: React.ReactNode
}

const Layout = ({ children }: props) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}


export default Layout;
