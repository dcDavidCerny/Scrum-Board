import styled from "@emotion/styled";
import { useParams } from "react-router";
import { getTaskByID, editTask } from "./localStorage";
import { useState } from "react";

interface TaskProps {}

export default function ShowTask({}: TaskProps) {
  const [isEditting, setisEditting] = useState(false);

  const { id } = useParams<{ id: string }>();
  const task = getTaskByID(id!);

  const title = task?.title;
  const description = task?.description;
  const storyPoints = task?.storyPoint;

  if (!task) {
    return <h1>Task not found</h1>;
  }

  const handleSave = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      storyPoint: storyPoints,
    };
    editTask(id!, updatedTask);
    setisEditting(false);
  };

  return (
    <ShowTaskWrapper>
      <div>
        {isEditting ? (
          <>
            <h1>
              Task:{" "}
              <input type="text" className="inputH1" defaultValue={title} onChange={(e) => (title = e.target.value)} />
            </h1>
            <div>
              <h2>Description:</h2>
              <textarea
                className="pDescription"
                defaultValue={description}
                onChange={(e) => (description = e.target.value)}
              />
            </div>
            <div>
              <span className="spanStoryPoints">
                Story Points:{" "}
                <input
                  type="number"
                  className="blueSpan"
                  defaultValue={storyPoints}
                  onChange={(e) => (storyPoints = Number(e.target.value))}
                />
              </span>
            </div>
            <br />
            <button className="saveBtn" onClick={handleSave}>
              SAVE
            </button>
          </>
        ) : (
          <>
            <h1>Task: {title}</h1>
            <div>
              <h2>Description:</h2>
              <p className="pDescription">{description}</p>
            </div>
            <div>
              <span className="spanStoryPoints">
                Story Points: <span className="blueSpan">{storyPoints}</span>
              </span>
            </div>
            <br />
            <button className="editBtn" onClick={() => setisEditting(true)}>
              EDIT
            </button>
          </>
        )}
      </div>
    </ShowTaskWrapper>
  );
}

// some other day find out how to actually edit the task :(
// also, the styling is not the best
// also, I wanna stop coding for today - forever

const ShowTaskWrapper = styled.div`
  padding: 50px;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 57vw;
  background-color: #555555;
  h1 {
    font-size: 40px;
  }
  .inputH1 {
    font-size: 40px;
    width: 100%;
  }
  h2 {
    font-size: 30px;
  }
  span {
    font-size: 20px;
  }
  p {
    font-size: 20px;
  }

  .pDescription {
    white-space: pre-line;
    overflow: auto;
    height: 450px;
  }

  textarea {
    width: 100%;
    height: 200px;
    font-size: 20px;
  }
  .spanStoryPoints {
  }
  .blueSpan {
    color: #00d9ff;
  }

  .editBtn {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 20px;
    background-color: #00d9ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
