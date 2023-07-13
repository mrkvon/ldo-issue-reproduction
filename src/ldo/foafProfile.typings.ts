import { ContextDefinition } from 'jsonld'

/**
 * =============================================================================
 * Typescript Typings for foafProfile
 * =============================================================================
 */

/**
 * FoafProfile Type
 */
export interface FoafProfile {
  '@id'?: string
  '@context'?: ContextDefinition
  type: {
    '@id': 'Person'
  }
  name?: string
}
