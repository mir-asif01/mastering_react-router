import { Link } from "react-router-dom";

function Card({ post }) {
  const { id, title, body, views } = post;
  return (
    <>
      <Link>
        <div className="p-3 border rounded-md cursor-pointer">
          <h1 className="text-justify mb-2 font-semibold">{title}</h1>
          <h1>
            <span className="text-xs mr-2 text-white bg-slate-800 px-2 py-1 rounded-3xl">
              {views}
            </span>
            Views
          </h1>
        </div>
      </Link>
    </>
  );
}

export default Card;
