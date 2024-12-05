import Button from "../components/Button";

const Footer = () => {
	return (
		<div className="max-container flex flex-wrap sm:flex-nowrap gap-5 ">
			<div className="">
				<h1 className="section-header relative z-20 text-left align-middle p-4 ">
					Reach Out For More?
				</h1>
				<p className="p-4 text-gray relative z-20  ">
					I am available on &nbsp;
					<a
						href="https://twitter.com/gregsypek"
						target="_blank"
						rel="noopener noreferrer"
						className="border-b text-pink-grey hover:text-pink-200"
					>
						X
					</a>
					&nbsp;and&nbsp;
					<a
						href="https://www.linkedin.com/in/grzegorz-sypek-47472a194/"
						target="_blank"
						rel="noopener noreferrer"
						className="border-b text-pink-grey hover:text-pink-200"
					>
						Linkedin.
					</a>
					&nbsp;You can also check my CV or visit my&nbsp;
					<a
						href="https://github.com/gregsypek"
						target="_blank"
						rel="noopener noreferrer"
						className="border-b text-pink-grey hover:text-pink-200"
					>
						Github
					</a>
					&nbsp;account.
				</p>
			</div>
			<div className="self-start ">
				<img
					src="/hero.png"
					width="500"
					height="800"
					alt="Grzegorz Sypek"
					className="object-contain relative z-10 h-2/3 md:h-full mask-gradient-30 -translate-y-20 md:-translate-y-1/4 lg:-translate-y-8 scale-75 md:scale-100"
					loading="lazy"
				/>
			</div>
			<div className="uppercase flex flex-col gap-10 self-center absolute sm:static z-20 bottom-40">
				<a
					href="/cv/CV_GRZEGORZ_SYPEK_P_2024.pdf"
					download="CV_GRZEGORZ_SYPEK_P_2024.pdf"
					rel="noopener noreferrer"
				>
					<Button type="empty">GET MY CV AS PDF FILE </Button>
				</a>
				<a
					href="https://gregsypek.github.io/CV"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button type="empty">GET MY CV FROM THE BROWSER </Button>
				</a>
			</div>
		</div>
	);
};

export default Footer;
