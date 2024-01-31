export interface QuickActionMenuItem<T> {
  label: string;
  onClick: (target: T) => void;
}

export interface QuickActionMenuProps<T> {
  items: QuickActionMenuItem<T>[];
  target: T;
}
