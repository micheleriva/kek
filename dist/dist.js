(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.dist = factory());
}(this, (function () { 'use strict';

  /**
   * @method types
   * @param {String} stringToParse 
   * @returns {Object}
   */

  const types = stringToParse => {

    const typesDefinition = stringToParse
                            .split('T:=')
                            .filter(type => !type.match(/^\w{1}:=/g));

    const typesArr = () => typesDefinition.map(type => type.split('|'));

    const structuredArr = () => typesArr().map(type => {
      return {
        [type[0]]: [...type.splice(1)]
      }
    });

    const finalObj = {};

    structuredArr().map(item => Object.assign(finalObj, item));

    return finalObj

  };

  /**
   * @method main
   * @param {String} stringToParse
   * @returns {String}
   */

  const main = stringToParse => stringToParse.match(/^S:=.+/)[0].replace(/^S:=\s/, '');

  /**
   * @method randomItem
   * @param {Array<any>} array
   * @returns {String}
   */

  const randomItem = array => array[Math.floor(Math.random() * array.length)];

  /**
   * @method compile
   * @param {String} stringToParse
   * @returns {String}
   */

  const compile = stringToParse => {
    
    const _sentence = main(stringToParse);
    const _types    = types(stringToParse);

    const _randomTypes = {};

    for(let type in _types) {
      Object.assign(_randomTypes, {[type]: randomItem(_types[type]).match(/\w+/)[0]});
    }

    let tempSentence = _sentence;

    for(let type in _randomTypes) {
      const pureType = type.match(/\w+/)[0];
      const declaredType = `#${pureType}`;
      tempSentence = tempSentence.replace(declaredType, _randomTypes[type]);
    }

    return tempSentence

  };

  return compile;

})));
