import { CollateralizationRatio } from "@/components/CollateralizationRatio";
import { Footer } from "@/components/Footer";
import Head from "@/components/Head";
import { Header } from "@/components/header";
import Holdings from "@/components/Holdings";
import { LearnMore } from "@/components/LearnMore";
import ReserveAddresses from "@/components/ReserveAddresses";
import { ReserveComposition } from "@/components/ReserveComposition";
import { StableTokens } from "@/components/StableTokens";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div className="relative max-w-full overflow-x-hidden">
      <Head />
      <main className="mx-auto w-full max-w-[calc(100vw_-_32px)] content:max-w-[1120px]">
        <Header />
        <section className="mb-8 mt-6 flex flex-col items-center justify-center md:mb-[56px]">
          <MainHeading />
          <SubHeading />
        </section>
        <div className="flex flex-col gap-8 md:gap-14">
          <StableTokens />
          <CollateralizationRatio />
          <Holdings />
          <ReserveComposition />
          <ReserveAddresses reserveAssets={[]} />
        </div>
        <DisclaimerText />
      </main>
      <LearnMore />
      <Footer />
      {/* Top Left Gradient */}
      <GradientPrimaryLight className="-left-[600px] top-[950px] overflow-x-hidden dark:hidden" />
      <GradientPrimaryLightMobile className="-left-[328px] top-[260.58px] h-[602px] w-[654px] overflow-x-hidden" />
      <GradientPrimaryLightMobile className="-left-[231px] top-[1651px] h-[368px] w-[411px] overflow-x-hidden" />
      {/* Bottom Right Gradient */}
      <GradientPrimaryLight className="-right-[600px] top-[300px] overflow-x-hidden dark:hidden" />
      <GradientPrimaryLight className="-right-[600px] top-[1850px] overflow-x-hidden dark:hidden" />
    </div>
  );
}

const GradientPrimaryLight = ({ className }: { className?: string }) => {
  return (
    <div
      className={`absolute -z-20 hidden h-[1100px] w-[1100px] bg-gradient-radial-primary-light bg-contain bg-center md:block ${className} `}
    />
  );
};

const GradientPrimaryLightMobile = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`absolute -z-10 bg-gradient-radial-primary-light-mobile bg-contain bg-center md:hidden ${className}`}
    >
      {children}
    </div>
  );
};
const SubHeading = () => {
  return (
    <p className="mb-0 mt-4 max-w-[690px] text-center font-inter leading-[1.2] md:mt-8 md:text-[18px]">
      A diversified portfolio of crypto assets supporting the ability of the
      Mento Platform to expand and contract the supply of Mento stablecoins.
    </p>
  );
};

const MainHeading = () => {
  return (
    <h1 className="text-center font-fg text-[32px]/none font-bold md:flex md:gap-1 md:text-[56px]/none">
      <span className="text-transparent [-webkit-text-stroke:1.2px_black] dark:[-webkit-text-stroke:1.2px_white]">
        THE MENTO
      </span>
      <br className="md:hidden" />
      <span className={``}>RESERVE</span>
    </h1>
  );
};

const DisclaimerText = () => {
  return (
    <section className="my-[32px] flex flex-col items-center justify-center md:my-[56px]">
      <p className="mb-0 text-center font-inter md:text-lg">
        <span className="font-semibold">Disclaimer:</span> nothing herein
        constitutes an offer to sell, or the solicitation of an offer to buy any
        securities or tokens.
      </p>
    </section>
  );
};
