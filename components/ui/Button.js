import Link from "next/link";

export default function Button({ href, children, className = "", color = "purple", ...props }) {
  let base =
    "inline-block mt-2 px-6 py-2 rounded-lg text-cloud-white font-extrabold text-xl border-4 transition active:translate-x-1 active:translate-y-1 no-underline relative overflow-hidden btn-glimmer " +
    className;

  if (color === "orange") {
    base +=
      " bg-sunset-orange border-sunset-orange-dark border-t-transparent border-l-transparent border-b-sunset-orange-dark border-r-sunset-orange-dark active:border-b-transparent active:border-r-transparent active:border-t-sunset-orange-dark active:border-l-sunset-orange-dark";
  } else {
    base +=
      " bg-mountain-purple border-mountain-purple-dark border-t-transparent border-l-transparent border-b-mountain-purple-dark border-r-mountain-purple-dark active:border-b-transparent active:border-r-transparent active:border-t-mountain-purple-dark active:border-l-mountain-purple-dark";
  }

  if (href) {
    return (
      <Link href={href} className={base} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
} 