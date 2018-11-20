function takeTicketnumber (katzDeliLine, number){
  //katzDeliLine.push(name)
  //reurn "Welcome, " + name +". You are number "+ katzDeliLine.length +" in line."
  katzDeliLine.push(number)
  return "Welcome, you are number: " + number + "!"

}

function nowServing (deliLine){
  if(deliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  return "Currently serving "+ deliLine.shift() + "."
}
 
function currentLine (katzDeliLine){
  if(katzDeliLine.length == 0){
    return "The line is currently empty."
  }

  var myString = `The line is currently: 1. ${katzDeliLine[0]}`

  for(let i = 1; i<katzDeliLine.length;i++){
    myString += `, ${i+1}. ${katzDeliLine[i]}`
}
  return myString
}

