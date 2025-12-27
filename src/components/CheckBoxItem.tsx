type Props = {
    label: string;
    id: number;
};

export default function CheckBoxItem({ label, id }: Props) {
    return (
        <div className="flex my-2">
            <input
                id={`ch-${id}`}
                name={`ch-${id}`}
                value="on"
                type="checkbox"
                className="peer hidden"
            />
            <label
                htmlFor={`ch-${id}`}
                className="w-full group flex items-center gap-4 cursor-pointer text-neutral-500 p-3 peer-checked:text-rose-400 peer-checked:border-rose-200 peer-checked:bg-rose-50 bg-white rounded-xl border border-neutral-100"
            >
                <div className="w-5 h-5 shrink-0 rounded-sm border-2 border-neutral-300 group-peer-checked:border-red-300 group-peer-checked:bg-red-300 relative">
                    <svg
                        className="text-white absolute inset-0 hidden group-peer-checked:block"
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
                <div className="text-lg">{label}</div>
            </label>
        </div>
    );
}
