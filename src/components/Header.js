import Button from "./Button.js"

export default function Header() {
  return (
    <div className="header">
      <div className="header-name">
          <Button text="Axel Vigroux" to="/" />
      </div>
      <div className="header-buttons">
        <Button text="About" to="about"/>
        <Button text="Work" to="work"/>
        <Button text="Contact" to="contact"/>
      </div>
    </div>
  );
}
