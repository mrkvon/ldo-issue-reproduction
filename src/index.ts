import { parseRdf } from 'ldo'
import { FoafProfileShapeType } from './ldo/foafProfile.shapeTypes'
;(async () => {
  const rawTurtle = `
  <#me> a <http://xmlns.com/foaf/0.1/Person>;
      <http://xmlns.com/foaf/0.1/name> "Jane Doe", "Jane".
  `

  /**
   * Step 1: Convert Raw RDF into a Linked Data Object
   */
  const ldoDataset = await parseRdf(rawTurtle, {
    baseIRI: 'https://example.com/jane_doe/profile/card',
  })
  // Create a linked data object by telling the dataset the type and subject of
  // the object
  const profile = ldoDataset
    // Tells the LDO dataset that we're looking for a FoafProfile
    .usingType(FoafProfileShapeType)
    // Says the subject of the FoafProfile
    .fromSubject('https://example.com/jane_doe/profile/card#me')

  console.log(JSON.stringify(profile))
})()
