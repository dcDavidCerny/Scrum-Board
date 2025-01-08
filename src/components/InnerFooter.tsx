import styled from "@emotion/styled"
import { deleteTask, Task } from "./localStorage";

interface Props {
    draggedTask: null | Task;
    setDraggedTask: (task: null | Task) => void;
}

export default function InnerFooter({ draggedTask, setDraggedTask }: Props) {
    return (
        <InnerFooterWrapper>
            <div className="deleteZone" onDragOver={(e) => {
                e.preventDefault();
            }}
                onDrop={(e) => {
                    e.preventDefault();
                    setDraggedTask(null);
                    if (draggedTask && draggedTask.id) {
                        deleteTask(draggedTask.id);
                    }
                }}>
                DROP TO REMOVE
            </div>


        </InnerFooterWrapper>
    )
}

const InnerFooterWrapper = styled.div`
border-top: 1px solid rgba(255, 255, 255, 0.1);
height: 5vh;
width: 100vw;
display: flex;
flex-direction: row;
justify-content: center;
margin: 0px;
font-weight: 100;
background-color: transparent;
.deleteZone {
    height: 100%;
    width: 200px;
    border: 1px solid transparent;
    background: linear-gradient(180deg, rgba(255,0,0,0.5) 0%, rgba(255,0,0,0.5) 5%, rgba(255,0,0,0.5) 5%, rgba(255,0,0,0.5) 95%, rgba(255,0,0,0.5) 95%, rgba(255,0,0,0.5) 100%);
    border-radius: 3px;
    color: white;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

`