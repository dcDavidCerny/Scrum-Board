import styled from "@emotion/styled"
export default function Footer() {
    return (
        <FooterWrapper>
            <div className="madeBy">

                made by {'\u00A0'}<a href="https://github.com/dcDavidCerny" target="_blank">Dave {'\u00A0'}</a> 2024
            </div>
            <div>
                <button>BUTTON</button>
            </div>


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
    margin-top: 5px;
    margin-right: 10px;
    padding: 0px 10px;
}

`