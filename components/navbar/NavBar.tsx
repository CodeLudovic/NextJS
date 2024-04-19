import {
	DeviceMobileIcon,
	HomeIcon,
	OrganizationIcon,
	PersonIcon,
} from "@primer/octicons-react";
import Link from "next/link";

const navItems = [
	{ path: "/pricing", label: "Pricing", icon: <OrganizationIcon size={16} /> },
	{ path: "/about", label: "About", icon: <PersonIcon size={16} /> },
	{ path: "/contact", label: "Contact", icon: <DeviceMobileIcon size={16} /> },
];

export const NavBar = async () => {
	return (
		<nav className="flex flex-row items-center bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
			<Link href="/" className="flex items-center">
				<HomeIcon className="mr-2" />
				<span>Home</span>
			</Link>

			<div className="flex flex-1"></div>

			{navItems.map((navItem) => (
				<Link
					href={navItem.path}
					key={navItem.path}
					className="flex items-center gap-1 ml-6">
					<p className="mr-1">{navItem.icon}</p>
					{navItem.label}
				</Link>
			))}
		</nav>
	);
};
