import useFetch from "./useFetch";

const Posts = (props) => {
  const [data] = useFetch(props.urlEnd);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default Posts;
