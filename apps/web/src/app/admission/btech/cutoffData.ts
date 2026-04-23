export interface CutoffData {
  course: string;
  programCode: string;
  general: {
    op: number;
    cl: number;
  };
  genEws: {
    op: number;
    cl: number;
  };
  obcNcl: {
    op: number;
    cl: number;
  };
  sc: {
    op: number;
    cl: number;
  };
  st: {
    op: number;
    cl: number;
  };
}

export const cutoffData: CutoffData[] = [
  {
    course: "Computer Science and Engineering",
    programCode: "4110",
    general: { op: 17805, cl: 68592 },
    genEws: { op: 57245, cl: 92316 },
    obcNcl: { op: 57935, cl: 100395 },
    sc: { op: 102497, cl: 232592 },
    st: { op: 186943, cl: 416174 },
  },
  {
    course: "Electronics and Communication Engineering",
    programCode: "4114",
    general: { op: 20015, cl: 87533 },
    genEws: { op: 85352, cl: 108829 },
    obcNcl: { op: 76646, cl: 117458 },
    sc: { op: 144931, cl: 260802 },
    st: { op: 283712, cl: 397960 },
  },
  {
    course: "Data Science & Artificial Intelligence",
    programCode: "4181",
    general: { op: 29144, cl: 73746 },
    genEws: { op: 63331, cl: 90334 },
    obcNcl: { op: 63425, cl: 103336 },
    sc: { op: 179078, cl: 240380 },
    st: { op: 231455, cl: 387051 },
  },
];

export const neutralCutoffs: CutoffData[] = [
  {
    course: "CSE",
    programCode: "4110",
    general: { op: 17805, cl: 68592 },
    genEws: { op: 57245, cl: 92316 },
    obcNcl: { op: 57935, cl: 100395 },
    sc: { op: 102497, cl: 232592 },
    st: { op: 186943, cl: 416174 },
  },
  {
    course: "DSAI",
    programCode: "4181",
    general: { op: 29144, cl: 73746 },
    genEws: { op: 63331, cl: 90334 },
    obcNcl: { op: 63425, cl: 103336 },
    sc: { op: 179078, cl: 240380 },
    st: { op: 231455, cl: 387051 },
  },
  {
    course: "ECE",
    programCode: "4114",
    general: { op: 20015, cl: 87533 },
    genEws: { op: 85352, cl: 108829 },
    obcNcl: { op: 76646, cl: 117458 },
    sc: { op: 144931, cl: 260802 },
    st: { op: 283712, cl: 397960 },
  },
];

export const femaleCutoffs: CutoffData[] = [
  {
    course: "CSE",
    programCode: "4110",
    general: { op: 17805, cl: 68592 },
    genEws: { op: 73914, cl: 92316 },
    obcNcl: { op: 71668, cl: 100395 },
    sc: { op: 176219, cl: 218792 },
    st: { op: 199797, cl: 352998 },
  },
  {
    course: "DSAI",
    programCode: "4181",
    general: { op: 41666, cl: 73746 },
    genEws: { op: 87373, cl: 90334 },
    obcNcl: { op: 88006, cl: 103336 },
    sc: { op: 197070, cl: 240380 },
    st: { op: 261040, cl: 278182 },
  },
  {
    course: "ECE",
    programCode: "4114",
    general: { op: 74598, cl: 87533 },
    genEws: { op: 102522, cl: 108829 },
    obcNcl: { op: 88772, cl: 117458 },
    sc: { op: 239916, cl: 260802 },
    st: { op: 322207, cl: 322207 },
  },
];
