import clsx from "clsx";
import svgPaths from "./svg-dthv7p9z7h";

function Frame({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[30px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}
type SpanTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanText({ text, additionalClassNames = "" }: SpanTextProps) {
  return (
    <div className={clsx("content-stretch flex items-start opacity-70 relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.15px] whitespace-nowrap">
        <p className="leading-[18px]">{text}</p>
      </div>
    </div>
  );
}
type ItemTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ItemText({ text, additionalClassNames = "" }: ItemTextProps) {
  return (
    <div className={clsx("content-stretch flex items-start pb-px relative shrink-0 w-[220px]", additionalClassNames)}>
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[16px] text-white tracking-[-0.05px] whitespace-nowrap">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#101010] content-stretch flex items-start justify-center px-[180px] relative size-full" data-name="Footer">
      <div className="flex-[1_0_0] max-w-[1080px] min-h-px min-w-px relative" data-name="div.container_root__YvPee">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[40px] relative w-full">
          <div className="h-[274px] relative shrink-0 w-[1000px]" data-name="div.footer_content__AqYKr">
            <div className="absolute content-stretch flex items-start justify-center left-0 opacity-70 overflow-clip top-[48px] w-[30px]" data-name="SVG">
              <Frame>
                <path clipRule="evenodd" d={svgPaths.p35a36e40} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
              </Frame>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[15px] inset-[48px_630px_36px_150px] items-start" data-name="div.footer_group__RHSzq">
              <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.1px] whitespace-nowrap">
                <p className="leading-[22px]">Paste</p>
              </div>
              <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[220px]" data-name="List">
                <ItemText text="Try for free" additionalClassNames="pr-[150px]" />
                <ItemText text="Get on Setapp" additionalClassNames="pr-[124px]" />
                <ItemText text="Use cases" additionalClassNames="pr-[151px]" />
                <ItemText text="Updates" additionalClassNames="pr-[163px]" />
                <ItemText text="Pricing" additionalClassNames="pr-[174px]" />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[15px] inset-[48px_390px_36px_390px] items-start pb-[32px]" data-name="div.footer_group__RHSzq">
              <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.1px] whitespace-nowrap">
                <p className="leading-[22px]">Resources</p>
              </div>
              <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[220px]" data-name="List">
                <div className="content-stretch flex items-start pb-px pr-[119px] relative shrink-0 w-[220px]" data-name="Item">
                  <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[16px] text-white tracking-[-0.05px] whitespace-nowrap">
                    <p className="leading-[24px]">{`Help & support`}</p>
                  </div>
                </div>
                <ItemText text="Blog" additionalClassNames="pr-[189px]" />
                <ItemText text="Terms of use" additionalClassNames="pr-[135px]" />
                <ItemText text="Privacy policy" additionalClassNames="pr-[128px]" />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[15px] inset-[48px_150px_36px_630px] items-start pb-[32px]" data-name="div.footer_group__RHSzq">
              <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.1px] whitespace-nowrap">
                <p className="leading-[22px]">More</p>
              </div>
              <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[220px]" data-name="List">
                <ItemText text="About" additionalClassNames="pr-[179px]" />
                <ItemText text="Contact" additionalClassNames="pr-[166px]" />
                <ItemText text="Beta program" additionalClassNames="pr-[130px]" />
                <ItemText text="Suggest a feature" additionalClassNames="pr-[103px]" />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[16px] inset-[48px_0_36px_916.09px] items-start pb-[122px]" data-name="div.footer_group__RHSzq">
              <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.1px] whitespace-nowrap">
                <p className="leading-[22px]">Follow us</p>
              </div>
              <div className="content-stretch flex gap-[8px] items-start pr-[15.91px] relative shrink-0 w-[83.91px]" data-name="List">
                <div className="content-stretch flex items-start relative shrink-0" data-name="Item">
                  <div className="content-stretch flex items-start justify-center opacity-70 overflow-clip relative shrink-0 w-[30px]" data-name="Link - Follow Paste on Twitter ⏵ SVG">
                    <Frame>
                      <path d={svgPaths.p3639d780} fill="var(--fill-0, white)" id="Vector" />
                    </Frame>
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0" data-name="Item">
                  <div className="content-stretch flex items-start justify-center opacity-70 overflow-clip relative shrink-0 w-[30px]" data-name="Link - Follow Paste on Facebook ⏵ SVG">
                    <Frame>
                      <path d={svgPaths.p24267e00} fill="var(--fill-0, white)" id="Vector" />
                    </Frame>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start justify-between pb-[36px] pt-[37px] relative shrink-0 w-[1000px]" data-name="div.footer_copyright__Y_iux">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
            <SpanText text="© 2023 Paste Team ApS. All rights reserved." additionalClassNames="pr-[17.98px]" />
            <SpanText text="All trademarks are the property of their respective owners." additionalClassNames="pr-[24.64px]" />
          </div>
        </div>
      </div>
    </div>
  );
}