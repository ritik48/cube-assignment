export type CustomerType = {
    firstName: string;
    lastName: string;
    phone: string;
    address: { address?: string };
    id: number;
};

export default function Customer({
    customer,
    selected,
    setSelected,
}: {
    customer: CustomerType;
    selected: CustomerType | null;
    setSelected: React.Dispatch<React.SetStateAction<CustomerType | null>>;
}) {
    return (
        <div
            className={`flex items-center justify-between hover:bg-zinc-300 border-b cursor-pointer px-3 py-5 ${
                selected?.id === customer?.id && "bg-zinc-200"
            }`}
            onClick={() => setSelected(customer)}
            key={customer.id}
        >
            <span>{customer.firstName + " " + customer.lastName}</span>
            <span>#{customer.id}</span>
        </div>
    );
}
