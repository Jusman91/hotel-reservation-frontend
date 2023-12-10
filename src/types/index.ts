import { IconType } from 'react-icons';

export interface IProps {
  onClick: () => void;
}

export interface IToggleButton extends IProps {
  isOpen: boolean;
}

export interface IListNav {
  label: string;
  path: string;
  icon: IconType
}

export interface IMobileLlist {
  mobile?: boolean;
}

export interface IStateAction {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}