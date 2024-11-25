import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>{error?.status} {error?.statusText}</h1>
      <p>{error?.error?.message}</p>
    </div>
  );
};

export default Error;
