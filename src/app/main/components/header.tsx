'use client'

import styled from "styled-components";

import { useRouter } from 'next/navigation'

const HeaderStyle = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 50px;
    background-color: #0F0F0F;
    color: white;
    z-index: 1000;
`


const Header = () => {
    const router = useRouter();

    return (
        <HeaderStyle>
            <div>LOGO</div>
            <button onClick={() => router.push('/login')}>LOGIN</button>
        </HeaderStyle>
    )
}

export default Header;