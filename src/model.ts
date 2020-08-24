import { Child } from "./model2";

interface Model {
  t0: boolean;
  t1?: boolean;
  t2: boolean[];
  t3?: boolean[];

  t4: number;
  t5?: number;
  t6: number[];
  t7?: number[];

  t8: string;
  t9?: string;
  t10: string[];
  t11?: string[];

  t12: any;
  t13?: any;
  t14: any[];
  t15?: any[];

  t16: [string, number];
  t17?: [string, number];
  t18: [string, number][];
  t19?: [string, number][];

  t20: [number, string];
  t21?: [number, string];
  t22: [number, string][];
  t23?: [number, string][];

  t24: Promise<Child>;
}
