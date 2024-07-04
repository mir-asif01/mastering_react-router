import { Link } from "react-router-dom";

function Card({ post }) {
  const { id, title, body, views, tags } = post;
  return (
    <>
      <Link to={`/posts/${id}`}>
        <div className="p-3 border rounded-md cursor-pointer">
          <h1 className="text-justify mb-2 font-semibold">{title}</h1>
          <h1>
            <span className="text-xs mr-2 text-white bg-slate-800 px-2 py-1 rounded-3xl">
              {views}
            </span>
            Views
          </h1>
          <p className="flex justify-between items-center gap-3 mt-3">
            {tags.map((t) => (
              <span key={t} className="text-xs text-gray-600 font-semibold">
                {t}
              </span>
            ))}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Card;
