import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  borderColor: string;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  borderColor,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;
  const isHome = asPath === "/";

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest} legacyBehavior>
      {cloneElement(children, {
        borderBottom: isActive ? `1px solid ${borderColor}` : "none",
      })}
    </Link>
  );
}
