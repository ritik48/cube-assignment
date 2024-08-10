import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/NavBar";
import CustomerList from "./components/CustomerList";
import DisplayCustomer from "./components/DisplayCustomer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <div className="flex-1 flex">
                <CustomerList />
                <DisplayCustomer />
            </div>
        </div>
    );
}

export default App;
