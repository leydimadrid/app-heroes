import logoMarvel from "../../assets/logoMarvel.png";
import logoDC from "../../assets/logoDC.png";
import { useNavigate } from "react-router-dom";


export const InicioPage = () => {

  const navigate = useNavigate();

  const onMarvel = () => {
    navigate("/marvel");
  }

  const onDC = () => {
    navigate("/dc");
  }

  return (
    <>
      <h1 className="text-center font-bold text-6xl uppercase mt-12 animate__animated animate__zoomInDown">
        ¿Qué <span className=" text-yellow-500">Team</span> eres?{" "}
      </h1>
      <div className="flex flex-col justify-center items-center mt-20">
        <img onClick={onMarvel} src={logoMarvel} className="w-80 rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse"/>
        <img onClick={onDC} src={logoDC} className="w-60 rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse"/>

      </div>
    </>
  );
};
