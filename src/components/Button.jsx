import { Link } from "react-router-dom";

function Button({ disabled, children, to, type, onClick }) {
	const base =
		"inline-block text-xs md:text-sm rounded-md font-light xl:font-normal tracking-wide transition-colors duration-300 focus:outline-none focus:ring  focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed  ";
	const normal = base + "px-4 py-2.5 md:px-8 xl:py-3 xl:px-10 border ";

	const styles = {
		red:
			normal +
			"text-light-grey bg-primary-red hover:bg-gray hover:border-gray hover:text-primary-red focus:ring-secondary-violet focus:ring border-primary-red ",
		blue:
			normal +
			"text-light-grey bg-tertiary-blue hover:bg-gray hover:border-gray hover:text-primary-red focus:ring-secondary-violet focus:ring border-tertiary-blue ",

		empty:
			normal +
			"border-light-dark text-light-grey hover:border-primary-red hover:text-white focus:ring-text-white focus:ring ",
	};

	if (to) {
		return (
			<Link to={to} className={styles[type]}>
				{children}
			</Link>
		);
	}

	if (onClick) {
		return (
			<button onClick={onClick} disabled={disabled} className={styles[type]}>
				{children}
			</button>
		);
	}

	return (
		<button disabled={disabled} className={styles[type]}>
			{children}
		</button>
	);
}

export default Button;
