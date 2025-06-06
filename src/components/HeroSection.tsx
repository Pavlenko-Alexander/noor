import React from 'react';
import starsImage from '../assets/images/stars.webp';
import cardsImage from '../assets/images/cards.png';

interface HeroSectionProps {
  productImageUrl: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  productImageUrl,
  ctaLink
}) => {
  const benefits = [
    'Visible Results in as little as 2-4 Days*',
    'Relaxes muscles without any risk*',
    'Powered by Syn-Ake™ Peptide: Clinically shown to reduce wrinkle depth by 52% in 28 days¹',
    'Works For All Skin Types At Any Age*',
    'Hydrating + Skin-Firming Without Fillers or Freezing'
  ];

  return (
    <section className="font-roboto bg-[#f8ede5]">
      <div className="px-[15px] max-w-7xl flex flex-col items-center xl:flex-row gap-2.5 mx-auto">
        <div className="md:w-3/5 text-center my-[15px] xl:my-7.5">
          <div className="flex items-center justify-center mb-2 xl:mb-5">
            <img
              src={starsImage}
              alt="5 stars"
              width={70}
              height={13}
              className="max-w-[70px] h-auto"
            />
            <span className="font-gotham pl-2.5 tracking-[0.01] text-sm xl:text-base">
              103,743+ Happy Noor Customers!
            </span>
          </div>
          <h1 className="font-bold text-[#000] text-center text-2xl xl:text-[40px] leading-[32px] xl:leading-[52px]">
            <span className="text-[#525a31] block xl:inline-block">
              The Korean Needle-Free Botox Alternative:{' '}
            </span>
            Lift Deep Wrinkles and Revives a Youthful, Natural Look… In a Few
            Days*
          </h1>
          <img
            src={productImageUrl}
            alt="Product Image"
            width={668}
            height={600}
            className="md:hidden mx-auto"
          />
          <ul className="font-gotham flex flex-col items-start md:items-center my-5">
            {benefits.map((benefit, index) =>
              <li
                key={index}
                className="text-left xl:text-center text-base xl:text-xl xl:mb-0.5 xl:leading-7 leading-[22px]"
              >
                ✔️
                {benefit}
              </li>
            )}
          </ul>
          <div className="w-full mx-auto mb-5 xl:mb-0">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#525a31] text-white font-bold text-xl py-3 px-5 xl:py-3.5 xl:px-6 rounded-[10px] mx-auto"
            >
              50% OFF FOR EXISTING CUSTOMERS!
            </a>
            <div className="font-gotham my-2 text-xs capitalize leading-7">
              100% Satisfaction. 180-Day Money Back Guarantee
            </div>
            <img
              src={cardsImage}
              alt="Cards"
              width={208}
              height={21}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="md:w-[70%] xl:self-end hidden md:block">
          <img
            src={productImageUrl}
            alt="Product Image"
            width={668}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
