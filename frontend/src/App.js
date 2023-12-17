import './App.css';
import AppRoutes from './routes/routes';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <AppRoutes />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
