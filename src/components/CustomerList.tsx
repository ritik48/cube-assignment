import { useCallback, useEffect, useRef, useState } from "react";
import Customer, { CustomerType } from "./Customer";

export default function CustomerList({
    selected,
    setSelected,
}: {
    selected: CustomerType | null;
    setSelected: React.Dispatch<React.SetStateAction<CustomerType | null>>;
}) {
    const [customers, setCustomers] = useState<CustomerType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const limit = 20;

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
        [hasMore, loading]
    );

    const fetchUser = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch(
                `https://dummyjson.com/users?limit=${limit}&skip=${
                    limit * (page - 1)
                }`
            );

            const data = await res.json();
            if (data.users.length === 0) {
                setHasMore(false);
            }
            setCustomers((prev) => [...prev, ...data.users]);
        } catch (error) {
            console.log("error occured = ", error);
        } finally {
            setLoading(false);
        }
    }, [limit, page]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
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
                <p className="mt-2 text-xl font-semibold">Loading ....</p>
            )}
        </div>
    );
}
