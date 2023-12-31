import { ContextDefinition } from 'jsonld'

/**
 * =============================================================================
 * foafProfileContext: JSONLD Context for foafProfile
 * =============================================================================
 */
export const foafProfileContext: ContextDefinition = {
  type: {
    '@id': '@type',
  },
  Person: 'http://xmlns.com/foaf/0.1/Person',
  name: {
    '@id': 'http://xmlns.com/foaf/0.1/name',
    '@type': 'http://www.w3.org/2001/XMLSchema#string',
  },
}
