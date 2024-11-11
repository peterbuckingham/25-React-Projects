import KavyarLogo from '../Images/Logos/Kavyar.png'
import WomanManLogo from '../Images/Logos/WM.png'
import news24Logo from '../Images/Logos/news24.png'

function BioLogos() {
  return (
    <div className="BioLogoContainer">
      <div className="bioLogoDivider1"></div>
      <div className="marquee marquee--8">
        <img
          className="marquee__item kavyarLogo"
          src={KavyarLogo}
          width="272.5px"
          height="46px"
          alt="Logo 1"
        />
        <img
          className="marquee__item womanManLogo"
          src={WomanManLogo}
          width="62.5px"
          height="86.25px"
          alt="Logo 2"
        />
        <img
          className="marquee__item news24Logo"
          src={news24Logo}
          width="200px"
          height="62.5"
          alt="Logo 3"
        />
        <img
          className="marquee__item"
          src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=4"
          width="100"
          height="100"
          alt="Logo 4"
        />
        <img
          className="marquee__item"
          src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=5"
          width="100"
          height="100"
          alt="Logo 5"
        />
        <img
          className="marquee__item"
          src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=6"
          width="100"
          height="100"
          alt="Logo 6"
        />
        <img
          className="marquee__item"
          src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=7"
          width="100"
          height="100"
          alt="Logo 7"
        />
        <img
          className="marquee__item"
          src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=8"
          width="100"
          height="100"
          alt="Logo 8"
        />
      </div>
      <div className="bioLogoDivider2"></div>
    </div>
  );
}

export default BioLogos;
