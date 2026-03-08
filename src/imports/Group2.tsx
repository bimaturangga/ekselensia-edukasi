import clsx from "clsx";
import img654B031Fa2Fcfc932Eaf3630Ui20InspirationP500Jpg from "figma:asset/273cc0077c36920d5b5deb2283506f48a65147fd.png";
import img6470284E041Bb767Ea8D82EaBlog20Thumbnail2020CountdownP500Png from "figma:asset/6c9d01b4aa6e6539f16f8683e8b66a5862c58ed1.png";
import img647028888Fa4E53B4286Df39Framer20Instagram20ThumbnailP500Png from "figma:asset/5b598d5b8d933e94e285f4b05dcb9409da59a211.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("-translate-y-1/2 absolute left-0 rounded-[12px] w-[380px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">{children}</div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[0_800px_0_0]" data-name="List → Listitem → Link">
        <div className="absolute h-[250px] left-0 overflow-clip right-0 rounded-[12px] top-0" data-name="div.blog-image-wrapper">
          <Wrapper additionalClassNames="h-[237.88px] top-[calc(50%-6.06px)]">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img654B031Fa2Fcfc932Eaf3630Ui20InspirationP500Jpg} />
          </Wrapper>
        </div>
        <div className="absolute h-[164px] left-0 right-0 top-[250px]" data-name="div.blog-card-content">
          <div className="absolute h-[56px] left-[16px] right-[16px] top-[20px]" data-name="Heading 6">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[52px] justify-center leading-[28px] left-0 not-italic text-[#282735] text-[21.563px] top-[28px] w-[271.53px]">
              <p className="mb-0">Top 20 UI Inspiration Sites</p>
              <p>(2023)</p>
            </div>
          </div>
          <div className="absolute h-[60px] left-[16px] right-[16px] top-[84px]" data-name="p.blog-paragraph">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[57px] justify-center leading-[20px] left-0 not-italic text-[#818498] text-[14px] top-[29.5px] tracking-[-0.14px] w-[341.84px]">
              <p className="mb-0">{`We've collated the top 20 UI inspiration sites, all with`}</p>
              <p className="mb-0">links in one handy spot! Find your inspiration for your</p>
              <p>next project.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[0_400px]" data-name="List → Listitem → Link">
        <div className="absolute h-[250px] left-0 overflow-clip right-0 rounded-[12px] top-0" data-name="div.blog-image-wrapper">
          <Wrapper additionalClassNames="h-[253.08px] top-[calc(50%+1.54px)]">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img6470284E041Bb767Ea8D82EaBlog20Thumbnail2020CountdownP500Png} />
          </Wrapper>
        </div>
        <div className="absolute h-[144px] left-0 right-0 top-[250px]" data-name="div.blog-card-content">
          <div className="absolute h-[56px] left-[16px] right-[16px] top-[20px]" data-name="Heading 6">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[52px] justify-center leading-[28px] left-0 not-italic text-[#282735] text-[21.938px] top-[28px] w-[324.28px]">
              <p className="mb-0">How to add a countdown timer</p>
              <p>to Framer</p>
            </div>
          </div>
          <div className="absolute h-[40px] left-[16px] right-[16px] top-[84px]" data-name="p.blog-paragraph">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[37px] justify-center leading-[20px] left-0 not-italic text-[#818498] text-[14px] top-[19.5px] tracking-[-0.14px] w-[313.14px]">
              <p className="mb-0">Learn how to add a beautiful countdown to your</p>
              <p>Framer project. Add it to your project in seconds</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[0_0_0_800px]" data-name="List → Listitem → Link">
        <div className="absolute h-[250px] left-0 overflow-clip right-0 rounded-[12px] top-0" data-name="div.blog-image-wrapper">
          <Wrapper additionalClassNames="h-[253.08px] top-[calc(50%+1.54px)]">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img647028888Fa4E53B4286Df39Framer20Instagram20ThumbnailP500Png} />
          </Wrapper>
        </div>
        <div className="absolute h-[184px] left-0 right-0 top-[250px]" data-name="div.blog-card-content">
          <div className="absolute h-[56px] left-[16px] right-[16px] top-[20px]" data-name="Heading 6">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[52px] justify-center leading-[28px] left-0 not-italic text-[#282735] text-[22.125px] top-[28px] w-[322.61px]">
              <p className="mb-0">How to add an Instagram Feed</p>
              <p>to Framer (2023)</p>
            </div>
          </div>
          <div className="absolute h-[80px] left-[16px] right-[16px] top-[84px]" data-name="p.blog-paragraph">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[77px] justify-center leading-[20px] left-0 not-italic text-[#818498] text-[14px] top-[39.5px] tracking-[-0.14px] w-[342.61px]">
              <p className="mb-0">In this article we will spotlight the best way to build a</p>
              <p className="mb-0">beautiful Instagram feed in your Framer sites. Built</p>
              <p className="mb-0">specifically for Framer and 100% free for small and</p>
              <p>personal sites.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}