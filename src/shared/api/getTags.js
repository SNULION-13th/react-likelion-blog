import { instance } from "@/shared/api";

export const getTags = async () => {
  try {
    const response = await instance.get("/tags");
    const tags = response.data;
    return Array.isArray(tags) ? tags : [];
  } catch (error) {
    console.error("getTags 실패", error);
    return [];
  }
};

/**
 * 특정 게시물의 태그 조회
 * @param {number} postId
 * @returns {Promise<{
 *  id: number;
 *  content: string;
 * }[]>}
 */
export const getTagsByPostId = async (postId) => {
  try {
    const response = await instance.get(`/tags?postId=${postId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
