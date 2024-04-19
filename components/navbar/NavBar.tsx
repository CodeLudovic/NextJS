import {
	DeviceMobileIcon,
	HomeIcon,
	OrganizationIcon,
	PersonIcon,
} from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

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

			{navItems.map((navItem, index) => (
				<div className="flex flex-row items-center mr-3 gap-1" key={index}>
					{navItem.icon}
					{/* el spread operator traer las propiedades del objeto navItem */}
					<ActiveLink {...navItem} />
				</div>
			))}
		</nav>
	);
};
