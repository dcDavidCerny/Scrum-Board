import styled from "@emotion/styled"
import Button from '@mui/material/Button';

export default function InnerNav() {
    return (
        <InnerNavWrapper>
            <div>
                {/* ain't working */}
                <Button variant="contained" color="success">
                    ADD NEW TASK
                </Button>

            </div>
            <div>
                <button>DROP TO REMOVE </button>


            </div>
        </InnerNavWrapper>
    )
}

const InnerNavWrapper = styled.div`
text-align: center;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 50px;
background-color: transparent;
height: 5vh;
width: 100vw;
margin: 0px;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
padding-bottom: 10px;

button {
    height: 40px;
    margin-bottom: 5px;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,0.5) 5%, rgba(255,255,255,0.5) 95%, rgba(255,255,255,1) 95%, rgba(255,255,255,1) 100%);
    border: none;
    border-radius: 8px;
    color: white;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
}

`