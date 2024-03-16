import logo from './logo.svg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <p></p>
      </div>
    </QueryClientProvider>
  );
}

export default App;
