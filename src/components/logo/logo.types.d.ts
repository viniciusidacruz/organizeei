import { ComponentProps } from "react";

type AnchorHTMLElement = ComponentProps<"a">;

export type LogoProps = Omit<AnchorHTMLElement, "href">;
