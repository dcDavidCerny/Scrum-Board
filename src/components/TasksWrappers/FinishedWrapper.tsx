import styled from "@emotion/styled"

export default function FinishedWrapper() {
    return (
        <FinishedWrapperWrapper>
            <div>
                <h1>FINISHED:</h1>
            </div>
            <div>
                <ul>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li className="dropLi">Drop Tasks Here</li>
                </ul>
            </div>
        </FinishedWrapperWrapper>
    )
}

const FinishedWrapperWrapper = styled.div`
width: 500px;
h1 {
    color: lime;
    text-align: center;
}
ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.dropLi {
    background-color: rgba(255, 255, 255, 0.01);
    border: 1px dotted rgba(255, 255, 255, 0.5);
    
}

li {
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
}

li:hover {
    transform: scale(1.01);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.2);
}

.dropLi:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transform: scale(1);
}
`