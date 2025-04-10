import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TagBadge } from "@/shared/components";

export const SmallPost = ({ post }) => {
  return (
    <Card className="h-full w-64 ...">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-start">
          {post.title}
        </CardTitle>
        <CardDescription className="text-sm text-start">
          {post.author.username}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-start">
          <span>{post.content}</span>
        </div>
        <div className="flex flex-wrap mt-5">
          {post.tags.map((tag, idx) =>
            typeof tag === "string" ? (
              <TagBadge key={idx} tag={{ content: tag }} />
            ) : (
              <TagBadge key={idx} tag={tag} />
            )
          )}
        </div>
      </CardContent>
      <CardFooter>
        {post.like_users?.length > 0 && `❤️ ${post.like_users.length}`}
      </CardFooter>
    </Card>
  );
};
