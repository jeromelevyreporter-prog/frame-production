declare module "react-simple-maps" {
  import { FC, ReactNode, SVGProps } from "react";

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, unknown>;
    style?: React.CSSProperties;
    children?: ReactNode;
  }
  export const ComposableMap: FC<ComposableMapProps>;

  export interface GeographiesProps {
    geography: string;
    children: (args: { geographies: Geography[] }) => ReactNode;
  }
  export const Geographies: FC<GeographiesProps>;

  export interface Geography {
    rsmKey: string;
    [key: string]: unknown;
  }

  export interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: Geography;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: { default?: React.CSSProperties; hover?: React.CSSProperties; pressed?: React.CSSProperties };
  }
  export const Geography: FC<GeographyProps>;

  export interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
    onMouseEnter?: (e: React.MouseEvent<SVGGElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<SVGGElement>) => void;
    style?: React.CSSProperties;
  }
  export const Marker: FC<MarkerProps>;

  export interface ZoomableGroupProps {
    zoom?: number;
    center?: [number, number];
    minZoom?: number;
    maxZoom?: number;
    onMoveEnd?: (pos: { zoom: number; coordinates: [number, number] }) => void;
    children?: ReactNode;
  }
  export const ZoomableGroup: FC<ZoomableGroupProps>;
}
