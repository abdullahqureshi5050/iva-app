export enum SIZE {
  xs0 = 0,
  xs1 = 1,
  xs2 = 2,
  xs3 = 3,
  xs4 = 4,
  xs5 = 5,
  xs6 = 8,
  xs7 = 10,
  xs8 = 12,
  xs9 = 14,

  s0 = 15,
  s1 = 16,
  s2 = 17,
  s3 = 18,
  s4 = 20,
  s5 = 22,
  s6 = 24,
  s7 = 25,
  s8 = 28,
  s9 = 30,

  m0 = 35,
  m1 = 40,
  m2 = 45,
  m3 = 50,
  m4 = 60,
  m5 = 70,
  m6 = 75,
  m7 = 80,
  m8 = 90,
  m9 = 100,

  l0 = 120,
  l1 = 130,
  l2 = 140,
  l3 = 150,
  l4 = 160,
  l5 = 180,
  l6 = 200,
  l7 = 220,
  l8 = 240,
  l9 = 250,

  xl0 = 260,
  xl1 = 280,
  xl2 = 300,
  xl3 = 320,
  xl4 = 350,
  xl5 = 360,
  xl6 = 400,
  xl7 = 450,
  xl8 = 480,
  xl9 = 500,
}

export const getSIZE = (props: SIZE) => {
  //const size = props;
  return SIZE[props]
};