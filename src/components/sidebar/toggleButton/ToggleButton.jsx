import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
	return (
		<button
			className="fixed z-[1000] p-2 border
			border-white"
			onClick={() => setOpen((prev) => !prev)}
		>
			<svg width="23" height="23" viewBox="0 0 23 23">
				<motion.path
					strokeWidth="3"
					strokeLinecap="round"
					variants={{
						closed: { d: "M 2 2.5 L 20 2.5", stroke: "white" },
						open: { d: "M 3 16.5 L 17 2.5", stroke: "black" },
					}}
				/>
				<motion.path
					strokeWidth="3"
					strokeLinecap="round"
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1, stroke: "white" },
						open: { opacity: 0, stroke: "black" },
					}}
				/>
				<motion.path
					strokeWidth="3"
					strokeLinecap="round"
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346", stroke: "white" },
						open: { d: "M 3 2.5 L 17 16.346", stroke: "black" },
					}}
				/>
			</svg>
		</button>
	);
};

export default ToggleButton;
