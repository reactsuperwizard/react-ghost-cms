import PostListItem from 'lib/components/PostList/PostListItem';

import type { PostsType } from 'lib/stores/Posts';

export default function PostList({ posts }: { posts: PostsType }) {
  return (
    <div className='flex flex-col items-center space-y-2'>
      { posts.map((post) => (<PostListItem key={post.id} post={post} />)) }
    </div>
  );
}
