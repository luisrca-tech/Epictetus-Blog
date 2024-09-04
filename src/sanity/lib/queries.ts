export const routeQuery = `*[_type == "post"]{
  "slug": slug.current,
  _updatedAt
}`;
