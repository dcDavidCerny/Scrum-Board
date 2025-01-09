import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import styled from "@emotion/styled";
import InnerNav from "./components/InnerNav";
import InnerFooter from "./components/InnerFooter";
import TaskColumnWrapper from "./components/TaskColumnWrapper";
import { Task } from "./components/localStorage";
import { useEffect, useState } from "react";
import ShowTask from "./components/ShowTask";
import { SignupComponent } from "./components/SignUp";
import { AboutComponent } from "./components/About";

export default function App() {
  const [draggedTask, setDraggedTask] = useState<null | Task>(null);

  useEffect(() => {
    const mouseUp = () => {
      setDraggedTask(null);
    };
    document.body.addEventListener("mouseup", mouseUp);
    return () => {
      document.body.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <AppWrapper>
      <div className="main">
        <Nav />

        <Routes>
          {/* pro "/" */}
          <Route
            path="/"
            element={
              <div className="content">
                <InnerNav />
                <div className="tasksStorageDiv">
                  <TaskColumnWrapper
                    title="TO DO"
                    status="todo"
                    draggedTask={draggedTask}
                    setDraggedTask={setDraggedTask}
                  />
                  <TaskColumnWrapper
                    title="IN PROGRESS"
                    status="inProgress"
                    draggedTask={draggedTask}
                    setDraggedTask={setDraggedTask}
                  />
                  <TaskColumnWrapper
                    title="DONE"
                    status="done"
                    draggedTask={draggedTask}
                    setDraggedTask={setDraggedTask}
                  />
                </div>
                <InnerFooter draggedTask={draggedTask} setDraggedTask={setDraggedTask} />
              </div>
            }
          />

          <Route path="/task/:id" element={<ShowTask></ShowTask>} />

          <Route path="/about" element={<AboutComponent />} />

          <Route path="/signup" element={<SignupComponent />} />
          {/* pro vše ostatní kromě toho co bylo definované nahoře nad touto poslední routhe path */}
          <Route path="*" element={<div> 404: not found </div>} />
        </Routes>

        <Footer></Footer>
      </div>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background: var(--white);
  }

  .content {
    color: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
    height: 100%;
  }

  .tasksStorageDiv {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    gap: 50px;
    flex-grow: 1;
  }
`;
