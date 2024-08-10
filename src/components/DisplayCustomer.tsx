export default function DisplayCustomer() {
    return (
        <div className="border-l w-full flex-grow flex justify-center">
            <div className="mt-2 h-fit flex flex-col w-[30%]">
                <div className="text-2xl mb-3">
                    Customer id: <span className="font-semibold">#2</span>
                </div>
                <span className="text-xl font-semibold text-zinc-600">
                    Ritik Raj
                </span>
                <span className="text-xl font-semibold text-zinc-600">
                    Mohali, Punjab
                </span>
                <span className="text-xl font-semibold text-zinc-600">
                    7543867016
                </span>
            </div>
        </div>
    );
}
