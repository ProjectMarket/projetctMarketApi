/**
 * Entity.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: {
      model: 'user',
      required: false
    },
    society: {
      model: 'society',
      required: false
    },
    projectsApplied: {
      collection: 'project',
      via: 'appliants',
      required: false
    },
    avis: {
      collection: 'commentary',
      via: 'owner',
      required: false
    }
  }
};