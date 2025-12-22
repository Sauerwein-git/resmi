// src/utils/detectZoomSupport.ts
export function supportsZoom(): boolean {
  if (typeof window === "undefined") return true;
  return "zoom" in document.documentElement.style;
}
