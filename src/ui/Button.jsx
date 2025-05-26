import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-yellow-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-lg border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-6 py-3",
    alternative:
      "w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium py-3 px-6 rounded-lg hover:from-orange-600 hover:to-yellow-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl",
    alternative_small:
      "bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium px-4 py-2 md:px-5 md:py-2.5 text-xs rounded-lg hover:from-orange-600 hover:to-yellow-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
