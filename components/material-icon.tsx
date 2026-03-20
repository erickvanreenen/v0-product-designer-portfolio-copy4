interface IconProps {
  name: string;
  className?: string;
  size?: number;
  fill?: boolean;
  weight?: number;
}

/**
 * Material Symbols Outlined icon component.
 * Uses Google's Material Symbols variable font loaded via layout.tsx.
 *
 * Icon names: https://fonts.google.com/icons
 * Usage: <Icon name="badge" size={14} />
 */
export function Icon({ name, className = "", size = 16, fill = false, weight = 400 }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
        fontSize: size,
        lineHeight: 1,
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

/**
 * Resolves a standard meta label to its Material Symbol icon name.
 * Used across case study meta grids for consistent iconography.
 */
export function metaIcon(label: string): string {
  const map: Record<string, string> = {
    Role: "badge",
    Team: "group",
    Timeline: "schedule",
    Tools: "construction",
    Business: "business",
    Company: "business",
    Year: "calendar_today",
    Methods: "science",
  };
  return map[label] ?? "info";
}
