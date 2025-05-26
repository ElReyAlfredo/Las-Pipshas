import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-lg text-white font-bold md:block">
      {username}
    </div>
  );
}

export default Username;
