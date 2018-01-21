function Objects(obj, key){
  var recipes = new Object({  })
  
}

function updateObjectWithKeyAndValue(obj, key, value){
  
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  
  obj[key] = value
  return obj
}

var newObj
function deleteFromObjectByKey(obj, key){
  
  return Object.assign({}, obj)
}

function destructivelyDeleteFromObjectByKey(obj, key){
  
  delete obj[key]
  return obj
}