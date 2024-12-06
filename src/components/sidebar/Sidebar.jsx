import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
	open: {
		clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",
		backgroundColor: "#e7e4e4",
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 20,
		},
	},
	closed: {
		clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",

		opacity: 0, // Hide the element completely
		backgroundColor: "rgba(0, 0, 0, 0.01)",
		zIndex: 10,
		transition: {
			delay: 0.3,
			opacity: { duration: 0.3 }, // Ensure it fades out quickly
			type: "spring",
			stiffness: 100,
			damping: 20,
		},
	},
};
const Sidebar = () => {
	const [open, setOpen] = useState(false);

	return (
		<motion.div
			className="flex flex-col items-center justify-center bg-white text-black
			mr-8 max-lg:mr-0
			"
			animate={open ? "open" : "closed"}
		>
			<motion.div
				className={`${
					!open && "hidden"
				} z-[999] fixed top-0 left-0 bottom-0 w-[300px] md:w-[400px] bg-white border border-white`}
				variants={variants}
			>
				<Links setOpen={setOpen} />
			</motion.div>
			<div className="-mt-8">
				<ToggleButton setOpen={setOpen} />
			</div>
		</motion.div>
	);
};

export default Sidebar;
