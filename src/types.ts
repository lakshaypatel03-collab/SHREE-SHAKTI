export interface ProductSpecification {
  capacityLtr: number;
  widthInch?: number;
  heightInch?: number;
  lengthInch?: number; // For Loft Tanks
  ropeDiameterMm?: number;
  ropeWeightKg?: number;
  shadePercentage?: number;
}

export interface ProductDetails {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imagePath: string;
  layers?: number;
  availableColors: string[];
  features: string[];
  layerStructure?: string[];
  specifications: ProductSpecification[];
  applications?: string[];
}

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  city: string;
  productType: string;
  capacity: string;
  layers: string;
  quantity: number;
  notes: string;
}
