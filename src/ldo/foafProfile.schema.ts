import { Schema } from 'shexj'

/**
 * =============================================================================
 * foafProfileSchema: ShexJ Schema for foafProfile
 * =============================================================================
 */
export const foafProfileSchema: Schema = {
  type: 'Schema',
  shapes: [
    {
      id: 'https://example.com/FoafProfile',
      type: 'ShapeDecl',
      shapeExpr: {
        type: 'Shape',
        expression: {
          type: 'EachOf',
          expressions: [
            {
              type: 'TripleConstraint',
              predicate: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
              valueExpr: {
                type: 'NodeConstraint',
                values: ['http://xmlns.com/foaf/0.1/Person'],
              },
            },
            {
              type: 'TripleConstraint',
              predicate: 'http://xmlns.com/foaf/0.1/name',
              valueExpr: {
                type: 'NodeConstraint',
                datatype: 'http://www.w3.org/2001/XMLSchema#string',
              },
              min: 0,
              max: 1,
            },
          ],
        },
        extra: ['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'],
      },
    },
  ],
}
