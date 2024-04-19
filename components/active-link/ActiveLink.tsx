import { Icon } from "@primer/octicons-react";
import Link from "next/link";

interface Props {
	label: string;
	path: string;
}

export const ActiveLink = ({ label, path }: Props) => {
	return (
		<Link href={path} key={path} className="flex items-center gap-1 ml-6">
			{label}
		</Link>
	);
};
