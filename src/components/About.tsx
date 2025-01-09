import styled from "@emotion/styled";

export const AboutComponent = () => {
  return (
    <AboutWrapper>
      <div className="infoDiv">
        <h1>Thank You for Visiting!</h1>
        <p>
          Hey there! <br />I just wanted to take a moment to thank you for spending some time exploring my Scrum Board
          project. What started as a straightforward addition to my GitHub portfolio turned into a rewarding challenge
          that allowed me to experiment, learn, and grow as a developer.
        </p>
        <p>
          The Scrum Board you see here is a reflection of my journey with React, JavaScript, TypeScript, and exploring
          the magic of local storage for managing data. By keeping things simple and avoiding APIs this time, I was able
          to focus on creating a functional, user-friendly tool for organizing tasks and workflows.
        </p>
        <p>
          While this project might not grow into a full-fledged product, it’s an important milestone in my learning path
          and a stepping stone toward building more ambitious applications. My ultimate goal is to keep honing my
          skills, learning from every project, and sharing my ideas with the world.
        </p>
        <p>
          If you found this Scrum Board useful, inspiring, or just a neat little tool, I’d love to hear your thoughts or
          even just know you stopped by! Feel free to connect with me or check out the rest of my portfolio on GitHub
        </p>
        <p>
          Thank you again for your time, your curiosity, and for being part of this small chapter in my developer
          journey. It means a lot! 🥰 <br />
          Warm regards, <br /> <br />
          {"\u00A0"}
          <a href="https://github.com/dcDavidCerny" target="_blank">
            Dave
          </a>
        </p>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  h1 {
    margin-bottom: 1rem;
    text-align: center;
  }

  .infoDiv {
    width: 50vw;
  }
  p {
  }

  a {
    color: #00c3ff;
    text-decoration: none;
    font-weight: 600;
  }
`;
