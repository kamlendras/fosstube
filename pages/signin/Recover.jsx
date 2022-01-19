function Recover() {
    return (
      <center>
        <section className="text-gray-600 body-font relative   ">
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8   ">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md  ">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Recover Password
              </h2>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send Recovery Info
              </button>
              <p className="text-xs text-gray-500 mt-3">
                If your email address exists in our database, you will receive a
                password recovery link at your email address in a few minutes.
              </p>
            </div>
          </div>
        </section>
      </center>
    );
}

export default Recover
