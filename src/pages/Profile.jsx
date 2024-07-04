import { useLocation, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const handleGotoHome = () => {
    navigate("/");
  };
  const location = useLocation();
  const user = location?.state;
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="mt-10 border p-10">
          <h1 className="text-5xl">Profile page</h1>
          <div>
            <p>Username : {user?.name}</p>
            <p>Useremail : {user?.country}</p>
          </div>
          <button
            className="bg-indigo-500 px-6 py-2 mt-5"
            onClick={handleGotoHome}
          >
            Go to Home
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
