import useJsonFetch from '../hooks/useJsonFetch';

const LoadingComponent = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading', {});

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
};

export default LoadingComponent;