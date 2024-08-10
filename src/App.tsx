import NavBar from "./components/NavBar";
import CustomerList from "./components/CustomerList";
import { useState } from "react";
import CustomerDetail from "./components/DisplayCustomer";
import { CustomerType } from "./components/Customer";

function App() {
    const [selected, setSelected] = useState<CustomerType | null>(null);

    return (
        <div className="h-screen flex flex-col">
            <NavBar />
            <div className="flex-1 flex overflow-hidden">
                <CustomerList selected={selected} setSelected={setSelected} />
                {selected && <CustomerDetail {...selected} />}
            </div>
        </div>
    );
}

export default App;
