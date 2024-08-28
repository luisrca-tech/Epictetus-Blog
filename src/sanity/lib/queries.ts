import { groq } from 'next-sanity';

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
  image,
}`;

export const POSTS_BY_CATEGORY_QUERY = groq`*[_type == "post" && defined(slug.current) && $category in categories[]->title] | order(publishedAt desc) {
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
