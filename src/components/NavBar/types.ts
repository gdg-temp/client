export interface NavbarProps {
  title?: string;
  leadingButton?: 'back';
  trailingButton?: 'home' | 'save';
  onClick?: () => void;
}
