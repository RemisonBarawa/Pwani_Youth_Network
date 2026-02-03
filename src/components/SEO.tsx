import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const defaultSEO = {
  title: "Pwani Youth Network - Empowering Coastal Kenya Youth Since 2013",
  description: "Grassroots organization empowering youth in Mombasa, Kilifi & Kwale through programs in health, education, climate action & economic empowerment. Join 15,000+ impacted youth.",
  keywords: "youth empowerment, coastal Kenya, Mombasa, Kilifi, Kwale, SRHR, climate action, education, economic empowerment, grassroots organization, community development",
  image: "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763787366/PYN_Logo_twjipo.png",
  url: "https://pwaniyouthnetwork.org",
  type: "website",
  author: "Pwani Youth Network"
};

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  author,
  publishedTime,
  modifiedTime
}: SEOProps) {
  const seoTitle = title ? `${title} | Pwani Youth Network` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoImage = image || defaultSEO.image;
  const seoUrl = url || defaultSEO.url;
  const seoAuthor = author || defaultSEO.author;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={seoAuthor} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Pwani Youth Network" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:site" content="@PwaniYouthNetwork" />
      <meta name="twitter:creator" content="@PwaniYouthNetwork" />
      
      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={seoAuthor} />
      )}
    </Helmet>
  );
}