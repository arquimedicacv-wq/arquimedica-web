// Auto-generated. Do not edit manually.
import type { ImageMetadata } from "astro";
import aire_aire1 from "./aire/aire1.jpeg";
import aire_aire10 from "./aire/aire10.jpeg";
import aire_aire11 from "./aire/aire11.jpeg";
import aire_aire12 from "./aire/aire12.jpeg";
import aire_aire13 from "./aire/aire13.jpeg";
import aire_aire14 from "./aire/aire14.jpeg";
import aire_aire15 from "./aire/aire15.jpeg";
import aire_aire16 from "./aire/aire16.jpeg";
import aire_aire2 from "./aire/aire2.jpeg";
import aire_aire20 from "./aire/aire20.jpeg";
import aire_aire21 from "./aire/aire21.jpeg";
import aire_aire22 from "./aire/aire22.jpeg";
import aire_aire3 from "./aire/aire3.jpeg";
import aire_aire4 from "./aire/aire4.jpeg";
import aire_aire5 from "./aire/aire5.jpeg";
import aire_aire6 from "./aire/aire6.jpeg";
import aire_aire7 from "./aire/aire7.jpeg";
import aire_aire8 from "./aire/aire8.jpeg";
import aire_aire9 from "./aire/aire9.jpeg";
import electrico_electrico1 from "./electrico/electrico1.jpeg";
import electrico_electrico2 from "./electrico/electrico2.jpeg";
import electrico_electrico3 from "./electrico/electrico3.jpeg";
import electrico_electrico4 from "./electrico/electrico4.jpeg";
import electrico_electrico5 from "./electrico/electrico5.jpeg";
import gases_gases1 from "./gases/gases1.jpeg";
import gases_gases2 from "./gases/gases2.jpeg";
import gases_gases3 from "./gases/gases3.jpeg";
import gases_gases4 from "./gases/gases4.jpeg";
import gases_gases5 from "./gases/gases5.jpeg";
import gases_gases6 from "./gases/gases6.jpeg";
import piso_piso1 from "./piso/piso1.jpeg";
import piso_piso2 from "./piso/piso2.jpeg";
import piso_piso3 from "./piso/piso3.jpeg";
import piso_piso4 from "./piso/piso4.jpeg";
import piso_piso5 from "./piso/piso5.jpeg";
import piso_piso6 from "./piso/piso6.jpeg";
import piso_piso7 from "./piso/piso7.jpeg";

export const imageMap: Record<string, ImageMetadata> = {
  "/images/servicios/aire/aire1.jpeg": aire_aire1,
  "/images/servicios/aire/aire10.jpeg": aire_aire10,
  "/images/servicios/aire/aire11.jpeg": aire_aire11,
  "/images/servicios/aire/aire12.jpeg": aire_aire12,
  "/images/servicios/aire/aire13.jpeg": aire_aire13,
  "/images/servicios/aire/aire14.jpeg": aire_aire14,
  "/images/servicios/aire/aire15.jpeg": aire_aire15,
  "/images/servicios/aire/aire16.jpeg": aire_aire16,
  "/images/servicios/aire/aire2.jpeg": aire_aire2,
  "/images/servicios/aire/aire20.jpeg": aire_aire20,
  "/images/servicios/aire/aire21.jpeg": aire_aire21,
  "/images/servicios/aire/aire22.jpeg": aire_aire22,
  "/images/servicios/aire/aire3.jpeg": aire_aire3,
  "/images/servicios/aire/aire4.jpeg": aire_aire4,
  "/images/servicios/aire/aire5.jpeg": aire_aire5,
  "/images/servicios/aire/aire6.jpeg": aire_aire6,
  "/images/servicios/aire/aire7.jpeg": aire_aire7,
  "/images/servicios/aire/aire8.jpeg": aire_aire8,
  "/images/servicios/aire/aire9.jpeg": aire_aire9,
  "/images/servicios/electrico/electrico1.jpeg": electrico_electrico1,
  "/images/servicios/electrico/electrico2.jpeg": electrico_electrico2,
  "/images/servicios/electrico/electrico3.jpeg": electrico_electrico3,
  "/images/servicios/electrico/electrico4.jpeg": electrico_electrico4,
  "/images/servicios/electrico/electrico5.jpeg": electrico_electrico5,
  "/images/servicios/gases/gases1.jpeg": gases_gases1,
  "/images/servicios/gases/gases2.jpeg": gases_gases2,
  "/images/servicios/gases/gases3.jpeg": gases_gases3,
  "/images/servicios/gases/gases4.jpeg": gases_gases4,
  "/images/servicios/gases/gases5.jpeg": gases_gases5,
  "/images/servicios/gases/gases6.jpeg": gases_gases6,
  "/images/servicios/piso/piso1.jpeg": piso_piso1,
  "/images/servicios/piso/piso2.jpeg": piso_piso2,
  "/images/servicios/piso/piso3.jpeg": piso_piso3,
  "/images/servicios/piso/piso4.jpeg": piso_piso4,
  "/images/servicios/piso/piso5.jpeg": piso_piso5,
  "/images/servicios/piso/piso6.jpeg": piso_piso6,
  "/images/servicios/piso/piso7.jpeg": piso_piso7,
};

export function getGalleryImage(url: string): ImageMetadata | undefined {
  return imageMap[url];
}

export function isRemoteImage(url: string): boolean {
  return url.startsWith("http");
}
