import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import heroesApi from "../../api/HeroesApi";

export const HeroPage = () => {

  const navigate = useNavigate();


  const regresar = () => {
    navigate(-1);
  }

  const [getHeroes, setGetHeroes] = useState([]);

  const { heroId } = useParams();

  useEffect(() => {
    obtenerHeroes();
  }, []);

  const obtenerHeroes = async () => {
    try {
      const respuesta = await heroesApi.get(`/superheroes/${heroId}`);
      setGetHeroes(respuesta.data);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <>
      <div
        key={getHeroes.id}
        className="w-1/1 sm:w-1/2 grid sm:grid-cols-2 rounded-2xl shadow-2xl bg-gray-900 m-8 animate__animated animate__fadeInLeft"
      >
        <img className="rounded-t-2xl w-full" src={getHeroes.imagen} />
        <div className="px-6 py-4">
          <div className="text-xl mb-2">
            <span className="font-bold text-yellow-500">Nombre:</span>
            {" "}
            {getHeroes.nombre}
          </div>
          <div className="text-xl mb-2">
            <span className="font-bold text-yellow-500">Editorial:</span>
            {" "}
            {getHeroes.editorial}
          </div>
          <div className="text-xl mb-2">
            <span className="font-bold text-yellow-500">Estreno:</span>
            {" "}
            {getHeroes.estreno}
          </div>
          <span className="text-xl font-bold text-yellow-500">
            Descripción:{" "}
          </span>
          <p className="text-gray-400 text-base text-justify mt-4 mb-4">
            {getHeroes.descripcion}
          </p>
          <span className="text-xl font-bold text-yellow-500">Poderes: </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-800">
            {getHeroes.poderes}
          </span>
          <button onClick={regresar} className="w-full bg-indigo-500 px-8 py-2 mt-8 mb-6 rounded-lg uppercase font-bold hover:bg-indigo-700">
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};
