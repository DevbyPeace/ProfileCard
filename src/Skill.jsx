export function Skill({ language, emoji, colour }) {
  return (
    <div style={{ backgroundColor: colour }} className="skill">
      {language} {emoji}
    </div>
  );
}
