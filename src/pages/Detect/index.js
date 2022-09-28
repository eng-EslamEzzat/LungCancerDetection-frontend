import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetection, clearDetection } from "../../redux/detectionSlice";
import "./detect.css";
import bg from "../../assets/background.svg";

export default function Home() {
  const { image, result } = useSelector((state) => state.detection);
  const dispatch = useDispatch();

  const changeHandler = async (event) => {
    dispatch(clearDetection());

    event.target.files[0]&&dispatch(
      addDetection({
        image: URL.createObjectURL(event.target.files[0]),
        result
      })
    );

    const formdata = new FormData();
    formdata.append("image", event.target.files[0]);
    await fetch("http://127.0.0.1:8000/api/model/", {
      method: "POST",
      body: formdata
    })
      .then((response) => response.json())
      .then((detection) =>
        dispatch(
          addDetection({
            result: detection.result,
            image: URL.createObjectURL(event.target.files[0])
          })
        )
      )
      .catch((err) => console.error(err));
  };

  const ResultComponent = () => (
    <div className="result">
      <div className="icon">
        {result === "Normal Case" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-check-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-exclamation-triangle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        )}
      </div>
      <div className="resultContent">{result}</div>
    </div>
  );

  return (
    <div className="DetectPage" style={{ backgroundImage: `url(${bg})` }}>
      <div className="detectionContent">
        <div className="wrapper">
          <div className="file-upload">
            <input type="file" onChange={changeHandler} />
            <svg
              className="asd w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="uploadImage">
        <img src={image} alt="" width="400" height="400" /> <br />
      </div>
      {result&&<ResultComponent />}
    </div>
  );
}
