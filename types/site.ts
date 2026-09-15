export interface BrandLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BrandInfo {
  name: string;
  homeUrl: string;
  logo: BrandLogo;
}

export interface ContactInfo {
  helpText: string;
  phoneNumber: string;
  phoneRaw: string;
}

export interface SiteConfig {
  brand: BrandInfo;
  contact: ContactInfo;
}
