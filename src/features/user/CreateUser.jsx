import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <section className="mx-auto px-4 py-10 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
          <h3 className="text-center text-gray-700 text-lg font-medium mb-6">
            Welcome! Please start enter your name:
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300
                       placeholder-gray-400 text-gray-700 bg-gray-50"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {username !== "" && (
              <button
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 
            text-white font-medium py-3 px-6 rounded-lg
            hover:from-orange-600 hover:to-yellow-600 
            transform hover:scale-[1.02] transition-all duration-200
            shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

export default CreateUser;
