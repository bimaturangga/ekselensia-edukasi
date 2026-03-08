import clsx from "clsx";
import imgGuillermoJpeg from "figma:asset/1404823a60b6a548849e906ffd7fc068877a354f.png";
import imgVladJpeg from "figma:asset/c4f4b8674b6fa8ccb330701919917101d452e1ea.png";
import imgMaayanJpeg from "figma:asset/c1559e60ca26672497523eb518f0c81fc4b5331a.png";
import imgZenoJpeg from "figma:asset/c5046f407a0ecca4239f7d65625672a6fa032486.png";
import imgAdamJpeg from "figma:asset/7e12d0a08e7141bb44cbfb67b83244b69538f90f.png";
import imgAshleyJpeg from "figma:asset/b52e9c36d86e495ee839e4cf05ec811a43580555.png";
import imgChunJpeg from "figma:asset/f7a0739a815ab34e79a1081de8d9a402cab4675d.png";
import imgCharlyJpeg from "figma:asset/901d814075d4d3902fa1617877d225040fa95352.png";
import imgMarkPng from "figma:asset/27b1531f4b353b3410e71d55d2bdeef1e3c52b6c.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute left-[28px] rounded-[9999px] top-[24px] w-[40px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">{children}</div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, text2, text3, text4, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[108px] justify-center leading-[22.75px] left-[28px] not-italic text-[#4b5563] text-[14px]", additionalClassNames)}>
      <p className="mb-0">{text}</p>
      <p className="mb-0">{text1}</p>
      <p className="mb-0">{text2}</p>
      <p className="mb-0">{text3}</p>
      <p>{text4}</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute border border-[rgba(229,231,235,0.6)] border-solid h-[176.25px] left-[24px] right-[682.67px] rounded-[24px] top-0" data-name="Link">
        <Wrapper additionalClassNames="bottom-[110.25px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGuillermoJpeg} />
        </Wrapper>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[21px] left-[80px] not-italic text-[#1f2937] text-[14px] top-[45px] w-[107.59px]">
          <p className="mb-0">Guillermo Rauch</p>
          <p className="text-[#6b7280]">CEO, Vercel</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[62.5px] justify-center leading-[22.75px] left-[28px] not-italic text-[#4b5563] text-[14px] top-[115.25px] w-[259.39px]">
          <p className="mb-0">The @mintlify team absolutely nailed</p>
          <p className="mb-0">{`combining docs search and AI Q&A in a`}</p>
          <p>delightful experience.</p>
        </div>
      </div>
      <div className="absolute border border-[rgba(229,231,235,0.6)] border-solid h-[221.75px] left-[24px] right-[682.67px] rounded-[24px] top-[188.25px]" data-name="Link">
        <Wrapper additionalClassNames="bottom-[155.75px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVladJpeg} />
        </Wrapper>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[21px] left-[80px] not-italic text-[#1f2937] text-[14px] top-[45px] w-[133.56px]">
          <p className="mb-0">Vlad Matsiiako</p>
          <p className="text-[#6b7280]">Co-founder, Infisical</p>
        </div>
        <Helper text="Mintlify is absolutely amazing! Their" text1="team has been such a pleasure to work" text2="with, and just look at our docs - they" text3="look gorgeous! I definitely think" text4="everyone should try Mintlify out!" additionalClassNames="top-[138px] w-[259.25px]" />
      </div>
      <div className="absolute border border-[rgba(229,231,235,0.6)] border-solid h-[358.25px] left-[24px] right-[682.67px] rounded-[24px] top-[422px]" data-name="Link">
        <Wrapper additionalClassNames="bottom-[292.25px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMaayanJpeg} />
        </Wrapper>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[21px] left-[80px] not-italic text-[#1f2937] text-[14px] top-[45px] w-[158.22px]">
          <p className="mb-0">Maayan Salom</p>
          <p className="text-[#6b7280]">Co-founder, Elementary</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[244.5px] justify-center leading-[22.75px] left-[28px] not-italic text-[#4b5563] text-[14px] top-[206.25px] w-[250.75px]">
          <p className="mb-0">Mintlify is amazing for us! Even as a</p>
          <p className="mb-0">small team we struggled to keep up</p>
          <p className="mb-0">with dev and update the docs on</p>
          <p className="mb-0">changes. Now the docs are managed</p>
          <p className="mb-0">as code and are part of the dev</p>
          <p className="mb-0">process and PR. As an open source</p>
          <p className="mb-0">project - moving the docs to the repo</p>
          <p className="mb-0">(with zero effort) also enabled our</p>
          <p className="mb-0">community to help us maintain and fix</p>
          <p className="mb-0">problems as contributors. Our devs</p>
          <p>and our users love it.</p>
        </div>
      </div>
      <div className="absolute border border-[rgba(229,231,235,0.6)] border-solid h-[290px] left-[353.33px] right-[353.34px] rounded-[24px] top-0" data-name="Link">
        <Wrapper additionalClassNames="bottom-[224px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgZenoJpeg} />
        </Wrapper>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[21px] left-[80px] not-italic text-[#1f2937] text-[14px] top-[45px] w-[86.01px]">
          <p className="mb-0">Zeno Rocha</p>
          <p className="text-[#6b7280]">CEO, Resend</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[176.25px] justify-center leading-[22.75px] left-[28px] not-italic text-[#4b5563] text-[14px] top-[172.13px] w-[255.68px]">
          <p className="mb-0">{`This is a must-have if you're building`}</p>
          <p className="mb-0">any kind of developer tools. We used</p>
          <p className="mb-0">other options in the past, which feels</p>
          <p className="mb-0">outdated in terms of look-n-feel when</p>
          <p className="mb-0">compared to Mintlify. The team helped</p>
          <p className="mb-0">us set up two different websites and</p>
          <p className="mb-0">even migrated all the content for us. I</p>
          <p>{`can't recommend it enough.`}</p>
        </div>
      </div>
      <div className="absolute border border-[rgba(229,231,235,0.6)] border-solid h-[153.5px] left-[353.33px] right-[353.34px] rounded-[24px] top-[302px]" data-name="Link">
        <Wrapper additionalClassNames="bottom-[87.5px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAdamJpeg} />
        </Wrapper>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[21px] left-[80px] not-italic text-[#1f2937] text-[14px] top-[45px] w-[142.78px]">
          <p className="mb-0">Adam Carrigan</p>
          <p className="text-[#6b7280]">Co-founder, MindsDB</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[39.75px] justify-center leading-[22.75px] left-[28px] not-italic text-[#4b5563] text-[14px] top-[103.88px] w-[248.45px]">
          <p className="mb-0">My team loves Mintlify! Great product</p>
          <p>and a super supportive team.</p>
        </div>
      </div>
      <div className="absolute border border-[rgba(229,231,235,0.6)] border-solid h-[242.75px] left-[353.33px] right-[353.34px] rounded-[24px] top-[467.5px]" data-name="Link">
        <Wrapper additionalClassNames="bottom-[176.75px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAshleyJpeg} />
        </Wrapper>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[59px] justify-center leading-[21px] left-[80px] not-italic text-[#1f2937] text-[14px] top-[55.5px] w-[194.56px]">
          <p className="mb-0">Ashley Mulligan</p>
          <p className="mb-0 text-[#6b7280]">Head of Product Engineering,</p>
          <p className="text-[#6b7280]">Flatfile</p>
        </div>
        <Helper text="Mintlify was the only option that" text1="checked all the boxes. To get the look," text2="feel, and features we wanted for our" text3="documentation, it had to be" text4="homegrown or Mintlify." additionalClassNames="top-[159px] w-[254.71px]" />
      </div>
      <div className="absolute border border-[rgba(229,231,235,0.6)] border-solid h-[176.25px] left-[682.66px] right-[24.01px] rounded-[24px] top-0" data-name="Link">
        <Wrapper additionalClassNames="bottom-[110.25px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgChunJpeg} />
        </Wrapper>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[21px] left-[80px] not-italic text-[#1f2937] text-[14px] top-[45px] w-[116.57px]">
          <p className="mb-0">Chun Jiang</p>
          <p className="text-[#6b7280]">CEO, Monterey AI</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[62.5px] justify-center leading-[22.75px] left-[28px] not-italic text-[#4b5563] text-[14px] top-[115.25px] w-[257.21px]">
          <p className="mb-0">Absolutely the best. It is freaking easy</p>
          <p className="mb-0">to set up, and the team has been great</p>
          <p>to work with!</p>
        </div>
      </div>
      <div className="absolute border border-[rgba(229,231,235,0.6)] border-solid h-[267.25px] left-[682.66px] right-[24.01px] rounded-[24px] top-[188.25px]" data-name="Link">
        <Wrapper additionalClassNames="bottom-[201.25px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCharlyJpeg} />
        </Wrapper>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[21px] left-[80px] not-italic text-[#1f2937] text-[14px] top-[45px] w-[75.1px]">
          <p className="mb-0">Charly Poly</p>
          <p className="text-[#6b7280]">CEO, Defer</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[153.5px] justify-center leading-[22.75px] left-[28px] not-italic text-[#4b5563] text-[14px] top-[160.75px] w-[254.9px]">
          <p className="mb-0">Why spend a week coding your own</p>
          <p className="mb-0">documentation (and optimizing it for</p>
          <p className="mb-0">SEO, design, etc.) while Mintlify brings</p>
          <p className="mb-0">you the best in class documentation in</p>
          <p className="mb-0">a few minutes? Worked on</p>
          <p className="mb-0">documentation for years, in unicorns</p>
          <p>{`and open source and I'm sold!`}</p>
        </div>
      </div>
      <div className="absolute border border-[rgba(229,231,235,0.6)] border-solid h-[244.5px] left-[682.66px] right-[24.01px] rounded-[24px] top-[467.5px]" data-name="Link">
        <Wrapper additionalClassNames="bottom-[178.5px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMarkPng} />
        </Wrapper>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[21px] left-[80px] not-italic text-[#1f2937] text-[14px] top-[45px] w-[127.21px]">
          <p className="mb-0">Mark Bao</p>
          <p className="text-[#6b7280]">Co-founder, Goody</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[130.75px] justify-center leading-[22.75px] left-[28px] not-italic text-[#4b5563] text-[14px] top-[149.38px] w-[258.95px]">
          <p className="mb-0">{`The way Mintlify's docs were displayed`}</p>
          <p className="mb-0">just felt really user-friendly for us, and</p>
          <p className="mb-0">more importantly, for our developer</p>
          <p className="mb-0">customers. I felt like I had finally found</p>
          <p className="mb-0">a tool that could give us the Stripe-</p>
          <p>level documentation we wanted.</p>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[240px] left-0 right-0 to-[70%] to-white" data-name="div.absolute" />
    </div>
  );
}