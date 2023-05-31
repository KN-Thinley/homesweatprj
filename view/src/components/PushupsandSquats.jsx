import { Link } from "react-router-dom";

const PushupsandSquats = () => {
  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form action="" className="inline-block login-form py-8 px-20">
          <h1 className="text-center font-sans text-2xl font-bold pb-8">
            Pushup Max
          </h1>
          <div className="inputfields flex flex-col gap-4 pb-8">
            <input
              type="number"
              className="input-field font-sans"
              placeholder="Pushups"
            />
          </div>
          <h1 className="text-center font-sans text-2xl font-bold pb-8">
            Squats Max
          </h1>
          <div className="inputfields flex flex-col gap-4 pb-8">
            <input
              type="number"
              className="input-field font-sans"
              placeholder="Squats"
            />
          </div>
          <Link to="/user">
            <input
              type="button"
              value="Done"
              className="text-center text-white font-sans p-3 sign-in"
            />
          </Link>
        </form>
      </div>
    </>
  );
};

export default PushupsandSquats;
