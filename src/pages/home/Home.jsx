import useFetch from "../../hooks/useFetch";

const Home = () => {
  const key = import.meta.env.VITE_API_KEY;
  const apiURL = `https://www.googleapis.com/books/v1/volumes?q=harry+potter&startIndex=0&maxR&key=${key}`;
  const { isPending, isError, data, error } = useFetch(apiURL);
  console.log(data);
  return (
    <div>
      {isPending ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.items.map((book) => (
            <li key={book.id}>
              <h2>{book.volumeInfo.title}</h2>
              <p>{book.volumeInfo.authors}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
