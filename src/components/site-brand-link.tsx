import Link from "next/link";
import { cn } from "@/lib/cn";

type SiteBrandLinkProps = {
  subtitle: string;
  href?: string;
  className?: string;
  /** 落地页大标题；工作区略小 */
  size?: "lg" | "md";
};

/**
 * 落地页与工作区顶栏共用的 Logo + 标题（副标题可不同）。
 */
export function SiteBrandLink({
  subtitle,
  href = "/",
  size = "md",
  className,
}: SiteBrandLinkProps) {
  const titleClass =
    size === "lg"
      ? "text-xl font-black tracking-tighter"
      : "text-sm font-semibold tracking-tight";

  return (
    <Link
      href={href}
      className={cn("group flex min-w-0 items-center gap-2.5 text-left transition", className)}
    >
      <span
        className="loom-primary-gradient flex size-9 shrink-0 items-center justify-center rounded-xl shadow-md ring-1 ring-white/30 [box-shadow:0_4px_14px_rgba(53,37,205,0.28)]"
        aria-hidden
      >
        <span className="grid grid-cols-2 gap-0.5">
          <span className="size-1.5 rounded-[1px] bg-white/95" />
          <span className="size-1.5 rounded-[1px] bg-white/70" />
          <span className="size-1.5 rounded-[1px] bg-white/70" />
          <span className="size-1.5 rounded-[1px] bg-white/95" />
        </span>
      </span>
      <span className="min-w-0">
        <span
          className={`block font-[var(--font-manrope)] text-loom-on-surface group-hover:text-loom-primary ${titleClass}`}
        >
          拼豆图纸生成器
        </span>
        <span className="line-clamp-1 block text-[11px] text-loom-on-surface-variant">
          {subtitle}
        </span>
      </span>
    </Link>
  );
}
