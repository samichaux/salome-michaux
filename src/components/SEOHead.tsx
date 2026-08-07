import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: string;
}

const BASE_URL = "https://salomemichaux.eu";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0c04d6e6-5a5e-4320-90b9-965d4682377b/id-preview-096407d5--79c80cf6-5085-4421-a452-6d9712a54261.lovable.app-1771279405104.png";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// SSR head tags come from the route-level head() in src/routes/__root.tsx;
// this component keeps them in sync client-side (e.g. on language switch).
const SEOHead = ({ title, description, path = "/", type = "website" }: SEOHeadProps) => {
  const url = `${BASE_URL}${path}`;

  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setCanonical(url);
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", OG_IMAGE);
  }, [title, description, url, type]);

  return null;
};

export default SEOHead;
