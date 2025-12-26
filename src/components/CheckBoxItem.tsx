type Props = {
    label: string;
    id: number;
};

export default function CheckBoxItem({ label, id }: Props) {
    return (
        <div className="flex my-3">
            <input id={`ch-${id}`} type="checkbox" className="peer hidden" />
            <label
                htmlFor={`ch-${id}`}
                className="w-full group flex items-center gap-3 cursor-pointer text-neutral-500 font-semibold text-sm p-3 peer-checked:text-red-400 peer-checked:border-red-200 peer-checked:bg-red-50 bg-white rounded-md border border-neutral-300"
            >
                <div className="w-4 h-4 rounded-sm border-2 border-neutral-300 group-peer-checked:border-red-300 group-peer-checked:bg-red-300 relative">
                    <svg
                        className="text-white absolute inset-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <div>{label}</div>
            </label>
        </div>
    );
}
