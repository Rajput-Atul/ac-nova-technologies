// Web Vitals tracking for Core Web Vitals monitoring
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

export function reportWebVitals() {
  // Cumulative Layout Shift
  onCLS(console.log);
  
  // Interaction to Next Paint (replaces FID)
  onINP(console.log);
  
  // First Contentful Paint
  onFCP(console.log);
  
  // Largest Contentful Paint
  onLCP(console.log);
  
  // Time to First Byte
  onTTFB(console.log);
}
