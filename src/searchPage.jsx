import React from "react";
import "./reset.css";
import Nav from "./nav";
import TopBanner from "./topBanner";
import OthersReqCard from "./othersReqCard";
import ResultsBanner from "./resultsBanner";

export default function SearchPage() {
  return (
    <div>
      <style>{'body { background-color: #EDE3FA; }'}</style>

      <Nav />
      <TopBanner />
      <ResultsBanner>
        <OthersReqCard />
        <OthersReqCard />
        <OthersReqCard />
        <OthersReqCard />
      </ResultsBanner>
    </div>
  );
}
