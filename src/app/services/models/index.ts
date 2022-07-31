export interface CarBrand {
  id: number;
  logo: string;
  name: string;
  status: boolean; // true: active, false: inactive
  description?: string;
  numberOfModels?: number;
  updateAt: Date;
}
