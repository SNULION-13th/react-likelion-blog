import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="font-bold text-lg text-left mb-2">{post.title}</h2>
      <h3 className="text-grey text-left text-sm mb-15">
        {post.author.username}
      </h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {post.tags.map((tag) => (
          <span
            key={tag.id}
            className="bg-amber-400 text-white px-2 py-1 rounded"
          >
            #{tag.content}
          </span>
        ))}
      </div>
      <div className="text-left mt-4">❤️ {post.like_users.length}</div>
    </div>
  );
}
