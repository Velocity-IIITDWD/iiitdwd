import type { Metadata } from "next";
import type { ReactElement } from "react";
import OnlineMTechLandingPage from "../LandingPage";

export const metadata: Metadata = {
  title: "Online M.Tech Programmes",
  description: "Explore Online M.Tech programmes at IIIT Dharwad",
};

export default function Page(): ReactElement {
  return <OnlineMTechLandingPage />;
}