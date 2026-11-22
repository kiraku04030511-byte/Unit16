import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/templates/Layout';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Editor from './pages/Editor';

export default function App() {
 
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="articles/:id" element={<Articles />} />
          <Route path="create" element={<Editor />} />
          <Route path="edit/:id" element={<Editor />} />
         </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

