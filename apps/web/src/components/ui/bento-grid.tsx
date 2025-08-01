import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl h-full grid-cols-1 gap-4 grid-rows-[1fr_1fr]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  content1,
  content2,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  content1?: string | React.ReactNode;
  content2?: string | React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group relative w-full sm:h-[350px] flex flex-col gap-5 lg:flex-row focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 focus:rounded-xl",
        className
      )}
    >
      <div className="group/panel rounded-lg md:rounded-xl border p-px bg-gradient-to-b from-white/30 to-white transition-all hover:shadow-md flex items-center justify-center relative w-full h-full">
        <div className="z-10 rounded-[7px] md:rounded-[11px] relative overflow-hidden flex-1 flex flex-row sm:flex-col gap-4 items-start sm:items-center lg:items-start justify-between bg-surface-75 w-full h-full text-foreground-lighter [&_strong]:!font-normal [&_strong]:!text-foreground p-4 sm:py-6">
          <div className="relative z-10 h-full overflow-hidden w-full mx-auto gap-2 sm:gap-4 flex flex-col items-start sm:items-center text-left sm:text-center lg:mx-0 lg:pl-2 lg:items-start lg:text-left">
            <div className="flex items-center gap-2 text-foreground flex-none">
              {icon}
              <h2 className="text-title-2">{title}</h2>
            </div>
            <div className="flex-1 flex flex-col h-full w-full text-gray-500 justify-between text-body font-normal gap-2 text-body [&_strong]:!text-primary">
              {content1}
              {content2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
