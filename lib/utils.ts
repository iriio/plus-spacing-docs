import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to handle image paths with base path for GitHub Pages
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

  // In production (GitHub Pages), add the base path
  if (process.env.NODE_ENV === "production") {
    return `/plus-spacing-docs/${cleanPath}`;
  }

  // In development, use the path as-is
  return `/${cleanPath}`;
}

// Utility function to handle link paths with base path for GitHub Pages
export function getLinkPath(linkPath: string): string {
  // In production (GitHub Pages), add the base path
  if (process.env.NODE_ENV === "production") {
    return `/plus-spacing-docs${linkPath}`;
  }

  // In development, use the path as-is
  return linkPath;
}
