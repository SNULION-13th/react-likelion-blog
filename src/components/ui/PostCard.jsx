import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export const PostCard = ({ title, content, author, tags, likes }) => {
  return (
    <Card className="w-full transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>by {author}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-sm text-black">{content}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-amber-400 text-white text-xs px-2 py-1 rounded-md"
            >
              #{tag.content}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-end text-sm text-gray-500">
        ❤️ {likes}
      </CardFooter>
    </Card>
  );
};
