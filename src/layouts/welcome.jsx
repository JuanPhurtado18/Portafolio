import Img from "../img/ImagenWelcome.png";

function Welcome() {
  return (
    <div className="flex items-center justify-between h-screen px-15    text-white">
      <div className="text-left">
        <p className="text-4xl font-bold text-blue-500 mb-4">Hola!</p>
        <h1 className="text-5xl font-bold text-blue-500 mb-4">
          Soy Juan Pablo Hurtado
        </h1>
        <p className="text-3xl text-blue-500">Frontend Developer</p>
      </div>
      <div>
        <img className="h-80" src={Img} alt="developer" />
      </div>
    </div>
  );
}

export default Welcome;
