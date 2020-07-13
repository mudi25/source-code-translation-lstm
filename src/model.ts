export interface SampelModel {
  z1: Date; //0
  z2?: Date; //1
  z3: Date[]; //2
  z4?: Date[]; //3

  a1: boolean; //0
  a2?: boolean; //1
  a3: boolean[]; //2
  a4?: boolean[]; //3

  b1: number; //4
  b2?: number; //5
  b3: number[]; //6
  b4?: number[]; //7

  d1: string; //8
  d2?: string; //9
  d3: string[]; //10
  d4?: string[]; //11

  e1: any; //12
  e2?: any; //13
  e3: any[]; //14
  e4?: any[]; //15

  x1: Map<number, Date>; //32
  x2: Map<number, boolean>; //32
  x3: Map<number, string>; //32
  x4: Map<number, number>; //32
  x5: Map<number, any>; //32
}
