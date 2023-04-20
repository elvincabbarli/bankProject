import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./pages/Main";
import Form from "./pages/newlogin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new-login" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
