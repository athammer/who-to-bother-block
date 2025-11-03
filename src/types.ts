export type Company =
  | "Block"
  | "Square"
  | "Cash App"
  | "Tidal"
  | "Afterpay"
  | "Bitkey"
  | "Proto";

export interface Expert {
  name: string;
  twitterHandle: string;
  avatarUrl: string;
  companies: Company[];
}

export interface SubjectArea {
  name: string;
  experts: Expert[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subjectAreas: SubjectArea[];
}

export interface Resource {
  title: string;
  url: string;
  icon: string;
  description: string;
}
