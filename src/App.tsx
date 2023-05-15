import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Dammam", "Khobar", "Dahran", "Abha"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [warningFlag, setWarningFlag] = useState(false);

  const buttonColors = ["primary", "secondary", "warning"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const getColorIndex = (buttonColors: string[], currentIndex: number) => {
    if (currentIndex < buttonColors.length - 1) return currentIndex + 1;
    return 0;
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <br></br>
      <Button
        color={buttonColors[currentIndex]}
        onClick={() =>
          setCurrentIndex(getColorIndex(buttonColors, currentIndex))
        }
      >
        Click Me
      </Button>
      <hr></hr>
      {warningFlag && (
        <Alert onClick={() => setWarningFlag(false)}>
          <p>
            <strong>Warning</strong>, You Clicked the wrong Button
          </p>
        </Alert>
      )}
      <Button color="danger" onClick={() => setWarningFlag(true)}>
        Don't Click Me
      </Button>
    </div>
  );
}

export default App;
