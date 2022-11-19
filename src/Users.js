import useFetch from "./useFetch";

const Users = (props) => {
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

export default Users;
