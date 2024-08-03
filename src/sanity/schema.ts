import type { SchemaTypeDefinition } from 'sanity';

import { authorType } from './schemaTypes/authorType';
import { blockContentType } from './schemaTypes/blockContentType';
import { categoryType } from './schemaTypes/categoryType';
import { postType } from './schemaTypes/postType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, categoryType, postType, authorType]
};
