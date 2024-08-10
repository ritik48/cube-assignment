import { useEffect, useState } from "react";

export function AnimatedImage() {
    const [imageUrl, setImageUrl] = useState<string>(
        "https://random.imagecdn.app/600/600"
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setImageUrl(
                `https://random.imagecdn.app/600/600?random=${Date.now()}`
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <img
            src={`${imageUrl}`}
            className="rounded-md shadow-sm shadow-black w-52 object-cover"
        />
    );
}
