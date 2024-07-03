import React from "react";
import ProjectFull from "@/components/ProjectFull";
import DATA from "@/assets/data.json";
export default function page() {
  return <ProjectFull data={DATA.project1} />;
}
