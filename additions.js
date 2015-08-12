additions = {
  "fruit": [
    "cherry",
    "apple",
    "pear",
    "blueberry",
    "raspberry",
    "blackberry",
    "apricot",
    "peach",
    "grapefruit",
    "watermelon",
    "cranberry",
    "strawberry",
    
  ],
  "herbal": [
    "green tea",
    "chamomile",
    "mint",
    "orange peel",
    "chai",
    "anise",
    "chicory",
    "lemon peel",
    "lemon grass",
    "elderflower",
    "coriander",
    "cardamom",
    "seeds of paradise",
    "rose hips",
    "juniper berries",
    "ginger",
    "hibiscus",
  ],
  "other": [
    "chocolate",
    "peanut butter",
    "coconut",
    "hazelnut",
    "pecan"
    
  ]

};

function randomAddition(type){
  if(!type){
    var keys = Object.keys(additions);
    var type = keys[Math.floor(Math.random()*keys.length)];
  } else if(typeof(additions[type]) == 'undefined'){
    return "";
  }
  return additions[type][Math.floor(Math.random()*additions[type].length)]; 
}

function additionCount(){
  count = 0;
  for(i in additions){
    count += additions[i].length;
  }
  return count;
}