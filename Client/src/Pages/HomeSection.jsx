// import React from 'react'
import { useState, useEffect } from "react";
import { Card, Load, FormArea } from "../CommonComponents";

const RenderImageCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post}></Card>);
  }
  return (
    <>
      <h2 className=" font-extrabold text-blue-500 text-lg uppercase">
        {title}
      </h2>
    </>
  );
};
const HomeSection = () => {
  const [load, setLoad] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  return (
    <section className="max-w-7xl mx-auto my-0">
      <div>
        <h1 className="font-extra-bold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#808080] text-[18px] max-w-[500px]">
          Transforming Ideas into Stunning Visuals, Instantly
        </p>
      </div>

      <div className="mt-16">
        <FormArea></FormArea>
      </div>

      <div className="mt-10">
        {load ? (
          <div className="flex justify-center items-center">
            <Load></Load>
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className=" text-black text-xl mb-4  ">
                Showing Result For{" "}
                <span className="text-[#808080]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderImageCards
                  data={[]}
                  title="No Search Results Found"
                ></RenderImageCards>
              ) : (
                <RenderImageCards
                  data={[]}
                  title="No Post Found"
                ></RenderImageCards>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default HomeSection;
