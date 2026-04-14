export default function Logo({ size = 'md', variant = 'light' }: { size?: 'sm' | 'md' | 'lg'; variant?: 'light' | 'dark' }) {
  const dims = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';
  const textSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';
  const subSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[11px]';
  const titleColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  const subColor = variant === 'light' ? 'text-emerald-300' : 'text-emerald-700';

  return (
    <div className="flex items-center gap-2.5">
      <div className={`${dims} relative shrink-0`}>
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Green triangle/mountain shape */}
          <path d="M30 4L56 52H4L30 4Z" fill="#047857" />
          {/* White "A" letter cut-out */}
          <path d="M30 18L42 46H18L30 18Z" fill="white" />
          {/* Crossbar of the A */}
          <rect x="22" y="36" width="16" height="4" fill="#047857" />
          {/* Small green accent arc */}
          <path d="M44 48C44 48 38 42 30 42C22 42 16 48 16 48" stroke="#10B981" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div>
        <div className={`${titleColor} font-bold ${textSize} leading-tight`}>AMBARÈS</div>
        <div className={`${subColor} font-semibold ${subSize} leading-tight`}>& LAGRAVE</div>
      </div>
    </div>
  );
}
