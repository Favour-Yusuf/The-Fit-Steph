declare module "react-player" {
  import * as React from "react";

  export interface ReactPlayerProps {
    url?: string | string[];
    playing?: boolean;
    loop?: boolean;
    controls?: boolean;
    volume?: number;
    muted?: boolean;
    width?: string | number;
    height?: string | number;
    style?: React.CSSProperties;
    className?: string;
    progressInterval?: number;
    playsinline?: boolean;
    config?: any;
    onReady?: () => void;
    onStart?: () => void;
    onPlay?: () => void;
    onPause?: () => void;
    onBuffer?: () => void;
    onEnded?: () => void;
    onError?: (error: any, data?: any, hlsInstance?: any, hlsGlobal?: any) => void;
    onDuration?: (duration: number) => void;
    onSeek?: (seconds: number) => void;
    onProgress?: (state: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => void;
  }

  export default class ReactPlayer extends React.Component<ReactPlayerProps> {}
}
