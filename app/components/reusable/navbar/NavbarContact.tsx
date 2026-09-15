import { ContactInfo } from '@/types/site';
import { siteConfig } from '@/config/site.config';
import PhoneIcon from '@/app/components/reusable/icons/PhoneIcon';

export interface NavbarContactProps {
  contact?: ContactInfo;
  className?: string;
}

export default function NavbarContact({
  contact = siteConfig.contact,
  className = '',
}: NavbarContactProps) {
  return (
    <a
      href={`tel:${contact.phoneRaw}`}
      className={`group inline-flex items-center gap-2.5 text-sm sm:text-base font-sans outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-colors ${className}`.trim()}
      aria-label={`${contact.helpText} Call ${contact.phoneNumber}`}
    >
      <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground transition-transform group-hover:scale-105" />
      <span className="text-foreground font-medium whitespace-nowrap">
        {contact.helpText}
      </span>
      <span className="text-primary group-hover:text-hover-primary font-semibold whitespace-nowrap">
        {contact.phoneNumber}
      </span>
    </a>
  );
}
