import Nap1 from "./Nap1";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import Link from "next/link";

import { red } from "@mui/material/colors";
import { green} from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import { deepOrange } from "@mui/material/colors";
import { gray } from "@mui/material/colors";
function Post3() {
  return (
    <div style={{
      position: "relative",
backgroundColor: "#ffffff",
    }} >
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48" >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Post a Coding Blog !!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Share your coding skill to the world.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left -1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-20">
                    <div className="w-44 h-64 rounded-lg ">
                        <Nap1
                           a={
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>L</Avatar>
                          }
                          n={"Lester"}
                          d={"Jun 2"}
                          i={
                            "https://miro.medium.com/max/1838/1*gDr1IQol5X617j3QV4_5Cw.png"
                          }
                          t={"Pizza with CSS"}
                          p={""}
                          pp={""}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg ">
                        <Nap1
                        
                         a={
                          <Avatar sx={{ bgcolor: blue[500] }}>L</Avatar>
                        }
                          n={"Kevin S."}
                          d={"Jan 14"}
                          i={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyGY2NeC_3GnvoOl5lqvS_wge0BuA9rG-4y3DVRUAXVdZXTdUgxNVda0hajzURKa2XNQ&usqp=CAU"
                          }
                          t={"API"}
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg ">
                        <Nap1
                          className="w-full h-full object-center object-cover"
                          a={
                            <Avatar sx={{bgcolor:red[500]}}>
                              R
                            </Avatar>
                          }
                          n={"Robert"}
                          d={"Sep 14"}
                          i={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyIQhtL1dzThrj28rXGdMy5t8UUiSUKXw1f7wSeHRPwKyVDS6C-zj-m9Rk5xF2PWzFow&usqp=CAU"
                          }
                          t={"SEO"}
                          p={"."}
                          pp={"."}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg ">
                        <Nap1
                          a={
                            <Avatar sx={{ bgcolor: green[500]}}>
                              O
                            </Avatar>
                          }
                          n={"Olga N."}
                          d={"Aug 8"}
                          i={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Android_robot_head.svg/1200px-Android_robot_head.svg.png"
                          }
                          t={"Android"}
                          p={"p"}
                          pp={"p"}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg ">
                        <Nap1
                          className="w-full h-full object-center object-cover"
                          a={
                            <Avatar sx={{ bgcolor: yellow[500] }}>V</Avatar>
                          }
                          n={"Viola P."}
                          d={"Sep 14"}
                          i={"https://my.element14.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/campaign/ai/ai-configurator.jpg"}
                          t={"Ai"}
                          p={"p"}
                          pp={"p"}
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg ">
                        <Nap1
                          className="w-full h-full object-center object-cover"
                          a={
                            <Avatar sx={{ bgcolor: blue[200] }}>D</Avatar>
                          }
                          n={"Joanne"}
                          d={"Sep 4"}
                          i={
                            "https://photos5.appleinsider.com/gallery/38563-73356-iCloud-Logo-xl.jpg"
                          }
                          t={"Cloud"}
                          p={""}
                          pp={""}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg ">
                        <Nap1
                          a={<Avatar src="/logo.png" />}
                          n={"Nap"}
                          d={"Oct 8"}
                          i={
                            "https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" }
                          t={"Search engine"}
                          p={""}
                          pp={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                passHref
                href="/post"
                className="inline-block text-center bg-m border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-blue-700">
              
                Post
              
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post3;
