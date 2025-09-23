type PostDetailsProps = {
  params: {
    id: string;
  };
};

export default function PostDetails({ params }: PostDetailsProps) {
  return <h1>The post with ID: {params.id} is rendered on the screen!</h1>;
}
