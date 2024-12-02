import Button from "../components/Button";

const Footer = () => {
	return (
		<div className="max-container   flex flex-wrap sm:flex-nowrap gap-5 ">
			<div className="">
				<h1 className="section-header relative z-20 text-left align-middle p-4 ">
					Reach Out For More?
				</h1>
				<p className="p-4 text-gray relative z-20  ">
					I am available on &nbsp;
					<a href="" className="border-b">
						X
					</a>
					&nbsp;and&nbsp;
					<a href="" className="border-b">
						Linkedin.
					</a>
					&nbsp;You can also check my CV
				</p>
			</div>
			<div className="self-start ">
				<img
					src="/hero.png"
					width="500"
					height="800"
					alt="Grzegorz Sypek"
					className="object-contain relative z-10 h-2/3 md:h-full  mask-gradient-30 sm:-translate-y-1/4 scale-75 sm:scale-100"
					loading="lazy"
				/>
			</div>
			<div className="uppercase flex flex-col gap-10 self-center absolute sm:static z-20 bottom-20 ">
				<Button type="empty">GET MY CV FROM THE BROWSER </Button>
				<Button type="empty">GET MY CV AS PDF FILE </Button>
			</div>
		</div>
	);
};

export default Footer;
