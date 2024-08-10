import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { CustomerType } from "./Customer";

export default function CustomerDetail({
    firstName,
    lastName,
    id,
    address,
    phone,
}: CustomerType) {
    return (
        <div className="border-l flex-grow flex justify-center">
            <div className="mt-2 h-fit flex flex-col w-[30%] gap-1">
                <div className="text-2xl mb-3">
                    Customer id: <span className="font-medium">#{id}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-6">
                        <FaUser size={14} color="gray" />
                        <span className="text-lg font-medium text-zinc-800">
                            {firstName + " " + lastName}
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <FaLocationDot size={14} color="gray" />
                        <span className="text-lg font-medium text-zinc-800">
                            {address?.address || "NA"}
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <FaPhone size={14} color="gray" />
                        <span className="text-lg font-medium text-zinc-800">
                            {phone}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
