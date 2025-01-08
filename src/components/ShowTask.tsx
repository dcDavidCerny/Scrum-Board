import styled from "@emotion/styled";
import { useParams } from "react-router";
import { getTaskByID } from "./localStorage";

interface TaskProps {}

export default function ShowTask({}: TaskProps) {
  const { id } = useParams<{ id: string }>();
  const task = getTaskByID(id!);

  const title = task?.title;
  const description = task?.description;
  const storyPoints = task?.storyPoint;

  if (!task) {
    return <h1>Task not found</h1>;
  }

  return (
    <ShowTaskWrapper>
      <div>
        <h1>{title}</h1>
        <div>
          <h2>Description:</h2>
          <p>{description}</p>
        </div>
        <div>
          <h3>Story Points:</h3>
          <p>{storyPoints}</p>
        </div>
      </div>
    </ShowTaskWrapper>
  );
}

const ShowTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 80vw;
  background-color: #555555;
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
`;
