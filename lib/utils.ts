import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to handle image paths with base path for GitHub Pages
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  return `${BASE_PATH}/${cleanPath}`;
}

// Base path for GitHub Pages deployment
const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/plus-spacing-docs" : "";

// Utility function to handle link paths - Next.js handles basePath automatically for Link components
export function getLinkPath(linkPath: string): string {
  // Next.js automatically applies basePath for Link components in static exports
  // So we just return the path as-is
  return linkPath;
}
