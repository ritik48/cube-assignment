import { useCallback, useEffect, useState } from "react";
import { CustomerType } from "../components/Customer";

export function useCustomers() {
    const [customers, setCustomers] = useState<CustomerType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const limit = 10;

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
            console.log(error);
            setError("Cannot fetch customers");
        } finally {
            setLoading(false);
        }
    }, [limit, page]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return { customers, hasMore, loading, setPage, error };
}
