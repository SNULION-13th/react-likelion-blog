import { useState } from "react";
import { Input, Button } from "@/shared/components";
import { TagBadge } from "@/shared/components"; // 태그 UI가 있다면

export function TagInputBox() {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed !== "" && !tags.includes(trimmed)) {
      setTags((prev) => [...prev, trimmed]);
      setTagInput(""); 
    }
  };

  return (
    <div className="flex flex-col gap-3">
    <p className="text-l font-bold flex mt-4">태그</p>
      <div className="flex gap-2">
        <Input
          placeholder="태그를 입력하세요"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
        />
        <Button type="button" onClick={handleAddTag}>
          태그 추가
        </Button>
      </div>

      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, idx) => (
          <span class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-primary-foreground [a&]:hover:bg-primary/90 m-1 bg-amber-500 font-bold">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}


