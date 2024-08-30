import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    featured,
    _id,
    description,
    title,
    publishedAt,
    "slug": slug.current,
    mainImage { ..., asset -> {..., metadata}},
    author -> {image { ..., asset -> {..., metadata}}, name, role, "slug": slug.current},
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

export const AUTHOR_SLUG_QUERY = groq`*[_type == "category"] {
  "slug": slug.current,
}`;

export const POSTS_BY_AUTHOR_QUERY = groq`
  *[_type == "post" && defined(slug.current) && $author == author->slug.current] | order(publishedAt desc) {
    featured,
    _id,
    description,
    title,
    publishedAt,
    "slug": slug.current,
    mainImage { ..., asset -> {..., metadata}},
    author -> {
      image { ..., asset -> {..., metadata}},
      name,
      role,
      "slug": slug.current
    },
    categories[]->{
      title,
      "slug": slug.current,
    },
  }
`;
