import { lazy, Suspense } from 'react';

const LazyImage = lazy(() => import('./LazyImage'));

export default function ImageComponent({ src, alt }) {
  return (

    <Suspense fallback={<div className="loading">Loading...</div>}>
      <LazyImage src={src} alt={alt} />
    </Suspense>
  );
}
