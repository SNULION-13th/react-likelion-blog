import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardPost({ post }) {
  return (
    <Card className={"mx-2"}>
      <CardHeader>
        <CardTitle className={"flex justify-start text-2xl font-bold"}>
          {post.title}
        </CardTitle>
        <CardDescription className={"flex justify-start"}>
          {post.author.username}
        </CardDescription>
      </CardHeader>
      <br />
      <CardContent className={"flex justify-start"}>
        {post.tags.map((tag) => (
          <Button
            key={tag.id}
            variant="outline"
            size="sm"
            className="text-white !text-sm !bg-amber-500 !px-3 !py-0 mr-2 !rounded-xl"
          >
            #{tag.content}
          </Button>
        ))}
      </CardContent>
      <CardFooter>
        {post.like_users.length > 0 ? `❤️ ${post.like_users.length}` : ""}
      </CardFooter>
    </Card>
  );
}
