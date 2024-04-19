import GoogleImage from "../assets/images/Google.png";

const Google = () => {
  return (
    <div>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="flex flex-col p-6 m-3 space-y-10
        rounded-lg"
        >
          <div>
            <img
              className="mx auto w-[400px]"
              src={GoogleImage}
              alt="Google Image Logo"
            />
          </div>
          <div className="space-y-10">
            <input
              className="uppercase tracking-wide hover:shadow-lg border-2 p-2 m-3 rounded-2xl font-sans w-full text-center font-light"
              type="text"
              placeholder="Search here"
            />
            <div className="flex items-center justify-center space-x-10">
              <button className="bg-slate-100 p-3 rounded-md hover:bg-slate-200">
                Google Search
              </button>
              <button className="bg-slate-100 p-3 rounded-md hover:bg-slate-200">
                Im Feeling Lucky
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Google;
