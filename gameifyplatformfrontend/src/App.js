import Navbar from './components/Navbar';
import SuperUserHome from './components/SuperUserHome';
import UserHome from './components/UserHome';
import logo from './logo.svg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserTaskListView from './components/UserTaskListView';
import { Toast } from 'bootstrap';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<UserHome />} />
            <Route path="superuser" element={<SuperUserHome />} />
            <Route path="usertasks" element={<UserTaskListView />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
  );
}

export default App;
