import { motion } from "framer-motion";
import { navLinks } from "../../../constants";

const variants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};
const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};

const Links = ({ setOpen }) => {
	return (
		<motion.div
			className="absolute w-full h-full flex flex-col items-center justify-center gap-5"
			variants={variants}
		>
			{navLinks.map((item) => (
				<motion.a
					className="text-3xl md:text-4xl"
					href={`#${item}`}
					key={item}
					variants={itemVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => setOpen((prev) => !prev)}
				>
					{item}
				</motion.a>
			))}
		</motion.div>
	);
};

export default Links;
