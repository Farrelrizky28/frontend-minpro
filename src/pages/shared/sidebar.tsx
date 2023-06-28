import { forwardRef, LegacyRef } from "react";
import Link from "next/link";
import { BusinessCenterRounded,MenuBookRounded, NoteAddRounded, SchoolRounded,
   Assignment, People, CottageRounded, SettingsRounded } from "@mui/icons-material";

// import logo from "../../images/logo.png";
// import logo_honda from "../../images/honda.svg";
import { useRouter } from "next/router";
import Image from "next/image";

//prettier-ignore
const SideBar = forwardRef(({}, ref:LegacyRef<HTMLDivElement>) => {
  const router = useRouter();
  // const listMenu = [
  //   { to: "/", path: "/", icon: <CottageIcon />, name: "Dashboard" },
  //   { to: "/users", path: "users", icon: <PeopleIcon />, name: "Users" },
  //   { to: "/app/batch", path: "app/batch", icon: <PeopleIcon />, name: "Batch" },
  // ];

  const listMenu = [
    { to: "/", path: "/", icon: <CottageRounded/>, name: "Dashboard" },
    { to: "/app/candidate", path: "candidate", icon: <NoteAddRounded />, name: "Candidate" },
    { to: "/app/batch", path: "batchs", icon: <SchoolRounded />, name: "Batch" },
    { to: "/app/talents", path: "talents", icon: <People />, name: "Talents" },
    { to: "/app/curriculum", path: "curriculum", icon: <MenuBookRounded />, name: "Curriculum" },
    { to: "/app/batch/evaluation", path: "evaluation", icon: <Assignment />, name: "Evaluation" },
    { to: "/app/postinghiring", path: "postinghiring", icon: <BusinessCenterRounded />, name: "Posting Hiring" },
    { to: "/app/postinghiring", path: "postinghiring", icon: <SettingsRounded />, name: "Setting?" },
  ];

  return (
    <div ref={ref} className="fixed mt-[58px] w-52 h-full bg-white shadow-sm z-30 ">
      {/* <div className="flex justify-center mt-6 mb-14">
        <Image
        className="w-32 h-auto" src={logo_honda} alt="company logo" 
        />
      </div> */}
      <div className="flex flex-col mt-1 ">
        {(listMenu || []).map((mn) => (
          <Link href={`${mn.to}`}>
            <div
              className={`text-black pl-6 py-2 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors hover:bg-blue-500 hover:text-white 
              `}
            >
              <div className="mr-2">
                {mn.icon}
              </div>
              <div>
                <p>{mn.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
