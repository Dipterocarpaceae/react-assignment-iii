import useFetch from "./useFetch";

const Posts = (props) => {
  const [data] = useFetch(props.urlEnd);

  return (
    <div>
      <h2>POSTS</h2>
      {data &&
        data.map((item) => {
          return (
            <p key={item.id}>
              {item.id}: {item.title}
            </p>
          );
        })}
    </div>
  );
};

export default Posts;
