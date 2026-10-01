import Link from "next/link";
import type { ReactNode } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SiteLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href === "/") {
    return (
      <a className={className} href={basePath ? `${basePath}/` : "/"}>
        {children}
      </a>
    );
  }
  if (href.startsWith("/#")) {
    return (
      <a className={className} href={`${basePath}/#${href.slice(2)}`}>
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
