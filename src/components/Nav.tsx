import { motion } from "framer-motion";
import { navSocialLinks } from "../constants";
import Sidebar from "./sidebar/Sidebar";

const Nav = () => {
	return (
		<header className="padding-x w-full bg-transparent py-[24px] font-inter ">
			<nav className="flex items-center justify-between max-container ">
				<Sidebar />
				<motion.span
					className="text-lg leading-normal ms-8 max-lg:hidden"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					GRZEGORZ SYPEK
				</motion.span>

				<ul className="flex items-center justify-end flex-1 gap-8 ">
					{navSocialLinks.map((item) => {
						const Icon = item.icon;
						return (
							<li key={item.label}>
								<a
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="relative z-[1000] hover:text-pink-grey"
								>
									<Icon size={20} className="scale-75 sm:scale-100" />
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
