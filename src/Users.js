import useFetch from "./useFetch";

const Users = (props) => {
  const [data] = useFetch(props.urlEnd);

  return (
    <div>
      <h2>USERS</h2>
      {data &&
        data.map((item) => {
          return (
            <p key={item.id}>
              {item.id}: {item.name}
            </p>
          );
        })}
    </div>
  );
};

export default Users;
