import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

function PostCard({ post }) {
  const likeCount = post.like_users.length;

  return (
    <Card className="p-2">
      <CardHeader className="text-left">
        <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
        <CardDescription className="text-sm">
          {post.author.username}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 !pt-6 !pb-0">
          {post.tags.map((tag) => (
            <div
              key={tag.id}
              className="bg-amber-500 text-white text-xs font-bold rounded-md px-2 py-1 "
            >
              #{tag.content}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 text-lg flex items-center">
        ❤️ {likeCount}
      </CardFooter>
    </Card>
  );
}

export default PostCard;
