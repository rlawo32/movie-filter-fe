import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes` from { opacity: 0; } to { opacity: 1; } `;
const scaleUp = keyframes` 
  from { opacity: 0; transform: scale(0.95) translateY(10px); } 
  to { opacity: 1; transform: scale(1) translateY(0); } 
`;

const fadeOut = keyframes` from { opacity: 1; } to { opacity: 0; } `;
const scaleDown = keyframes` 
  from { opacity: 1; transform: scale(1) translateY(0); } 
  to { opacity: 0; transform: scale(0.95) translateY(10px); } 
`;

export const ModalOverlay = styled.div<{ $isClosing: boolean }>`
    position: fixed;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: ${({ $isClosing }) => ($isClosing ? fadeOut : fadeIn)} 0.3s ease-in-out forwards;
`;

export const ModalContent = styled.div<{ $isClosing: boolean; $image: string}>`
    position: relative;
    width: 90%;
    max-width: 1024px;
    height: 80%;
    border-radius: 20px;
    background: #1e1e22;
    font-size: 2rem;
    color: #FFFFFF;
    overflow-y: auto;
    animation: ${({ $isClosing }) => ($isClosing ? scaleDown : scaleUp)} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    &::-webkit-scrollbar { width: 8px; }
    &::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }

    .modal_head {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70%;
        background-color: rgb(13, 13, 18);
        background-image: linear-gradient(75deg, rgba(13, 13, 18, 1) 10%, rgba(13, 13, 18, 0.6) 30%, rgba(13, 13, 18, 0) 40%), ${({$image}) => "url('" + $image + "')"};
        background-repeat: no-repeat;
        background-position: right top; 
        background-size: 95%;
        z-index: 1001;
        -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
        mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
    }

    .modal_body {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
        background-image: linear-gradient(
            to bottom,
            rgba(13, 13, 18, 0) 0%,
            rgba(13, 13, 18, 0) 10%, 
            rgba(13, 13, 18, 0.7) 70%,
            rgb(13, 13, 18) 85%
        );
        z-index: 1002;
    }
`;
