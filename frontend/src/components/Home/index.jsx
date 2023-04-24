import "./index.scss";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-cont">
      <div className="hero">
        <h1 className="home-header"> Welcome to AiSpy </h1>
        <h2 className="home-subheader">
          Meet the new standard for modern surveillance systems.
        </h2>
        <button className="sign-up" onClick={() => navigate("/auth")}>
          Start Now
        </button>
      </div>
    </div>
  );
}
