const Button = ({ label }) => {
	return (
		<button className="flex justify-center items-center gap-2 px-7 py-4 border font-inter text-lg leading-none bg-red-600 rounded-xl text-white">
			{label}
		</button>
	);
};

export default Button;
