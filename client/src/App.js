import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import AddEmployee from "./components/Employees/AddEmployee";
import Employee from "./components/Employees/Employee";
import UpdateEmployee from "./components/Employees/UpdateEmployee";
import Map from "./components/Employees/Map";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/addEmployee" element={<AddEmployee />} exact />
          <Route path="/viewEmployee/:id" element={<Employee />} exact />
          <Route path="/updateDetails/:id" element={<UpdateEmployee />} exact />
          <Route path="/stats" element={<Stats/>} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
