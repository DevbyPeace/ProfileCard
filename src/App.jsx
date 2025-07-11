import { Avatar } from "./Avatar";
import { Intro } from "./Intro";
import { SkillList } from "./SkillList";

export function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
