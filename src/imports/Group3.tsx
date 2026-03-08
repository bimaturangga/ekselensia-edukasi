import clsx from "clsx";
import svgPaths from "./svg-8hop365u0j";
import img65077A83E277E4Dbf2Fe993BHomepageCardWebp from "figma:asset/f98e5f4bc5a841cfbd1c8502239d298addfd07c0.png";
import img6508D6304Bda3Eeeb9125D89HomepagePg2201Webp from "figma:asset/6b636ef45035b198cc0125002fe7af3f35fe2e17.png";
import img6658B168Fa4B2A3846Ac7360HomepagePolicyWebp from "figma:asset/bc5eff130a85f656606b55310d9d3aebfb0b799f.png";
import img6508D6184A0B42454Dff1135HomepagePg31201Webp from "figma:asset/e5dadaad4b06b597f96cff22106877934db91710.png";
import img6508D614Adcbe80C98Fc8E5AHomepagePg32201Webp from "figma:asset/5d617502f3005b05dbac4c219e645fcdcd9a791d.png";
import img65087C847B014Ffa20Cae12AHomepagePg4P500Webp from "figma:asset/5e7b0a9cae821c303031c4a4f1396d69c6472821.png";
import imgRectangle from "figma:asset/4f28f4812be878c6e472dc353fe5be57026b113e.png";
import imgRectangle1 from "figma:asset/f557905195ed8d76b1e5bf32bbbb82f38b6380b3.png";
import imgRectangle2 from "figma:asset/0cebcdb8422c3bad3e09b8e4d973df4014f86418.png";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3, imgGroup4 } from "./svg-0qddx";

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 6.77089 13.2823" className="absolute block size-full">
      <g id="Group">{children}</g>
    </svg>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="flex-none rotate-[NaNdeg] scale-x-[NaN%] scale-y-[NaN%] size-0 skew-x-[NaNdeg] skew-y-[NaNdeg]">{children}</div>
    </div>
  );
}
type RectangleBackgroundImageProps = {
  additionalClassNames?: string;
};

function RectangleBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<RectangleBackgroundImageProps>) {
  return (
    <div style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }} className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">{children}</div>
    </div>
  );
}
type GroupBackgroundImage9Props = {
  additionalClassNames?: string;
};

function GroupBackgroundImage9({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupBackgroundImage9Props>) {
  return (
    <div style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }} className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-1.42px_0]">{children}</div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }} className="relative size-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        {children}
      </svg>
    </div>
  );
}
type GroupBackgroundImage8Props = {
  additionalClassNames?: string;
};

function GroupBackgroundImage8({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupBackgroundImage8Props>) {
  return (
    <div style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }} className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2546 16.0506">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type GroupBackgroundImage7Props = {
  additionalClassNames?: string;
};

function GroupBackgroundImage7({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupBackgroundImage7Props>) {
  return (
    <div style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }} className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 283.301 227.635">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.3281 160.956">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }} className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-2.21%_-2.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.3262 66.9987">
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type GroupBackgroundImage6Props = {
  additionalClassNames?: string;
};

function GroupBackgroundImage6({ additionalClassNames = "" }: GroupBackgroundImage6Props) {
  return (
    <div style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }} className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.31673 1.41962">
        <g id="Group">
          <path d={svgPaths.pcb94800} fill="var(--fill-0, #E4F2E7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
type GroupBackgroundImage5Props = {
  additionalClassNames?: string;
};

function GroupBackgroundImage5({ additionalClassNames = "" }: GroupBackgroundImage5Props) {
  return (
    <BackgroundImage2 additionalClassNames={additionalClassNames}>
      <g id="Group" opacity="0.75">
        <path d={svgPaths.p38af3a00} fill="var(--fill-0, #5683D2)" id="Vector" />
      </g>
    </BackgroundImage2>
  );
}
type GroupBackgroundImage4Props = {
  additionalClassNames?: string;
};

function GroupBackgroundImage4({ additionalClassNames = "" }: GroupBackgroundImage4Props) {
  return (
    <BackgroundImage2 additionalClassNames={additionalClassNames}>
      <g id="Group" opacity="0.25">
        <path d={svgPaths.p38af3a00} fill="var(--fill-0, #5683D2)" id="Vector" />
      </g>
    </BackgroundImage2>
  );
}
type GroupBackgroundImage3Props = {
  additionalClassNames?: string;
};

function GroupBackgroundImage3({ additionalClassNames = "" }: GroupBackgroundImage3Props) {
  return (
    <BackgroundImage additionalClassNames={additionalClassNames}>
      <path d={svgPaths.p1811df00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.83303" />
    </BackgroundImage>
  );
}
type GroupBackgroundImage2Props = {
  additionalClassNames?: string;
};

function GroupBackgroundImage2({ additionalClassNames = "" }: GroupBackgroundImage2Props) {
  return (
    <div style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }} className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.43528 10.8547">
        <g id="Group">
          <path d={svgPaths.p221e5a00} fill="var(--fill-0, #1C1B17)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
type GroupBackgroundImage1Props = {
  additionalClassNames?: string;
};

function GroupBackgroundImage1({ additionalClassNames = "" }: GroupBackgroundImage1Props) {
  return (
    <div style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }} className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 283.301 73.3322">
        <g id="Group">
          <path d={svgPaths.p1c3fcc00} fill="var(--fill-0, #FDFDFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
type GroupBackgroundImageProps = {
  additionalClassNames?: string;
};

function GroupBackgroundImage({ additionalClassNames = "" }: GroupBackgroundImageProps) {
  return (
    <div style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }} className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.6601 61.1102">
        <g id="Group">
          <path d={svgPaths.p2f9e7680} fill="var(--fill-0, #E4EBF6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#efefef] h-[450px] left-0 right-[890.67px] rounded-[8px] top-0" data-name="Link">
        <div className="absolute inset-0 overflow-clip" data-name="Container">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#1c1b17] text-[19.219px] text-center top-[43px] tracking-[-0.2px] w-[194.22px]">
            <p className="leading-[22px]">Global corporate card</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[36px] justify-center leading-[18px] left-[calc(50%+0.08px)] not-italic text-[13.344px] text-[rgba(28,27,23,0.7)] text-center top-[80px] w-[204.09px]">
            <p className="mb-0">Control your spend globally with</p>
            <p>unlimited cards and full visibility.</p>
          </div>
          <div className="absolute blur-[0.5px] inset-[95.33%_12.03%_3.56%_12.02%]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 320 5\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(16 0 0 0.25 160 2.5)\\'><stop stop-color=\\'rgba(31,31,31,0.31)\\' offset=\\'0.875\\'/><stop stop-color=\\'rgba(31,31,31,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
          <div className="-translate-y-1/2 absolute h-[202.63px] left-[50.66px] top-[calc(50%+67.7px)] w-[320px]" data-name="65077a83e277e4dbf2fe993b_Homepage_Card.webp">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img65077A83E277E4Dbf2Fe993BHomepageCardWebp} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efefef] h-[450px] left-[445.33px] right-[445.34px] rounded-[8px] top-0" data-name="Link">
        <div className="absolute inset-0 overflow-clip" data-name="Container">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#1c1b17] text-[19.219px] text-center top-[43px] tracking-[-0.2px] w-[198.29px]">
            <p className="leading-[22px]">Expense management</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[46.8px] justify-center leading-[18px] left-[calc(50%+0.08px)] not-italic text-[14px] text-[rgba(28,27,23,0.7)] text-center top-[85.4px] w-[256.21px]">
            <p className="mb-0">Automate expense reporting and control</p>
            <p>employee expenses at scale.</p>
          </div>
          <div className="-translate-x-1/2 absolute bottom-0 left-[calc(50%+0.01px)] top-[116.8px] w-[690px]" data-name="6508d6304bda3eeeb9125d89_Homepage_PG_2%20(1).webp">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img6508D6304Bda3Eeeb9125D89HomepagePg2201Webp} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efefef] h-[450px] left-[890.66px] right-0 rounded-[8px] top-0" data-name="Link">
        <div className="absolute inset-0 overflow-clip" data-name="Container">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#1c1b17] text-[18.281px] text-center top-[43px] tracking-[-0.2px] w-[51.51px]">
            <p className="leading-[22px]">Travel</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[103.78px] justify-center leading-[18px] left-[calc(50%+0.09px)] not-italic text-[14px] text-[rgba(28,27,23,0.7)] text-center top-[113.89px] w-[253.72px]">
            <p className="mb-0">Build custom travel policies and manage</p>
            <p>bookings in Ramp’s platform.</p>
          </div>
          <div className="-translate-x-1/2 absolute bottom-0 left-1/2 rounded-[8px] top-[173.78px] w-[421.34px]" data-name="6658b168fa4b2a3846ac7360_homepage-policy.webp">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img6658B168Fa4B2A3846Ac7360HomepagePolicyWebp} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efefef] h-[450px] left-0 right-[890.67px] rounded-[8px] top-[474px]" data-name="Link">
        <div className="absolute inset-0 overflow-clip" data-name="Container">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#1c1b17] text-[19.219px] text-center top-[43px] tracking-[-0.2px] w-[207.92px]">
            <p className="leading-[22px]">Accounting automation</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[36px] justify-center leading-[18px] left-[calc(50%+0.08px)] not-italic text-[13.234px] text-[rgba(28,27,23,0.7)] text-center top-[80px] w-[229.03px]">
            <p className="mb-0">Stay compliant, eliminate errors, and</p>
            <p>close your books faster.</p>
          </div>
          <div className="-translate-y-1/2 absolute h-[202.33px] left-[24px] right-[24px] top-[calc(50%-17.83px)]" data-name="6508d6184a0b42454dff1135_Homepage_PG_3.1%20(1).webp">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[49.76%] left-0 max-w-none top-[25.12%] w-full" src={img6508D6184A0B42454Dff1135HomepagePg31201Webp} />
            </div>
          </div>
          <div className="absolute bottom-[141.67px] left-[24px] top-[207.66px] w-[373.33px]" data-name="6508d614adcbe80c98fc8e5a_Homepage_PG_3.2%20(1).webp">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img6508D614Adcbe80C98Fc8E5AHomepagePg32201Webp} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efefef] h-[450px] left-[445.33px] right-[445.34px] rounded-[8px] top-[474px]" data-name="Link">
        <div className="absolute inset-0 overflow-clip" data-name="Container">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#1c1b17] text-[19.375px] text-center top-[43px] tracking-[-0.2px] w-[160.17px]">
            <p className="leading-[22px]">Accounts payable</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[36px] justify-center leading-[18px] left-[calc(50%+0.09px)] not-italic text-[13.125px] text-[rgba(28,27,23,0.7)] text-center top-[80px] w-[259.45px]">
            <p className="mb-0">Pay bills faster with automated approvals,</p>
            <p>anywhere you spend.</p>
          </div>
          <div className="absolute h-[344px] left-0 right-0 top-[166.86px]" data-name="65087c847b014ffa20cae12a_Homepage_PG_4-p-500.webp">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[82.31%] left-0 max-w-none top-[8.85%] w-full" src={img65087C847B014Ffa20Cae12AHomepagePg4P500Webp} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efefef] h-[450px] left-[890.66px] right-0 rounded-[8px] top-[474px]" data-name="Link">
        <div className="absolute inset-0 overflow-clip" data-name="Container">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#1c1b17] text-[19.219px] text-center top-[43px] tracking-[-0.2px] w-[114.84px]">
            <p className="leading-[22px]">Procurement</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[54px] justify-center leading-[18px] left-[calc(50%+0.1px)] not-italic text-[13.234px] text-[rgba(28,27,23,0.7)] text-center top-[89px] w-[255.92px]">
            <p className="mb-0">Centralize intake and get early spend</p>
            <p className="mb-0">visibility with an automated procurement</p>
            <p>{`experience. `}</p>
          </div>
          <div className="absolute inset-[145.72px_0_6px_0]" data-name="SVG">
            <div className="absolute contents inset-0" data-name="Clip path group">
              <div className="absolute contents inset-[-66.61%_-199.98%_-66.95%_6.82%]" data-name="Group">
                <div className="absolute contents inset-[-66.61%_-199.98%_-66.95%_6.82%]" data-name="Clip path group">
                  <div className="absolute contents inset-[-202.24%_-199.98%_-46.72%_-221.37%]" data-name="Group">
                    <div className="absolute contents inset-[23.79%_-19.7%_23.2%_82.13%]" data-name="Group">
                      <div className="absolute inset-[23.79%_-19.7%_23.2%_109.28%] mask-position-[-460.433px_-70.961px,_-431.68px_-269.649px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <BackgroundImage1 additionalClassNames="inset-[-0.9%_0_-0.9%_-3.23%]">
                          <path d={svgPaths.p2baf8a80} id="Vector" stroke="var(--stroke-0, #DCDBD6)" strokeWidth="2.83303" />
                        </BackgroundImage1>
                      </div>
                      <GroupBackgroundImage9 additionalClassNames="inset-[50.17%_-9.7%_49.83%_82.13%] mask-position-[-346.051px_-149.641px,_-317.297px_-348.328px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.153 2.83303">
                          <g id="Group">
                            <path d="M0 1.41652H116.153" id="Vector" stroke="var(--stroke-0, #DCDBD6)" strokeWidth="2.83303" />
                          </g>
                        </svg>
                      </GroupBackgroundImage9>
                    </div>
                    <div className="absolute contents inset-[50.17%_17.21%_49.83%_81.88%]" data-name="Group">
                      <GroupBackgroundImage9 additionalClassNames="inset-[50.17%_17.21%_49.83%_81.88%] mask-position-[-344.988px_-149.64px,_-316.235px_-348.328px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.85364 2.83303">
                          <g id="Group">
                            <path d={svgPaths.p37e43180} id="Vector" stroke="var(--stroke-0, #5683D2)" strokeWidth="2.83303" />
                          </g>
                        </svg>
                      </GroupBackgroundImage9>
                    </div>
                    <div className="absolute contents inset-[23.53%_-124.68%_23.45%_187.02%]" data-name="Group">
                      <div className="absolute inset-[23.53%_-97.44%_23.45%_187.02%] mask-position-[-788px_-70.197px,_-759.246px_-268.885px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <BackgroundImage1 additionalClassNames="inset-[-0.9%_-3.23%_-0.9%_0]">
                          <path d={svgPaths.p8f05000} id="Vector" stroke="var(--stroke-0, #DCDBD6)" strokeWidth="2.83303" />
                        </BackgroundImage1>
                      </div>
                      <GroupBackgroundImage9 additionalClassNames="inset-[50.17%_-124.68%_49.83%_197.44%] mask-position-[-831.911px_-149.64px,_-803.158px_-348.328px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114.737 2.83303">
                          <g id="Group">
                            <path d="M114.737 1.41652H0" id="Vector" stroke="var(--stroke-0, #DCDBD6)" strokeWidth="2.83303" />
                          </g>
                        </svg>
                      </GroupBackgroundImage9>
                    </div>
                    <div className="absolute contents inset-[12.23%_17.77%_11.45%_15%]" data-name="Group">
                      <GroupBackgroundImage7 additionalClassNames="inset-[12.23%_17.77%_11.45%_15%] mask-position-[-63.181px_-36.483px,_-34.427px_-235.171px]">
                        <path d={svgPaths.pf6aa2b1} fill="var(--fill-0, #FDFDFC)" id="Vector" />
                      </GroupBackgroundImage7>
                      <GroupBackgroundImage additionalClassNames="inset-[21.23%_65.88%_58.28%_20.67%] mask-position-[-87.09px_-63.322px,_-58.337px_-262.01px]" />
                      <GroupBackgroundImage8 additionalClassNames="inset-[28.78%_70.01%_65.84%_24.95%] mask-position-[-105.115px_-85.855px,_-76.361px_-284.542px]">
                        <path d={svgPaths.p3aee1280} fill="var(--fill-0, #00A1E0)" id="Vector" />
                      </GroupBackgroundImage8>
                      <div className="absolute inset-[25.26%_48.57%_70.57%_37.13%] mask-position-[-156.452px_-75.358px,_-127.698px_-274.045px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.2552 12.4359">
                          <g id="Group">
                            <path d={svgPaths.p8a25d00} fill="var(--fill-0, #757267)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-[31.76%_49.73%_62.58%_37.13%] mask-position-[-156.424px_-94.719px,_-127.67px_-293.407px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.3814 16.8839">
                          <g id="Group">
                            <path d={svgPaths.peb29800} fill="var(--fill-0, #1C1B17)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-[32.31%_39.45%_62.79%_51.32%] mask-position-[-216.222px_-96.36px,_-187.468px_-295.047px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.9 14.6206">
                          <g id="Group">
                            <path d={svgPaths.p393898f0} fill="var(--fill-0, #1C1B17)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute contents inset-[58.32%_23.39%_19.57%_20.41%]" data-name="Group">
                      <div className="absolute inset-[58.32%_23.39%_19.57%_20.41%] mask-position-[-86.007px_-173.961px,_-57.254px_-372.648px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236.786 65.9411">
                          <g id="Group">
                            <path d={svgPaths.p1e573680} fill="var(--fill-0, #5683D2)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-[67.27%_36.56%_27.58%_33.66%] mask-position-[-141.826px_-200.661px,_-113.072px_-399.349px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.472 15.36">
                          <g id="Group">
                            <path d={svgPaths.p193c1d00} fill="var(--fill-0, white)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute contents inset-[10.81%_-87.11%_11.42%_119.78%]" data-name="Group">
                      <GroupBackgroundImage1 additionalClassNames="inset-[64%_-87.02%_11.42%_119.78%] mask-position-[-504.699px_-190.89px,_-475.945px_-389.577px]" />
                      <GroupBackgroundImage1 additionalClassNames="inset-[10.81%_-87.11%_64.61%_119.87%] mask-position-[-505.055px_-32.232px,_-476.301px_-230.919px]" />
                    </div>
                    <div className="absolute contents inset-[20.6%_-70.62%_73.29%_153.69%]" data-name="Group">
                      <div className="absolute contents inset-[20.6%_-56.88%_74.61%_153.69%]" data-name="Group">
                        <div className="absolute contents inset-[20.6%_-56.88%_74.61%_153.69%]" data-name="Group">
                          <div className="absolute inset-[20.6%_-56.88%_74.61%_153.69%] mask-position-[-647.561px_-61.451px,_-618.807px_-260.138px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4497 14.2845">
                              <g id="Group">
                                <path d={svgPaths.p27154a80} fill="var(--fill-0, #1C1B17)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute contents inset-[21.83%_-59.31%_74.53%_157.31%]" data-name="Group">
                        <div className="absolute contents inset-[21.83%_-59.31%_74.53%_157.31%]" data-name="Group">
                          <GroupBackgroundImage2 additionalClassNames="inset-[21.83%_-59.31%_74.53%_157.31%] mask-position-[-662.788px_-65.117px,_-634.034px_-263.805px]" />
                        </div>
                      </div>
                      <div className="absolute contents inset-[21.84%_-61.68%_74.61%_159.75%]" data-name="Group">
                        <div className="absolute contents inset-[21.84%_-61.68%_74.61%_159.75%]" data-name="Group">
                          <div className="absolute inset-[21.84%_-61.68%_74.61%_159.75%] mask-position-[-673.103px_-65.156px,_-644.349px_-263.843px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.12365 10.5797">
                              <g id="Group">
                                <path d={svgPaths.p1d2bed00} fill="var(--fill-0, #1C1B17)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute contents inset-[21.83%_-64.05%_74.53%_162.05%]" data-name="Group">
                        <div className="absolute contents inset-[21.83%_-64.05%_74.53%_162.05%]" data-name="Group">
                          <GroupBackgroundImage2 additionalClassNames="inset-[21.83%_-64.05%_74.53%_162.05%] mask-position-[-682.768px_-65.117px,_-654.014px_-263.805px]" />
                        </div>
                      </div>
                      <div className="absolute contents inset-[21.84%_-66.6%_73.29%_164.35%]" data-name="Group">
                        <div className="absolute contents inset-[21.84%_-66.6%_73.29%_164.35%]" data-name="Group">
                          <div className="absolute inset-[21.84%_-66.6%_73.29%_164.35%] mask-position-[-692.488px_-65.156px,_-663.734px_-263.843px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.46224 14.5213">
                              <g id="Group">
                                <path d={svgPaths.p3ed99b00} fill="var(--fill-0, #1C1B17)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute contents inset-[21.84%_-69.14%_74.52%_166.95%]" data-name="Group">
                        <div className="absolute contents inset-[21.84%_-69.14%_74.52%_166.95%]" data-name="Group">
                          <div className="absolute inset-[21.84%_-69.14%_74.52%_166.95%] mask-position-[-703.426px_-65.133px,_-674.672px_-263.82px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.2356 10.8623">
                              <g id="Group">
                                <path d={svgPaths.p1c871dc0} fill="var(--fill-0, #1C1B17)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute contents inset-[21.9%_-70.62%_74.61%_169.51%]" data-name="Group">
                        <div className="absolute contents inset-[21.9%_-70.62%_74.61%_169.51%]" data-name="Group">
                          <div className="absolute inset-[21.9%_-70.62%_74.61%_169.51%] mask-position-[-714.223px_-65.331px,_-685.469px_-264.019px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.65321 10.404">
                              <g id="Group">
                                <path d={svgPaths.p1dc04680} fill="var(--fill-0, #1C1B17)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[65.72%_-34.79%_13.14%_120.91%]" data-name="Group">
                      <RectangleBackgroundImage additionalClassNames="inset-[65.72%_-34.79%_13.14%_120.91%] mask-position-[-509.451px_-196.015px,_-480.698px_-394.703px]">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
                      </RectangleBackgroundImage>
                    </div>
                    <GroupBackgroundImage3 additionalClassNames="inset-[65.53%_-34.91%_12.95%_120.79%] mask-position-[-508.949px_-195.473px,_-480.195px_-394.16px]" />
                    <div className="absolute contents inset-[65.65%_-42.23%_13.07%_128.27%]" data-name="Group">
                      <RectangleBackgroundImage additionalClassNames="inset-[65.65%_-42.23%_13.07%_128.27%] mask-position-[-540.437px_-195.824px,_-511.684px_-394.512px]">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
                      </RectangleBackgroundImage>
                    </div>
                    <GroupBackgroundImage3 additionalClassNames="inset-[65.53%_-42.31%_12.95%_128.19%] mask-position-[-540.112px_-195.473px,_-511.358px_-394.16px]" />
                    <div className="absolute contents inset-[12.78%_-34.58%_66.73%_121.13%]" data-name="Group">
                      <RectangleBackgroundImage additionalClassNames="inset-[12.78%_-34.58%_66.73%_121.13%] mask-position-[-510.365px_-38.114px,_-481.611px_-236.802px]">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
                      </RectangleBackgroundImage>
                    </div>
                    <div className="absolute contents inset-[65.53%_-102.39%_0.04%_135.59%]" data-name="Group">
                      <BackgroundImage additionalClassNames="inset-[65.53%_-49.71%_12.95%_135.59%] mask-position-[-571.275px_-195.473px,_-542.521px_-394.16px]">
                        <path d={svgPaths.pca5a0f0} fill="var(--fill-0, #E4EBF6)" id="Vector" />
                        <path d={svgPaths.pca5a0f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2.83303" />
                      </BackgroundImage>
                      <BackgroundImage3 additionalClassNames="inset-[99.96%_-102.39%_0.04%_202.39%]">
                        <GroupBackgroundImage4 additionalClassNames="mask-position-[-852.749px_-298.155px,_-823.995px_-496.843px]" />
                      </BackgroundImage3>
                      <BackgroundImage3 additionalClassNames="inset-[99.96%_-98.59%_0.04%_198.59%]">
                        <GroupBackgroundImage4 additionalClassNames="mask-position-[-836.749px_-298.155px,_-807.995px_-496.843px]" />
                      </BackgroundImage3>
                      <BackgroundImage3 additionalClassNames="inset-[99.96%_-94.8%_0.04%_194.8%]">
                        <GroupBackgroundImage5 additionalClassNames="mask-position-[-820.749px_-298.155px,_-791.995px_-496.843px]" />
                      </BackgroundImage3>
                      <GroupBackgroundImage6 additionalClassNames="inset-[75.81%_-41.65%_23.71%_141.34%] mask-position-[-595.53px_-226.133px,_-566.776px_-424.821px]" />
                    </div>
                    <div className="absolute contents inset-[12.78%_-102.39%_53.27%_135.92%]" data-name="Group">
                      <GroupBackgroundImage additionalClassNames="inset-[12.78%_-49.37%_66.73%_135.92%] mask-position-[-572.691px_-38.114px,_-543.937px_-236.802px]" />
                      <BackgroundImage3 additionalClassNames="inset-[46.73%_-102.39%_53.27%_202.39%]">
                        <GroupBackgroundImage4 additionalClassNames="mask-position-[-852.749px_-139.38px,_-823.995px_-338.067px]" />
                      </BackgroundImage3>
                      <BackgroundImage3 additionalClassNames="inset-[46.73%_-98.59%_53.27%_198.59%]">
                        <GroupBackgroundImage5 additionalClassNames="mask-position-[-836.749px_-139.38px,_-807.995px_-338.067px]" />
                      </BackgroundImage3>
                      <BackgroundImage3 additionalClassNames="inset-[46.73%_-94.8%_53.27%_194.8%]">
                        <GroupBackgroundImage4 additionalClassNames="mask-position-[-820.749px_-139.38px,_-791.995px_-338.067px]" />
                      </BackgroundImage3>
                      <GroupBackgroundImage6 additionalClassNames="inset-[22.54%_-41.65%_76.98%_141.34%] mask-position-[-595.53px_-67.247px,_-566.776px_-265.934px]" />
                    </div>
                    <div className="absolute contents inset-[74.65%_24.43%_10.3%_66.73%]" data-name="Group">
                      <div className="absolute inset-[74.65%_24.43%_10.3%_66.73%] mask-position-[-281.139px_-222.68px,_-252.385px_-421.367px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.2669 44.8907">
                          <g id="Group">
                            <path d={svgPaths.p3a86dc80} fill="var(--fill-0, #FDFDFC)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-[76.05%_25.35%_11.7%_67.64%] mask-position-[-285.011px_-226.856px,_-256.257px_-425.543px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5222 36.5387">
                          <g id="Group">
                            <path d={svgPaths.p320b3870} fill="var(--fill-0, #1C1B17)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute contents inset-[73.71%_-68.06%_21.24%_153.66%]" data-name="Group">
                      <div className="absolute inset-[73.71%_-68.06%_21.24%_153.66%] mask-position-[-647.441px_-219.86px,_-618.688px_-418.547px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.6758 15.0699">
                          <g id="Group">
                            <path d={svgPaths.p9eaa100} fill="var(--fill-0, #1C1B17)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute contents inset-[12.01%_-191.91%_11.67%_224.68%]" data-name="Group">
                      <GroupBackgroundImage7 additionalClassNames="inset-[12.01%_-191.91%_11.67%_224.68%] mask-position-[-946.648px_-35.823px,_-917.894px_-234.51px]">
                        <path d={svgPaths.pf6aa2b1} fill="var(--fill-0, white)" id="Vector" />
                      </GroupBackgroundImage7>
                    </div>
                    <div className="absolute contents inset-[57.59%_-186.54%_19.87%_230.06%]" data-name="Group">
                      <div className="absolute inset-[57.59%_-186.54%_19.87%_230.06%] mask-position-[-969.312px_-171.793px,_-940.558px_-370.48px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237.973 67.2212">
                          <g id="Group">
                            <path d={svgPaths.pee3aff0} fill="var(--fill-0, #E4EBF6)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute contents inset-[-86.84%_-199.98%_-46.72%_6.82%]" data-name="Clip path group">
                      <div className="absolute contents inset-[52.32%_-133.79%_16.22%_230.09%]" data-name="Group">
                        <div className="absolute contents inset-[52.32%_-133.79%_16.22%_230.09%]" data-name="Clip path group">
                          <div className="absolute contents inset-[67.35%_-137.61%_29.29%_236.05%]" data-name="Group">
                            <div className="absolute contents inset-[67.35%_-137.61%_29.29%_236.05%]" data-name="Group">
                              <div className="absolute contents inset-[67.35%_-137.61%_29.29%_236.05%]" data-name="Group">
                                <div className="absolute inset-[67.35%_-137.61%_29.29%_236.05%] mask-position-[-994.585px_-200.88px,_-965.831px_-399.567px,_-965.831px_-459.914px,_-25.131px_-44.817px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}'), url('${imgGroup1}'), url('${imgGroup2}')` }}>
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.55416 10.0404">
                                    <g id="Group">
                                      <path d={svgPaths.p172efb90} fill="var(--fill-0, black)" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[-202.24%_28.21%_68.68%_-221.37%]" data-name="Mask group">
                      <div className="absolute contents inset-[66.79%_-135.83%_28.76%_234.22%]" data-name="Group">
                        <div className="absolute inset-[66.79%_-135.83%_28.76%_234.22%] mask-position-[-986.856px_-199.215px,_-958.102px_-397.902px,_-1919.589px_-802.445px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}'), url('${imgGroup3}')` }}>
                          <BackgroundImage4>
                            <path d={svgPaths.p2dde4780} fill="var(--fill-0, #5683D2)" id="Vector" />
                          </BackgroundImage4>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[54.14%_-133.92%_14.4%_230.06%]" data-name="Clip path group">
                      <div className="absolute contents inset-[66.79%_-135.83%_28.76%_234.22%]" data-name="Group">
                        <div className="absolute inset-[66.79%_-135.83%_28.76%_234.22%] mask-position-[-986.856px_-199.214px,_-958.102px_-397.902px,_-17.543px_-37.734px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}'), url('${imgGroup4}')` }}>
                          <BackgroundImage4>
                            <path d={svgPaths.p2dde4780} fill="var(--fill-0, #FDFDFC)" id="Vector" />
                          </BackgroundImage4>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[66.79%_-182.29%_28.76%_267.23%]" data-name="Group">
                      <div className="absolute inset-[66.79%_-182.29%_28.76%_267.23%] mask-position-[-1125.939px_-199.215px,_-1097.185px_-397.902px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.4806 13.2823">
                          <g id="Group">
                            <path d={svgPaths.p18758bf0} fill="var(--fill-0, #5683D2)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute contents inset-[23.26%_-173.08%_72.53%_247.23%]" data-name="Group">
                      <div className="absolute inset-[23.26%_-173.08%_72.53%_247.23%] mask-position-[-1041.66px_-69.371px,_-1012.906px_-268.058px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.943 12.5704">
                          <g id="Group">
                            <path d={svgPaths.p3228fb00} fill="var(--fill-0, #757267)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute contents inset-[19.95%_-143.33%_59.56%_229.89%]" data-name="Group">
                      <GroupBackgroundImage additionalClassNames="inset-[19.95%_-143.33%_59.56%_229.89%] mask-position-[-968.604px_-59.503px,_-939.85px_-258.19px]" />
                      <GroupBackgroundImage8 additionalClassNames="inset-[27.5%_-139.13%_67.12%_234.09%] mask-position-[-986.314px_-82.036px,_-957.56px_-280.723px]">
                        <path d={svgPaths.p29949a80} fill="var(--fill-0, #00A1E0)" id="Vector" />
                      </GroupBackgroundImage8>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}