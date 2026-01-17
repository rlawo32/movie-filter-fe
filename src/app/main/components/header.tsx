'use client'

import styled from "styled-components";
import { useRouter } from 'next/navigation'
/* [작업자: ms / 날짜: 2026-01-17] 로그인 상태 관리를 위한 import 추가 */
import { useEffect, useState } from 'react';
import { jwtDecode, JwtPayload } from 'jwt-decode';

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

/* [작업자: ms / 날짜: 2026-01-17] 로그인 유저 정보 섹션 스타일 추가 */
const UserSection = styled('div')`
    display: flex;
    align-items: center;
    gap: 15px;
`

/* [작업자: ms / 날짜: 2026-01-17] 공통 버튼 스타일 (LOGIN/LOGOUT) */
const NavButton = styled('button')`
    background: none;
    border: 1px solid white;
    color: white;
    padding: 5px 15px;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background-color: white;
        color: black;
    }
`

interface CustomJwtPayload extends JwtPayload {
    sub?: string;
}

const Header = () => {
    const router = useRouter();

    /* [작업자: ms / 날짜: 2026-01-17] 로그인 상태 및 유저 정보를 담는 State */
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userEmail, setUserEmail] = useState<string>("");

    /* [작업자: ms / 날짜: 2026-01-17] 연쇄 렌더링 방지를 위해 별도의 함수로 분리 */
    const checkLoginStatus = () => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const decoded = jwtDecode<CustomJwtPayload>(token);
                    if (decoded && decoded.sub) {
                        setIsLoggedIn(true);
                        setUserEmail(decoded.sub);
                    }
                } catch (error) {
                    console.error("토큰 파싱 실패:", error);
                    localStorage.removeItem('accessToken');
                    setIsLoggedIn(false);
                }
            }
        }
    };

    /* [작업자: ms / 날짜: 2026-01-17] 마운트 시점에 한 번 실행 */
    useEffect(() => {
        // 지연 실행(Promise/setTimeout)을 통해 브라우저 렌더링 사이클이 완료된 후 상태 업데이트
        const handler = setTimeout(() => {
            checkLoginStatus();
        }, 0);

        return () => clearTimeout(handler);
    }, []);

    /* [작업자: ms / 날짜: 2026-01-17] 로그아웃 로직 */
    const handleLogout = () => {
        if (confirm("로그아웃 하시겠습니까?")) {
            localStorage.removeItem('accessToken');
            setIsLoggedIn(false);
            setUserEmail("");
            router.push('/');
        }
    }

    return (
        <HeaderStyle>
            <div style={{ cursor: 'pointer' }} onClick={() => router.push('/')}>LOGO</div>
            
            <UserSection>
                {isLoggedIn ? (
                    <>
                        <span style={{ fontSize: '14px', color: '#ccc' }}>{userEmail}님</span>
                        <NavButton onClick={handleLogout}>LOGOUT</NavButton>
                    </>
                ) : (
                    <NavButton onClick={() => router.push('/login')}>LOGIN</NavButton>
                )}
            </UserSection>
        </HeaderStyle>
    )
}

export default Header;