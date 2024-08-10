import { useCallback, useRef } from "react";
import Customer, { CustomerType } from "./Customer";
import { useCustomers } from "../hooks/usecustomers";

export default function CustomerList({
    selected,
    setSelected,
}: {
    selected: CustomerType | null;
    setSelected: React.Dispatch<React.SetStateAction<CustomerType | null>>;
}) {
    const { customers, loading, hasMore, setPage, error } = useCustomers();

    const observer = useRef<IntersectionObserver | null>(null);
    const lastElementRef = useCallback(
        (node: HTMLElement | null) => {
            if (loading) return;
            if (observer.current) observer.current?.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prev) => prev + 1);
                }
            });

            if (node) {
                observer.current?.observe(node);
            }
        },
        [hasMore, loading, setPage]
    );

    return (
        <>
            <div className="absolute bg-black text-zinc-200 px-2 py-1 text-sm rounded-sm">
                Total: {customers.length}
            </div>
            <div className="w-[300px] overflow-y-auto">
                {customers.map((customer, index) => {
                    return index === customers.length - 1 ? (
                        <div ref={lastElementRef}>
                            <Customer
                                customer={customer}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>
                    ) : (
                        <Customer
                            customer={customer}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    );
                })}
                {loading && (
                    <p className="mt-2 py-6 text-xl font-semibold">
                        Loading ....
                    </p>
                )}
                {error && (
                    <p className="mt-2 py-6 text-red-500 text-sm font-semibold">
                        {error}
                    </p>
                )}
            </div>
        </>
    );
}
