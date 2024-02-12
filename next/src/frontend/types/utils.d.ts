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

  declare type TOClocherPublication = {
    id: any;
    created_at: string;
    created_by: string;
    created_source: string;
    updated_at: string;
    updated_by: string;
    disabled: boolean;
    disabled_at: any;
    organization: string;
    is_organization: boolean;
    is_anonymous: boolean;
    kind: string;
    name: string;
    description: string | null;
    content: string;
    selection: any;
    medias: string[];
    hypertext: string;
    warning: boolean | null;
    warning_content: string | null;
    datetime_start: string | null;
    datetime_finish: string | null;
    location: string | null;
    address: string | null;
    recurrence_id: any;
    link?: string;
  };
