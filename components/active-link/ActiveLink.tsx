"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";
interface Props {
	label: string;
	path: string;
}

export const ActiveLink = ({ label, path }: Props) => {
	const pathname = usePathname();
	return (
		<Link
			href={path}
			key={path}
			className={`" flex items-center gap-1 ${style.link} ${
				pathname === path && style["active-link"]
			}`}>
			{label}
		</Link>
	);
};
