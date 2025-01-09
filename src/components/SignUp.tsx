import styled from "@emotion/styled";

export const SignupComponent = () => {
  return (
    <SignupWrapper>
      <h2>Oops! No Sign-Ups Here (For Now!)</h2>
      <p>
        Hey there! 👋 <br />
        Originally, this page was meant for user sign-ups—but I decided to keep things simple this time and stick to
        local storage for managing your Scrum Board data. No APIs, no fuss! 😅
      </p>
      <p>
        While there’s no sign-up functionality here, the Scrum Board is fully functional and ready for action. Feel free
        to dive in, create tasks, and organize your workflow—everything will be saved right here in your browser. <br />
        Thanks for stopping by, and happy sprinting! 🚀
      </p>
    </SignupWrapper>
  );
};

const SignupWrapper = styled.div`
  color: var(--black);
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 50vw;

  h2 {
    margin-bottom: 1rem;
  }
`;
