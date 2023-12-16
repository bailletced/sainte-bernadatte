declare type TFC<Props extends TAnyProps = TAnyProps> = React.FC<Props>;
declare type TFCC<Props extends TAnyProps = TAnyProps> = React.FC<
  Props & { children?: React.Node | ReactNode[] }
>;

declare type TBreakpoint =
  (typeof import("@/src/frontend/styles/constants").breakpoints)[number];
declare type TValueOrArrayOfValues<T> = T | T[];

declare type TClasses<
  T,
  Breakpoint extends TBreakpoint = TBreakpoint,
> = TValueOrArrayOfValues<`${Breakpoint extends undefined
  ? ""
  : `${Breakpoint}:`}${T}`>;
