import UserHome from './components/UserHome';
import logo from './logo.svg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
      <div className="App">
        <UserHome />
      </div>
  );
}

export default App;
