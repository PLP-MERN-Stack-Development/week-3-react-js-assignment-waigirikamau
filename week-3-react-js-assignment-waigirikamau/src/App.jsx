import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Tasks from './Tasks';
import ApiDemo from './ApiDemo';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api" element={<ApiDemo />} />
      </Routes>
    </Layout>
  );
}