import styled from "@emotion/styled"
export default function InnerFooter() {
    return (
        <InnerFooterWrapper>
            <div>
                <button className="btn">BUTTON</button>
            </div>


        </InnerFooterWrapper>
    )
}

const InnerFooterWrapper = styled.div`
border-top: 1px solid rgba(255, 255, 255, 0.1);
height: 5vh;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
margin: 0px;
font-weight: 100;
background-color: transparent;
padding-top: 10px;

.btn {
    color: white;
}
button {
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0.5) 5%, rgba(0,0,0,0.5) 95%, rgba(0,0,0,1) 95%, rgba(0,0,0,1) 100%);
    border: none;
    border-radius: 8px;
    color: black;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
    color: black;
    transform: scale(1.05);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
}
`