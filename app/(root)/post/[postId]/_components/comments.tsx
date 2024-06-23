import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CommentsProps {
  comments: Comments[];
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="space-y-4 w-full lg:w-1/2 my-10">
      <h2 className="text-2xl font-bold">Comments</h2>
      <div className="space-y-4">
        {comments &&
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" alt="avatar" />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5 text-xs">
                    <div className="font-medium">{comment.name}</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {comment.email}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>{comment.comment}</CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Comments;
