import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container px-8 mx-auto xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        props.navbar && "py-5 lg:pt-8 lg:pb-0",
        !props.alt && !props.navbar && "py-5 lg:py-8",
        props.className
      )}>
      {props.children}
    </div>
  );
}
