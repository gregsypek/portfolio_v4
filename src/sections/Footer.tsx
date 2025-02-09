import Button from '../components/Button';

const Footer = () => {
  return (
    <div className="max-container flex flex-wrap gap-5 sm:flex-nowrap">
      <div className="">
        <h1 className="section-header relative z-20 p-4 text-left align-middle">
          Reach Out For More?
        </h1>
        <p className="relative z-20 p-4 text-gray">
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
            href="https://www.linkedin.com/in/grzegorz-sypek/"
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
      <div className="self-start">
        <img
          src="/hero.png"
          width="500"
          height="800"
          alt="Grzegorz Sypek"
          className="relative z-10 h-2/3 -translate-y-20 scale-75 object-contain mask-gradient-30 md:h-full md:-translate-y-1/4 md:scale-100 lg:-translate-y-8"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-40 z-20 flex flex-col gap-10 self-center uppercase sm:static">
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
