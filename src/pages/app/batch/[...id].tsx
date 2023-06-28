import Content from "@/pages/shared/content";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const  id  = router.asPath;
  return <Content>{id}</Content>;
};

export default Index;
