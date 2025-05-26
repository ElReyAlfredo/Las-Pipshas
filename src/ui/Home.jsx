import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
        The best pizza{" "}
        <span className="text-orange-500 inline-block transform hover:scale-105 transition-transform duration-300">
          (Pipsha)
        </span>
      </h2>

      <div className="mt-8">
        <p className="text-lg md:text-xl text-orange-500 font-medium mb-2">
          Straight out of the oven, straight to you.
        </p>
        <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="alternative">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
