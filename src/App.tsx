import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import "./main.css"

const App: React.FC = () => {

  const phone = useSelector((state: RootState) => state.phone.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (!phone) {
      navigate("/");
    }
  }, [phone])

  return (
    <>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout: any = route.layoutType === "default" ? DefaultLayout : Fragment;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout><Page /></Layout>}
            />
          )
        })}

      </Routes>
    </>
  );
}

export default App;
