/**
 * @method phrases
 * @param {String} stringToParse 
 * @returns {Array<String>}
 */

export const phrases = stringToParse => stringToParse.split(';')

/**
 * @method types
 * @param {String} stringToParse 
 * @returns {Object}
 */

export const types = stringToParse => {

  const typesDefinition = stringToParse
                          .split('T:=')
                          .filter(type => !type.match(/^\w{1}:=/g))

  const typesArr = () => typesDefinition.map(type => type.split('|'))

  const structuredArr = () => typesArr().map(type => {
    return {
      [type[0]]: [...type.splice(1)]
    }
  })

  const finalObj = {}

  structuredArr().map(item => Object.assign(finalObj, item))

  return finalObj

}

/**
 * @method main
 * @param {String} stringToParse
 * @returns {String}
 */

export const main = stringToParse => stringToParse.match(/^S:=.+/)[0].replace(/^S:=\s/, '')

/**
 * @method declaredTypes
 * @param {String} stringToParse
 * @returns {Array<String>}
 */

export const declaredTypes = stringToParse => stringToParse.match(/#\w+/g)

/**
 * @method randomItem
 * @param {Array<any>} array
 * @returns {String}
 */

export const randomItem = array => array[Math.floor(Math.random() * array.length)]

/**
 * @method compile
 * @param {String} stringToParse
 * @returns {String}
 */

export const compile = stringToParse => {
  
  const _sentence        = main(stringToParse)
  const _types           = types(stringToParse)

  const _randomTypes = {}

  for(let type in _types) {
    Object.assign(_randomTypes, {[type]: randomItem(_types[type])})
  }

  let tempSentence = _sentence

  for(let type in _randomTypes) {
    const declaredType = `#${type}`.replace(/\s/ig, '').replace(/\n/ig, '')
    tempSentence = tempSentence.replace(declaredType, _randomTypes[type])
  }

  return tempSentence.replace(/\n/gi, '')

}