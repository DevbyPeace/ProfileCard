import { Skill } from "./Skill";

export function SkillList() {
  return (
    <div className="skill-list">
      <Skill language="HTML+CSS" emoji="💪🏿" colour="red" />
      <Skill language="Javascript" emoji="💪🏿" colour="yellow" />
      <Skill language="Web design" emoji="👶🏻" colour="lightgreen" />
      <Skill language="Git and Github" emoji="👍🏻" colour="red" />
      <Skill language="React js" emoji="👶🏻" colour="cyan" />
      <Skill language="Svelte" emoji="👎🏻" colour="red" />
    </div>
  );
}
