import Image from 'next/image';
import Link from 'next/link';
import { BrandInfo } from '@/types/site';
import { siteConfig } from '@/config/site.config';

export interface NavbarLogoProps {
  brand?: BrandInfo;
  className?: string;
}

export default function NavbarLogo({
  brand = siteConfig.brand,
  className = '',
}: NavbarLogoProps) {
  return (
    <Link
      href={brand.homeUrl}
      className={`inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-opacity hover:opacity-95 ${className}`.trim()}
      aria-label={brand.name}
    >
      <Image
        src={brand.logo.src}
        alt={brand.logo.alt}
        width={brand.logo.width}
        height={brand.logo.height}
        priority
        className="h-10 sm:h-12 w-auto object-contain"
      />
    </Link>
  );
}
