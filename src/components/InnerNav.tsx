import styled from "@emotion/styled"
import { CreateTaskModal } from "./CreateTaskModal";
import { useState } from "react";

export default function InnerNav() {
    const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
    return (
        <InnerNavWrapper>
            <div className="addNewTaskZone" onClick={
                () => {
                    setShowCreateTaskModal(true);
                }
            }>ADD NEW TASK</div>


            {showCreateTaskModal && <CreateTaskModal closeModal={() => {
                setShowCreateTaskModal(false);


            }} />}


        </InnerNavWrapper>
    )
}

const InnerNavWrapper = styled.div`
align-items: center;
display: flex;
flex-direction: row;
justify-content: center;
background-color: transparent;
/* height: 5vh; */
width: 100vw;
margin: 0px;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);

.addNewTaskZone{
    height: 50px;
    width: 200px;
    border: 1px solid transparent;
    background: linear-gradient(180deg, rgba(0,255,0,0.5) 0%, rgba(0,255,0,0.5) 5%, rgba(0,255,0,0.5) 5%, rgba(0,255,0,0.5) 95%, rgba(0,255,0,0.5) 95%, rgba(0,255,0,0.5) 100%);
    border-radius: 3px;
    color: white;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
`