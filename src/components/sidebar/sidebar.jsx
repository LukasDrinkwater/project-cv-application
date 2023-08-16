import { PersonalDetailsBox } from "./sidebar-personal-details";
import { EducationBox } from "./sidebar-education";
import { ExperienceBox, ExperienceContainer } from "./sidebar-experience";
import { SubmitForm } from "./submit-form";

// component that creates the sidebar structure and calls the personal details,
// education and experience components.
function Sidebar({
  personalData,
  setPersonalData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
}) {
  return (
    <div className="sidebarContainer">
      <PersonalDetailsBox data={personalData} setData={setPersonalData} />
      <EducationBox data={educationData} setData={setEducationData} />
      <ExperienceContainer
        experienceData={experienceData}
        setExperienceData={setExperienceData}
      />
      <SubmitForm />
    </div>
  );
}

export { Sidebar };
