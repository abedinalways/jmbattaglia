import { ComponentPropsWithoutRef } from 'react';

export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  clean?: boolean;
}

export default function Container({
  children,
  className = '',
  clean = false,
  ...props
}: ContainerProps) {
  const baseClasses = clean
    ? ''
    : 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  return (
    <div className={`${baseClasses} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
