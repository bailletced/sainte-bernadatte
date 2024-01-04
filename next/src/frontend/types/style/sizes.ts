type TSizePrefixes = "h" | "w";
type TSizeMinMaxPrefixes = "min-h" | "min-w" | "max-h" | "max-w";
type TSizeValues =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 10
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 56
  | 64
  | 72
  | 80
  | 96
  | "auto"
  | "1/2"
  | "1/3"
  | "2/3 "
  | "1/4"
  | "3/4"
  | "1/6"
  | "full"
  | "screen"
  | "min"
  | "max"
  | "fit";

type TSizeClasses<Prefix extends TSizePrefixes, Amount extends TSizeValues> =
  | `${Prefix}-${Amount}`
  | `${Prefix}-[${string}]`;

type TSizeMinMaxClasses<
  Prefix extends TSizeMinMaxPrefixes,
  Values extends TSizeValues,
> = `${Prefix}-${Values}` | `${Prefix}-[${string}]`;
export type TSizeProps = {
  size?: TClasses<
    | TSizeClasses<TSizePrefixes, TSizeValues>
    | TSizeMinMaxClasses<TSizeMinMaxPrefixes, TSizeValues>
  >;
};
