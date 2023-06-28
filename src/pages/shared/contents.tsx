import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Slide } from "@mui/material";
import TopBar from "./topbar";
import SideBar from "./sidebar";

const Contents = (props: any) => {
  const { title, children, ...others } = props;
  //children ini bawaan REACT CUK
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    // if (!sessionStorage.getItem("token")) {
    //   router.push("/login");
    // }
    // const getdata = () => {
    //   const token: any = sessionStorage?.getItem("token");
    //   const decoded: any = Jwt.decode(token);
    //   const bandingke: any = parseInt(decoded?.exp) - Date.now() / 1000;
    //   if (bandingke <= 0) {
    //     const refresh = {
    //       uuid: decoded.userId,
    //     };
    //     axios.post("/login/refresh", refresh).then((response) => {
    //       const data = response.data.result;
    //       sessionStorage.setItem("token", data.token);
    //       sessionStorage.setItem("reftoken", data.reftoken);
    //       const decoded: any = Jwt.decode(data);
    //       axios.defaults.headers.common["Authorization"] = data.token;
    //       // sessionStorage.setItem("token", response.data);
    //     });
    //   }
    //   console.log(bandingke);
    //   setIsRefresh(true);
    //   // router.reload();
    // };
    // getdata();

      removeEventListener("resize", handleResize);
    
  },[]);
  return (
    <>
      <div className="grid col-1 relative bg-white shadow-sm border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 mt-32 w-full">
        <div className="flex-1 min-w-0 ">
          <h1 className="text-2lg font-bold leading-6 text-gray-900 sm:truncate uppercase">
            {title}
          </h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <button
            onClick={() => others.fungsi()}
            type="button"
            className="order-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md bg-red-500 hover:bg-red-600 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 "
          >
            Create
          </button>
        </div>
      </div>

      <div className="mt-8 sm:block relative">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          {children}
        </div>
      </div>
    </>
  );
};

export default Contents;
