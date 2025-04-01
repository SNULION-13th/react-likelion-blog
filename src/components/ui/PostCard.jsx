import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export const PostCard = ({ title, author, tags, likes }) => {
  return (
    <Card className="w-full transition-shadow hover:shadow-md">
      <CardHeader className="items-start">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>by {author}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
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
      <CardFooter className="justify-start text-sm text-gray-500">
        ❤️ {likes}
      </CardFooter>
    </Card>
  );
};
