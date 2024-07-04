import useJsonFetch from '../hooks/useJsonFetch';

const ErrorComponent = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error', {});

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
};

export default ErrorComponent;