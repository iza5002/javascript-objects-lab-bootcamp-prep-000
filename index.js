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

var newObj = Object.assign({}, obj);
function deleteFromObjectByKey(obj, key){
  delete 
  return Object.assign({}, obj)
}

function destructivelyDeleteFromObjectByKey(obj, key){
  
  delete obj[key]
  return obj
}