import styled from "@emotion/styled";
import { editTask, getTasks, Task, useTasksChanged } from "./localStorage";
import { Link } from "react-router";

interface Props {
  title: string;
  status: "todo" | "inProgress" | "done";
  draggedTask: null | Task;
  setDraggedTask: (task: null | Task) => void;
}

export default function TaskColumnWrapper({ title, status, draggedTask, setDraggedTask }: Props) {
  useTasksChanged();

  const tasks = getTasks();
  const filteredTasks = tasks.filter((task) => task.status === status);

  const handleDragStart = (e: React.DragEvent) => {
    const target = e.target as HTMLLIElement;
    const id = target.id;
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setDraggedTask(task);
    }
  };

  return (
    <TaskColumnWrapperWrapper>
      <div>
        <div>
          <h1 className={`title-${status}`}>{title}:</h1>
        </div>
        <ul
          className={draggedTask ? "draggedUl" : ""}
          onDrop={(e) => {
            e.preventDefault();
            if (draggedTask) {
              editTask({ ...draggedTask, status });
              setDraggedTask(null);
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
        >
          {filteredTasks.map((task) => {
            return (
              <li id={task.id} draggable onDragStart={handleDragStart}>
                <Link to={`/task/${task.id}`}>
                  <span>{task.title}</span>{" "}
                </Link>

                <span>({task.storyPoint}SP)</span>
              </li>
            );
          })}
          <li className="dropLi">Drop Tasks Here</li>
        </ul>
      </div>
    </TaskColumnWrapperWrapper>
  );
}

const TaskColumnWrapperWrapper = styled.div`
  width: 500px;
  height: 100%;
  h1 {
    text-align: center;
  }
  h1.title-todo {
    color: var(--black);
  }

  h1.title-inProgress {
    color: var(--black);
  }

  h1.title-done {
    color: var(--black);
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 500px;
    width: 100%;
    overflow: auto;
    overflow-x: hidden;
    padding: 20px;
    gap: 5px;
    background-color: #ffffff;
  }

  .dropLi {
    cursor: default;
    text-align: center;
    flex-grow: 1;
    align-content: center;
  }

  li:not(.dropLi) {
    border: 1px solid var(--blackLighter);
    color: black;
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: move;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    user-select: none;
  }

  a {
    cursor: pointer;
    color: var(--black) !important;

    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .draggedUl li {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .draggedUl {
    border: 1px dotted #ffa500;
  }

  li:hover:not(.dropLi) {
    transform: scale(1.01);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
