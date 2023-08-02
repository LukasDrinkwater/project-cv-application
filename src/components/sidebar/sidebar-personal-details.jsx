import { useState } from "react";
import { LineInputText } from "./LineInputText";

// Component that creates the personal details box
function PersonalDetailsBox({ data, setData }) {
  const updateData = (propToUpdate, value) => {
    // prevData is a variable you can access when running an arrow
    // function when calling a set function.
    setData((prevData) => ({
      ...prevData,
      [propToUpdate]: value,
    }));
  };

  return (
    <div className="personalDetailsContainer">
      <h2>Personal Details</h2>
      <form>
        <LineInputText
          label={"Full Name"}
          placeholder={"First and last name"}
          className={"fullNameInputContainer"}
          forProp={"name"}
          value={data.name}
          handleSetFullName={updateData}
        />
        <LineInputText
          label={"Email"}
          placeholder={"Email"}
          className={"emailInputContainer"}
          forProp={"email"}
          value={data.email}
          handleSetFullName={updateData}
        />
        <LineInputText
          label={"Phone Number"}
          placeholder={"Phone Number"}
          className={"phoneNumberInputContainer"}
          forProp={"phoneNumber"}
          value={data.phoneNumber}
          handleSetFullName={updateData}
        />
        <LineInputText
          label={"Address"}
          placeholder={"City/Town/Country"}
          className={"addressInputContainer"}
          forProp={"address"}
          value={data.address}
          handleSetFullName={updateData}
        />
      </form>
    </div>
  );
}

export { PersonalDetailsBox };
