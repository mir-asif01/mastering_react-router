import { useLoaderData } from "react-router-dom";

function PostDetails() {
  const post = useLoaderData();
  const { title, body, tags, reactions, views } = post;
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="border p-5 rounded-md w-1/3">
          <h1 className="text-2xl font-semibold mb-3">{title}</h1>
          <p className="text-slate-900">{body}</p>
          <p className="flex justify-center items-center gap-5 mt-3">
            <span className="text-xs mr-2 text-white bg-slate-800 px-2 py-1 rounded-3xl">
              likes : {reactions?.likes}
            </span>
            <span className="text-xs mr-2 text-white bg-slate-800 px-2 py-1 rounded-3xl">
              Dislikes : {reactions?.dislikes}
            </span>
          </p>
          <p className="flex justify-between items-center gap-3 mt-3 px-10">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs border p-1 rounded-3xl border-slate-800 text-gray-600 font-semibold"
              >
                {t}
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
export default PostDetails;
