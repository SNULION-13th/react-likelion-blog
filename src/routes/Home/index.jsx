import React, { useState, useEffect, useContext } from "react";
import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog, Button } from "../../shared/components";
import { getPosts, getTags, getPostById, getTagsByPostId } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { UserContext } from "../../shared/context/userContext.jsx";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  // State for posts, tags, and modal visibility
  const [posts, setPosts] = useState([]);
  const [allTags, setAllTags] = useState([]); // Complete list of tags
  const [filteredTags, setFilteredTags] = useState([]); // Filtered display list
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tagSearchInput, setTagSearchInput] = useState("");

  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await getPosts();
      console.log("post fetch response", postsData);
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchTags = async () => {
    try {
      const tags = await getTags();
      console.log("tag fetch response", tags);
      setAllTags(tags);
      setFilteredTags(tags);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  const handleSearchTagInputChange = async (e) => {
    const { value } = e.target;
    console.log("search tag input change", value);
    setTagSearchInput(value);

    // If the input is a valid number, treat it as a post ID and fetch tags via getTagsByPostId
    if (!isNaN(value.trim()) && value.trim() !== "") {
      try {
        const tagsByPost = await getTagsByPostId(Number(value.trim()));
        console.log("tags by post", tagsByPost);
        setFilteredTags(tagsByPost);
      } catch (error) {
        console.error("Error fetching tags by post id:", error);
      }
    } else {
      const filtered = allTags.filter((tag) => {
        const tagLabel = tag.name || tag.content || "";
        return tagLabel.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredTags(filtered);
    }
  };

  const handleCreatePost = async (post, author) => {
    try {
      const createResponse = await createPost({
        ...post,
        author,
      });
      const newPost = await getPostById(createResponse.postId);
      console.log("new post", newPost);
      setPosts((prevPosts) => [...prevPosts, newPost]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleDialogSubmit = (postData) => {
    if (user) {
      handleCreatePost(postData, user.username);
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="pb-20 pt-14">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl text-black">my blog</h1>
        </div>
        <div className="w-[90vw] max-w-md flex justify-center">
          <Input
            type="text"
            placeholder="태그를 검색하세요"
            value={tagSearchInput}
            onChange={handleSearchTagInputChange}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {filteredTags.map((tag) => (
            <TagBadge key={tag.id} tag={tag} />
          ))}
        </div>

        {user && (
          <div className="mt-5">
            <Button onClick={() => setIsDialogOpen(true)}>
              새 게시글 작성
            </Button>
          </div>
        )}
      </div>

      <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full flex justify-center items-center"
          >
            <SmallPost
              post={post}
              onClick={() => {
                console.log(post.id);
                navigate(`/post/${post.id}`);
              }}
            />
          </div>
        ))}
      </div>

      <PostDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleDialogSubmit}
      />
    </div>
  );
}
