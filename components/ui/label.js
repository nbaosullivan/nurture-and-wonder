import { cx } from "@/utils/all";

export default function Label(props) {
  const color = {
    green: "text-evergreen",
    blue: "text-mountain-purple",
    orange: "text-evergreen",
    purple: "text-mountain-purple",
    pink: "text-evergreen"
  };
  const bgcolor = {
    green: "bg-peach-blush",
    blue: "bg-peach-blush",
    orange: "bg-peach-blush",
    purple: "bg-peach-blush",
    pink: "bg-peach-blush"
  };
  const margin = props.nomargin;

  if (props.pill) {
    return (
      <div
        className={
          "inline-flex items-center justify-center font-bold px-2 h-6 text-sm bg-peach-blush text-evergreen rounded-full shrink-0 dark:bg-gray-800 dark:text-gray-300"
        }>
        {props.children}
      </div>
    );
  }

  return (
    <span
      className={cx(
        "inline-block text-xs font-medium tracking-wider uppercase ",
        !margin && " mt-5",
        color[props.color] ?? color["pink"]
      )}>
      {props.children}
    </span>
  );
}
