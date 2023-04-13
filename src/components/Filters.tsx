import React from "react";
import { Context } from "../store/context";

type Props = {};

const cats = [
  "all products",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Filters = (props: Props) => {
  const [context, setContext] = React.useContext(Context);

  React.useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <div className="mb-3 mb-lg-0">
      <h5 className="mb-4">Categories:</h5>
      {cats.map((cat, id) => (
        <div
          onClick={() => setContext({ activeCat: cat })}
          key={id}
          className="cat mb-2 text-capitalize cursor-pointer"
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Filters;
