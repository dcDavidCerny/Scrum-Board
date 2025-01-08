import styled from "@emotion/styled"
import { useState } from "react";
import { RestartAllProgressModal } from "./RestartAllProgressModal";
export default function Footer() {
    const [showModal, setShowModal] = useState(false);

    return (
        <FooterWrapper>
            <div className="madeBy">

                made by {'\u00A0'}<a href="https://github.com/dcDavidCerny" target="_blank">Dave {'\u00A0'}</a> 2024
            </div>
            <div>
                <button onClick={() => {
                    setShowModal(true);
                }}>delete all</button>
            </div>

            {showModal && <RestartAllProgressModal />}
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
background-color: #4f4f4f;
height: 5vh;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0px;
color: white;
font-weight: 100;
padding-top: 10px;
align-items: center;


.madeBy {
    margin-left: 10px;

}

a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
}

button {
    background: red;
    border: 1px solid transparent;
    border-radius: 3px;
    margin-right: 10px;
    padding: 3px 10px;
}

button:hover {
    border: 1px solid orange;
}

`