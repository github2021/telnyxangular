export class Comment {
  id: Number;
  postId: Number;
  parent_id: Number | null;
  user: String;
  date: String;
  content: String;
}
