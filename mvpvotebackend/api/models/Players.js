/**
 * Players.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    pos: {
      type: 'string'
    },
    ht: {
      type: 'string'
    },
    wt: {
      type: 'string'
    },
    exp: {
      type: 'number'
    },
    country: {
      type: 'string'
    },
    image: {
      type: 'string'
    },
    votes: {
      type: 'integer'
    },
    byTeams: {
      model: 'teams'
    },
  }
};
