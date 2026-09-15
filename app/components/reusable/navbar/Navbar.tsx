import Container from '@/app/components/reusable/Container';
import NavbarLogo from './NavbarLogo';
import NavbarContact from './NavbarContact';
import { BrandInfo, ContactInfo } from '@/types/site';

export interface NavbarProps {
  brand?: BrandInfo;
  contact?: ContactInfo;
  className?: string;
}

export default function Navbar({
  brand,
  contact,
  className = '',
}: NavbarProps) {
  return (
    <header
      className={`w-full bg-background border-b border-border ${className}`.trim()}
    >
      <Container>
        <nav
          className="flex items-center justify-between py-4 sm:py-5"
          aria-label="Main Navigation"
        >
          <NavbarLogo brand={brand} />
          <NavbarContact contact={contact} />
        </nav>
      </Container>
    </header>
  );
}

export { NavbarLogo, NavbarContact };
