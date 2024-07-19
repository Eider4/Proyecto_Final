import { Link, Outlet } from "react-router-dom";

const NoPage = () => {
  const submit = () => {
    console.log("suscrito");
  };
  return (
    <h1>
      <form>
        <input type="text" />
        <button onClick={submit}> <Link to='electronics'>Registrarse</Link></button>
      </form>
      <Outlet />
    </h1>
  );
};

export default NoPage;
