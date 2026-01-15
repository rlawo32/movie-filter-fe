import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px); /* 살짝 아래에서 위로 올라오는 효과 */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const OverlayStyle = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0.5px); 
    z-index: 1000;
`

export const OptionStyle = styled('div')<{$process:number}>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 470px;
    height: 350px;
    padding: 40px;
    border: 1px solid rgba(255, 255, 255, 0.1); /* 미세한 테두리 */
    border-radius: 16px;
    background: rgba(30, 30, 30, 0.9);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    color: #e0e0e0;
    text-align: center;
    z-index: 9999;

    .option_view {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        padding-bottom: 70px;

        .option_item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: ${({$process}) => $process === 1 ? 120 : 105}px;
            height: ${({$process}) => $process === 1 ? 70 : 50}px;
            padding: 10px;
            margin: 10px;
            border: 1px solid transparent;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.05);
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: ${fadeIn} 1s ease-out forwards;

            .option_icon {
                padding-top: 2px;
                margin-right: 5px;
            }
            
            &:hover {
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid #D4AF37;
            }
        }
    }

    .option_next {
        position: absolute;
        bottom: 30px;
        left: 0;
        width: 100%;
    
        button {
            width: 50%;
            background: rgba(0, 150, 255, 0.15); 
            border: 1px solid rgba(135, 206, 250, 0.5);
            color: #ACE5FF; 
            padding: 12px 28px;
            border-radius: 8px;
            backdrop-filter: blur(4px);
            box-shadow: 0 0 15px rgba(0, 150, 255, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;

            &:hover {
                background: rgba(0, 150, 255, 0.3);
                box-shadow: 0 0 20px rgba(0, 150, 255, 0.3);
                color: #ffffff;
            }
        }
    }
`