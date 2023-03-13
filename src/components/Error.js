// import { useRouteError } from "react-router-dom";

const Error = () => {
  //   const err = useRouteError();
  return (
    <div className="m-auto">
      <h1 className="font-bold text-3xl py-5">Oops!</h1>
      <h2 className="font-bold text-xl">Something went wrong!!</h2>
      {/* <h2>{err.status + " : " + err.statusText}</h2> */}
    </div>
  );
};

export default Error;
