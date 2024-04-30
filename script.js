let     output = []
function openOrSenior(data){
for(index of data) {
    let age = index[0]
    let cap = index[1]
if(age>=55&&cap>7){
    output.push('Senior')
 }
 else{
    output.push('Open')
 }
  }
  return output
}

  console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))