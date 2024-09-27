module.exports = function check(str, bracketsConfig) {
  let obj=new Map(bracketsConfig)
  let stack=[]
  str.split('').map((item)=>{
    let last=stack[stack.length-1]
    if (item===obj.get(last)) {
      stack.pop()
    } else {
      stack.push(item)
    }
  })
  return stack.length===0
}

