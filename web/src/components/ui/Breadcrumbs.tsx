import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  align?: "left" | "center";
  className?: string;
}

/**
 * Accessible visible breadcrumb navigation matching each page's BreadcrumbList JSON-LD.
 */
export default function Breadcrumbs({
  items,
  align = "left",
  className = "",
}: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`relative z-10 ${align === "center" ? "flex justify-center" : ""} ${className}`}
    >
      <ol
        className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs sm:text-sm text-zinc-400 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.href}-${idx}`} className="inline-flex items-center gap-1.5 min-w-0">
              {idx > 0 && (
                <ChevronRight
                  className="w-3.5 h-3.5 text-zinc-500 shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-semibold text-zinc-200 truncate max-w-[260px] sm:max-w-none"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-amber-400 transition-colors font-medium whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

