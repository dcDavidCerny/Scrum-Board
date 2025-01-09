import styled from "@emotion/styled";
import { useParams } from "react-router";
import { getTaskByID, editTask } from "./localStorage";
import { useEffect, useState } from "react";

interface TaskProps {}

export default function ShowTask({}: TaskProps) {
  const [isEditting, setisEditting] = useState(false);

  const { id } = useParams<{ id: string }>();
  const task = getTaskByID(id!);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedstoryPoint, setSelectedStoryPoint] = useState<null | number>(null);

  useEffect(() => {
    setTitle(task?.title || "");
    setDescription(task?.description || "");
    setSelectedStoryPoint(task?.storyPoint || null);
  }, [task?.title, task?.description, task?.storyPoint]);

  if (!task) {
    return <h1>Task not found</h1>;
  }

  const handleSave = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      storyPoint: selectedstoryPoint || 0,
    };
    editTask(updatedTask);
    setisEditting(false);
  };

  return (
    <ShowTaskWrapper>
      <div>
        {isEditting ? (
          <>
            <h1>
              Task:{" "}
              <input type="text" className="inputH1" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
            </h1>
            <div>
              <h2>Description:</h2>
              <textarea
                className="pDescription"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <span className="spanStoryPoints">
                Story Points:{" "}
                <input
                  type="number"
                  className="blueSpan"
                  defaultValue={selectedstoryPoint!}
                  onChange={(e) => setSelectedStoryPoint(Number(e.target.value))}
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
                Story Points: <span className="blueSpan">{selectedstoryPoint}</span>
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
    display: flex;
    flex-direction: row;
  }
  .inputH1 {
    font-size: 40px;
    width: 100%;
    margin-left: 10px;
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
    height: 400px;
    width: 1000px;
  }

  textarea {
    width: 100%;
    font-size: 20px;
  }
  .spanStoryPoints {
  }
  .blueSpan {
    color: #00d9ff;
  }

  .editBtn {
    margin-top: 10px;
    padding: 8px 20px;
    font-size: 20px;
    background-color: #00d9ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .saveBtn {
    margin-top: 10px;
    padding: 8px 20px;
    font-size: 20px;
    background-color: #06e90d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
