"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SearchProps = {
	placeholder: string;
};

export default function Search({ placeholder }: SearchProps) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	function handleSearch(term: string) {
		const params = new URLSearchParams(searchParams.toString());

		if (!term) {
			params.delete("query");
		} else {
			params.set("query", term);
		}

		router.replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="relative flex flex-1 flex-shrink-0">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<input
				id="search"
				className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
				placeholder={placeholder}
				value={searchParams.get("query") ?? ""}
				onChange={(event) => handleSearch(event.target.value)}
			/>
			<MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
		</div>
	);
}
