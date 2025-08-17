declare module "react-lazy-load-image-component" {
  import * as React from "react";

  export interface LazyLoadImageProps
    extends React.ImgHTMLAttributes<HTMLImageElement> {
    effect?: "blur" | "black-and-white" | "opacity";
    placeholderSrc?: string;
  }

  export class LazyLoadImage extends React.Component<LazyLoadImageProps> {}
}
