import React from 'react';

interface RedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a' | React.ElementType;
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
}

export function RedButton({ children, className = '', as = 'button', href, target, rel, ...props }: RedButtonProps) {
  const baseClasses = `content-stretch group flex gap-[8px] items-center justify-center px-[36px] py-[20px] text-[18px] relative rounded-[10px] w-fit ${className}`;

  const innerContent = (
    <>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
        {/* Background base color - Red */}
        <div className="absolute bg-[#7c1318] group-hover:bg-[#8b151b] transition-colors inset-0 rounded-[10px]" />
        {/* Overlay gradient for shine effect */}
        <div className="absolute inset-0 mix-blend-overlay rounded-[10px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 180 64\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.44999998807907104\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-1.1095e-15 10.453 -29.4 1.2705e-7 90 64)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(191,191,191,0.75)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(128,128,128,0.5)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(64,64,64,0.25)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      </div>

      {/* Outer Border and Shadow */}
      <div aria-hidden="true" className="absolute border border-[#5a0e11] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_19px_0px_rgba(124,19,24,0.28)]" />

      {/* Content */}
      <div className="flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-center justify-center leading-[normal] relative shrink-0 text-center text-white whitespace-nowrap z-10 gap-2">
        {children}
      </div>

      {/* Inner Border Highlight */}
      <div className="absolute inset-px rounded-[9px]">
        <div aria-hidden="true" className="absolute border border-[#a61f26] border-solid inset-0 pointer-events-none rounded-[9px]" />
      </div>
    </>
  );

  if (as === 'a' && href) {
    return (
      <a href={href} className={baseClasses} target={target} rel={rel} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {innerContent}
      </a>
    );
  }

  if (as !== 'button' && as !== 'a') {
    const Component = as;
    return (
      <Component className={baseClasses} to={props.to} {...props}>
        {innerContent}
      </Component>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {innerContent}
    </button>
  );
}
