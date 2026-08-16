import { useEffect } from 'react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadInstagramEmbedScript(): Promise<void> {
  if (window.instgrm) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });

  return scriptPromise;
}

interface InstagramEmbedProps {
  url: string;
  caption?: boolean;
}

function InstagramEmbed({ url, caption = false }: InstagramEmbedProps) {
  useEffect(() => {
    let cancelled = false;
    loadInstagramEmbedScript().then(() => {
      if (!cancelled) window.instgrm?.Embeds.process();
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-captioned={caption ? true : undefined}
      data-instgrm-version="14"
      style={{ background: '#000', margin: 'auto', width: '100%' }}
    />
  );
}

export default InstagramEmbed;
