import React from "react";
import { posts } from "../../data/posts";

import { Header, Input } from "@/shared/components";
import PostCard from "./postCard";

const allTags = posts.reduce((acc, post) => {
  post.tags.forEach((tag) => {
    if (!acc.find((t) => t.id === tag.id)) {
      acc.push(tag);
    }
  });
  return acc;
}, []);

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col py-14">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="w-full mb-16 flex justify-center">
            <h1 className="uppercase text-6xl text-black">my blog</h1>
          </div>
          <div className="w-[90vw] max-w-md flex justify-center">
            <Input
              className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
              type="text"
              placeholder="태그를 검색하세요"
            />
          </div>
          <div className="flex flex-wrap justify-center mt-4 gap-2">
            {allTags.map((tag) => (
              <span
                key={tag.id}
                className="bg-amber-400 text-white px-2 py-1 rounded text-sm"
              >
                #{tag.content}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
