import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { Breadcrumbs, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Content2 = (props: any) => {
  const { title, children, ...others } = props;
  //children ini bawaan REACT CUK
  const router = useRouter();
  const routenya = router.pathname;
  const pathArray = routenya.split("/").filter((item) => item !== ""); // Mengubah rute menjadi array dan menghapus elemen kosong
  const lastThreePaths = pathArray.slice(-3); // Mengambil tiga elemen terakhir dari array

  const pathObjects: any = lastThreePaths.map((route, index) => {
    const path = `/${lastThreePaths.slice(0, index + 1).join("/")}`; // Mendapatkan jalur berdasarkan rute

    return {
      route,
      path,
    };
  });
  
  return (
    <div className="">
    <Breadcrumbs aria-label="breadcrumb" className="md:-ml-4 mb-2 relative">
        {pathObjects.length < 3 ? (
          <div>
            <HomeIcon fontSize="small" className="-mt-1 mr-1"/>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
          </div>
        ) : null}
        {(pathObjects || []).map((mn: any) => (
          <Link underline="hover" color="inherit" href={mn.path}>
            {mn.route}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default Content2;
