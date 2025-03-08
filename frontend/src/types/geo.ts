export interface District {
  id: string;
  name: string;
}

export interface Region {
  id: string;
  name: string;
  districts: District[];
}

