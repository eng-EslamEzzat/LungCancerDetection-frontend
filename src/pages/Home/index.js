import bg from "../../assets/background.svg";
import avatar from "../../assets/avatar.svg";
import "./home.css";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();
  
  const clickHandler = () => navigate("/detect")

  return (
    <div className="HomePage" style={{ backgroundImage: `url(${bg})` }}>
      <div className="content">
        <small className="small">Welcome to our</small>
        <h1>
          LUNG CANCER
          <br />
          DETECTION
          <br />
          WEBSITE
        </h1>
        <h4>Developed by Eslam Ezzat</h4>
        <Button clickHandler={clickHandler}/>
      </div>
      <div className="avatar">
        <img src={avatar} alt="lung cancer" />
      </div>
    </div>
  );
}
