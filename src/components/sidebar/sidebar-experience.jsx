import { useState } from "react";
import { v4 as uuid } from "uuid";

function ExperienceBox() {
  // const experienceList =

  return (
    <div className="experienceContainer">
      <h2>Professional Experience</h2>
      <form>
        <CompanyInput />
        <PositionInput />
        <StartDateExperienceInput />
        <EndDateExperienceInput />
        <ExperienceLocationInput />
        <ExperienceDescription />
      </form>
    </div>
  );
}

function CompanyInput() {
  const [companyValue, setCompany] = useState("");

  return (
    <div className="experienceInputContainer">
      <label>Company Name</label>
      <input
        type="text"
        value={companyValue}
        placeholder="Company Name"
        onChange={(event) => setCompany(event.target.value)}
      />
    </div>
  );
}

function PositionInput() {
  const [positionValue, setPosition] = useState("");

  return (
    <div className="positionInputContainer">
      <label>Position</label>
      <input
        type="text"
        value={positionValue}
        placeholder="Position"
        onChange={(event) => setPosition(event.target.value)}
      />
    </div>
  );
}

function StartDateExperienceInput() {
  const [startDateValue, setStartDate] = useState("");

  return (
    <div className="startDateInputContainer">
      <label>Start Date</label>
      <input
        type="text"
        value={startDateValue}
        placeholder="Start Date"
        onChange={(event) => setStartDate(event.target.value)}
      />
    </div>
  );
}

function EndDateExperienceInput() {
  const [endDateValue, setEndDate] = useState("");

  return (
    <div className="endDateInputContainer">
      <label>End Date</label>
      <input
        type="text"
        value={endDateValue}
        placeholder="End Date"
        onChange={(event) => setEndDate(event.target.value)}
      />
    </div>
  );
}

function ExperienceLocationInput() {
  const [locationValue, setLocation] = useState("");

  return (
    <div className="experienceLocationContainer">
      <label>Location</label>
      <input
        type="text"
        value={locationValue}
        placeholder="Location"
        onChange={(event) => setLocation(event.target.value)}
      />
    </div>
  );
}

// Component that is the contaner for the expereince list
function ExperienceDescription() {
  const [lines, setLines] = useState([{ id: uuid(), text: "" }]);

  const handleDelete = (id) => {
    const newLines = lines.filter((line) => line.id !== id);
    setLines(newLines);
  };

  const handleAddLine = () => {
    let newLine = { id: uuid(), text: "" };
    setLines([...lines, newLine]);
    console.log("add");
  };

  const handleChange = (line, e) => {
    // console.log(line.id);
    const arrayIndex = lines.findIndex((listLine) => listLine.id === line.id);
    const newLines = lines.slice();
    newLines[arrayIndex].text = e.target.value;
    setLines(newLines);
  };

  return (
    <div className="experienceLinesContainer">
      <label>Tasks/Responsibilities</label>
      <ExperienceLines
        lines={lines}
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
      <button
        type="button"
        onSubmit={(event) => event.preventDefault}
        onClick={() => handleAddLine()}
      >
        Add
      </button>
    </div>
  );
}

// Component that creates the experience lines
function ExperienceLines(props) {
  const lines = props.lines;
  const handleDelete = props.handleDelete;
  const handleChange = props.handleChange;

  return (
    <div className="experienceLists">
      {lines.map((line) => (
        <div className="experienceLine" key={line.id}>
          <textarea
            value={line.text}
            placeholder={"Description/Responsibility"}
            onChange={(event) => handleChange(line, event)}
          ></textarea>
          <button onClick={() => handleDelete(line.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export { ExperienceBox };