import { groq } from 'next-sanity';

export const routeQuery = `*[_type == "post"]{
  "slug": slug.current,
  _updatedAt
}`;

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    featured,
    _id,
    description,
    title,
    publishedAt,
    "slug": slug.current,
    mainImage { ..., asset -> {..., metadata}},
    author -> {image { ..., asset -> {..., metadata}}, name, role},
    categories[]->{
      title
    },
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage { ..., asset -> {..., metadata}},
  author -> {image { ..., asset -> {..., metadata}}, name, role},
  publishedAt,
  categories[]->{
      title
    },
    body,
}`;

export const SLUGS_QUERY = groq`*[_type == "post"].slug.current`;
