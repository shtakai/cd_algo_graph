function Graph() {
  this.nodes = []
}

function Node(name) {
  this.name = name
  this.destinations = []
}

Graph.prototype.existNode = function(node) {
  if(node == null){ return false }
  if(this.nodes.indexOf(node) != 0){
    return true
  }
  return false
}

Graph.prototype.addNode = function(node) {
  if(!this.existNode(node)){
    this.nodes.push(node)
    return true
  }
  return false
}

Graph.prototype.addConnection = function(source, destination){
  console.log('------')
  if(!this.existNode(source) || !this.existNode(destination)){
    console.log('=====')
    return false }
  console.log(source)
  let dstIdx = source.destinations.indexOf(destination)
  let dst = null;
  console.log(dstIdx)
  if(dstIdx != -1){
    dst = source.destinations[dstIdx]
  } else {
    source.destinations.push(destination)
  }
  return true
}


let n1 = new Node('node1')
let n2 = new Node('node2')
let n3 = new Node('node3')
let n4 = new Node('node4')
let g = new Graph()

console.log(`graph ${g.nodes}`)
g.addNode(n1)
console.log(`graph ${g.nodes}`)
g.addNode(n2)
g.addNode(n3)
console.log(`graph ${g.nodes}`)
console.log(`graph ${g.existNode(n1)}`)
g.addConnection(n1, n2)
g.addConnection(n1, n3)
console.log(n1.destinations)

