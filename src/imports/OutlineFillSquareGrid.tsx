import clsx from "clsx";
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("mr-[-1px] relative shrink-0 size-[74px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start mb-[-1px] pr-px relative shrink-0">
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      {/* Additional grid items to ensure it stretches full width on large screens */}
      {Array.from({ length: 20 }).map((_, i) => <Helper key={`extra-${i}`} />)}
    </div>
  );
}

export default function OutlineFillSquareGrid() {
  return (
    <div className="bg-white relative w-full h-full min-h-[1000px] overflow-hidden" data-name="Outline + fill  Square grid">
      <div className="absolute content-stretch flex flex-col items-start left-[-10px] pb-px top-0 min-w-full" data-name="Grid">
        <Row />
        <Row />
        <div className="content-stretch flex items-start mb-[-1px] pr-px relative shrink-0 min-w-full" data-name="Row">
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f2f2f2]" />
          <Helper />
          <Helper additionalClassNames="bg-[#f2f2f2]" />
          <Helper />
          <Helper additionalClassNames="bg-[#f2f2f2]" />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          {Array.from({ length: 20 }).map((_, i) => <Helper key={`extra-${i}`} />)}
        </div>
        <div className="content-stretch flex items-start mb-[-1px] pr-px relative shrink-0 min-w-full" data-name="Row">
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          {Array.from({ length: 20 }).map((_, i) => <Helper key={`extra-${i}`} />)}
        </div>
        <Row />
        <Row />
        <div className="content-stretch flex items-start mb-[-1px] pr-px relative shrink-0 min-w-full" data-name="Row">
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          <Helper />
          {Array.from({ length: 20 }).map((_, i) => <Helper key={`extra-${i}`} />)}
        </div>
        <Row />
        <Row />
        <div className="content-stretch flex items-start mb-[-1px] pr-px relative shrink-0 min-w-full" data-name="Row">
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          <Helper />
          {Array.from({ length: 20 }).map((_, i) => <Helper key={`extra-${i}`} />)}
        </div>
        <div className="content-stretch flex items-start mb-[-1px] pr-px relative shrink-0 min-w-full" data-name="Row">
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f2f2f2]" />
          <Helper />
          <Helper additionalClassNames="bg-[#f2f2f2]" />
          <Helper />
          <Helper additionalClassNames="bg-[#f2f2f2]" />
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          <Helper />
          {Array.from({ length: 20 }).map((_, i) => <Helper key={`extra-${i}`} />)}
        </div>
        <div className="content-stretch flex items-start mb-[-1px] pr-px relative shrink-0 min-w-full" data-name="Row">
          <Helper />
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper />
          <Helper additionalClassNames="bg-[#f7f7f7]" />
          <Helper />
          <Helper />
          <Helper />
          {Array.from({ length: 20 }).map((_, i) => <Helper key={`extra-${i}`} />)}
        </div>
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}