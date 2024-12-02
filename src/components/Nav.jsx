import { motion } from "framer-motion";
import { navSocialLinks } from "../constants";
import Sidebar from "./sidebar/Sidebar";

const Nav = () => {
	return (
		<header className="padding-x py-[24px] w-full bg-transparent font-inter">
			<nav className="flex justify-between items-center max-container ">
				<Sidebar />
				<motion.span
					className="max-lg:hidden leading-normal text-lg ms-8"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					GRZEGORZ SYPEK
				</motion.span>

				<ul className="flex-1 flex justify-end items-center gap-8 ">
					{navSocialLinks.map((item) => {
						const Icon = item.icon;
						return (
							<li key={item.label}>
								<a
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-pink-grey relative z-[1000]"
								>
									<Icon
										// style={{
										// 	width: "16px",
										// 	height: "16px",
										// 	"@media (min-width: 768px)": {
										// 		width: "24px",
										// 		height: "24px",
										// 	},
										// }}
										size={20}
										className="scale-75 sm:scale-100"
									/>
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
