'use client'

import styled from "styled-components";

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
`


const Header = () => {

    return (
        <HeaderStyle>
            <div>LOGO</div>
            <div>LOGIN</div>
        </HeaderStyle>
    )
}

export default Header;