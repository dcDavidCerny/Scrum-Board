import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import styled from "@emotion/styled"
import InnerNav from "./components/InnerNav";
import InnerFooter from "./components/InnerFooter";
import ToDoWrapper from "./components/TasksWrappers/ToDoWrapper";
import InProgressWrapper from "./components/TasksWrappers/InProgressWrapper";
import FinishedWrapper from "./components/TasksWrappers/FinishedWrapper";


export default function App() {
  return (
    <AppWrapper>
      <div className="main">
        <Nav />

        <div className="content">
          <InnerNav />
          <div className="tasksStorageDiv">
            <ToDoWrapper />
            <InProgressWrapper />
            <FinishedWrapper />
          </div>
          <InnerFooter />
        </div>
        <Routes>
          {/* pro "/" */}
          <Route path="/board" element={<div />} />

          <Route path="/" element={<div />} />


          {/* pro vše ostatní kromě toho co bylo definované nahoře nad touto poslední routhe path */}
          <Route path="*" element={<div> 404: not found </div>} />
        </Routes>

        <Footer></Footer>
      </div>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0.5) 5%, rgba(0,0,0,0.5) 95%, rgba(0,0,0,1) 95%, rgba(0,0,0,1) 100%);


  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
    height: 100%;
  }

  .tasksStorageDiv {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 80%;
    gap: 50px;
    flex-grow: 1;
  }
`