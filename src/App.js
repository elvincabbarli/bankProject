import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./pages/Main";
import Form from "./pages/newlogin";
import MultiCreditForm from './pages/MultiCreditForm';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new-login" element={<Form />} />
        <Route path="/credit" element={<MultiCreditForm />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
