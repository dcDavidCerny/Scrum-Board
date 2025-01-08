import styled from "@emotion/styled"
import { Link } from "react-router"

export default function Nav() {
    return (
        <NavWrapper>
            <div>
                <Link to="/about">ABOUT</Link>

            </div>
            <div>

                <Link to="/">BOARD</Link>
            </div>
            <div>

                <Link to="/signup">SIGN UP</Link>
            </div>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
text-align: center;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 7.5vh;
width: 100vw;
background-color: #4f4f4f;
margin: 0px;
a {
    color: white;
    text-decoration: none;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
}
a:hover {
    background-color: rgba(92, 92, 92, 0.5);
    border-bottom: 1px solid #ffffff;

}


`