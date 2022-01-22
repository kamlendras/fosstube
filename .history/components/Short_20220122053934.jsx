import Nap1 from ".//Nap1";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";

function Short() {
  return (
    <div className="relative bg-white ">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Post a Coding Blog!!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Share your coding skill to the world.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left -1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-60 h-94 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <Nap1
                          a={<Avatar>H</Avatar>}
                          n={"Lester J."}
                          d={"Dec 2, 2022"}
                          i={
                            "https://miro.medium.com/max/1838/1*gDr1IQol5X617j3QV4_5Cw.png"
                          }
                          t={"Pizza with CSS"}
                          p={"p"}
                          pp={"pp"}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <Nap1
                          a={
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                          }
                          n={"Kevin S."}
                          d={"Jan 14"}
                          i={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyGY2NeC_3GnvoOl5lqvS_wge0BuA9rG-4y3DVRUAXVdZXTdUgxNVda0hajzURKa2XNQ&usqp=CAU"
                          }
                          t={"API"}
                          p={"pghg"}
                          pp={"pp"}
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <Nap1
                          className="w-full h-full object-center object-cover"
                          a={
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                              OP
                            </Avatar>
                          }
                          n={"Robert T."}
                          d={"September 14, 2020"}
                          i={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyIQhtL1dzThrj28rXGdMy5t8UUiSUKXw1f7wSeHRPwKyVDS6C-zj-m9Rk5xF2PWzFow&usqp=CAU"
                          }
                          t={"SEO"}
                          p={"pghg"}
                          pp={"pphjj"}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <Nap1
                          a={
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                              OP
                            </Avatar>
                          }
                          n={"Olga N."}
                          d={"Octorber 14, 2022"}
                          i={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvYOgCUwVhBSIo9_WR4MXUvTx8_G_lQ1Tpq8S69FFRyJfgnPP_IDW2S0LPV_ZDMm2ncQ&usqp=CAU"
                          }
                          t={"Authentication"}
                          p={"p"}
                          pp={"p"}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <Nap1
                          className="w-full h-full object-center object-cover"
                          a={
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>V</Avatar>
                          }
                          n={"Viola P."}
                          d={"September 14, 2020"}
                          i={
                            "https://www.gstatic.com/devrel-devsite/prod/v84e6f6a61298bbae5bb110c196e834c7f21fe3fb34e722925433ddb936d280c9/firebase/images/touchicon-180.png"
                          }
                          t={"Nextjs Project "}
                          p={"p"}
                          pp={"p"}
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <Nap1
                          className="w-full h-full object-center object-cover"
                          a={
                            <Avatar sx={{ bgcolor: deepPurple[600] }}>D</Avatar>
                          }
                          n={"Joanne D."}
                          d={"September 14, 2020"}
                          i={
                            "https://previews.123rf.com/images/defmorph/defmorph1902/defmorph190200017/118119260-artificial-intelligence-ai-icon-ai-brain-concept-eps-10-editable-stroke-.jpg"
                          }
                          t={"AI"}
                          p={"pghg"}
                          pp={"pphjj"}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <Nap1
                          a={<Avatar src="/logo.png" />}
                          n={"Nap"}
                          d={"September 14, 2020"}
                          i={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEp0WLprQ4xTcexoFSCjxlWlOZfkz1C-dmaTvrOn9knjZOaGiWZ24yYHUCar3eLkS08JI&usqp=CAU"
                          }
                          t={"Search engine"}
                          p={"pghg"}
                          pp={"pphjj"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Post
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Short;
