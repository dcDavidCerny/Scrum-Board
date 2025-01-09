import { useState } from "react";
import { Modal } from "./Modal";
import styled from "@emotion/styled";
import { saveNewTask } from "./localStorage";

interface Props {
  closeModal: () => void;
}

const possibleStoryPoints = [1, 2, 3, 5, 8, 13, 20];
export const CreateTaskModal = ({ closeModal }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedstoryPoint, setSelectedStoryPoint] = useState<null | number>(null);

  const handleAddTask = () => {
    if (title === "" || description === "" || selectedstoryPoint === null) {
      alert("Please fill all the fields");
    } else if (title.length < 6) {
      alert("Title must be at least 6 characters long");
    } else {
      saveNewTask(title, description, selectedstoryPoint);
      closeModal();
    }
  };

  return (
    <Modal>
      <CreateTaskModalWrapper>
        <div className="h1Div">
          <h1>Add new task</h1>
        </div>
        <div className="inputsDiv">
          <input
            className="inputTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title of the task"
          />
          <div className="storyPointsContainer">
            <h2>Story points</h2>
            <div className="storyPoints">
              {possibleStoryPoints.map((storyPoint) => {
                return (
                  <div
                    className={`storyPointBtn ${selectedstoryPoint === storyPoint ? `selected` : ""}`}
                    onClick={() => {
                      setSelectedStoryPoint(storyPoint);
                    }}
                  >
                    {storyPoint}
                  </div>
                );
              })}
            </div>
          </div>
          <textarea
            className="inputDescription"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Description of the task"
          />
        </div>
        <div className="buttonsDiv">
          <button className="btnAdd" onClick={handleAddTask}>
            Add the Task
          </button>
          <button className="btnCancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </CreateTaskModalWrapper>
    </Modal>
  );
};

const CreateTaskModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .h1Div {
  }

  h1 {
  }

  .buttonsDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  button {
    margin: 40px;
    padding: 30px 20px;
    font-size: large;
    font-weight: 600;
    text-align: center;
  }

  .inputsDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inputTitle {
    background-color: var(--blue);
    margin: 20px;
    padding: 20px 20px;
    font-size: large;
    font-weight: 600;
    width: 100%;
    border: none;
    outline: none;
  }

  .inputDescription {
    background-color: var(--blue);
    margin: 20px;
    padding: 20px 20px;
    font-size: large;
    font-weight: 600;
    width: 100%;
    height: 20vh;
    border: none;
    outline: none;
  }

  .storyPointsContainer {
  }

  .storyPoints {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .storyPointBtn {
    font-weight: bold;
    color: white;
    padding: 10px;
    background-color: var(--blue);
    border-radius: 5px;
    width: 30px;
    cursor: pointer;
  }

  .storyPointBtn.selected {
    background-color: var(--green);
  }

  .btnAdd {
    font-weight: bold;
    background-color: var(--green);
  }

  .btnCancel {
    font-weight: bold;
    background-color: var(--red);
  }
`;
