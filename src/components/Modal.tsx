import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

export const Modal = ({ children }: Props) => {
  return (
    <Overlay className="modal">
      <StyledModal>{children}</StyledModal>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(5px);
`;

const StyledModal = styled.div`
  background-color: var(--white);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  z-index: 100;
  position: relative;
  padding: 80px;
  overflow: auto;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
  }
  button {
    color: white;
    border: none;
    padding: 15px;
    border-radius: 5px;
    width: 150px;
    cursor: pointer;
  }
  button:hover,
  button:active {
  }
`;
