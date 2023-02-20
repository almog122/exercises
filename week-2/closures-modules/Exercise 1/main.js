const StringFormatter = function(){

  const capitalizeFirst  = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

  const toSkewerCase = (str) => str.replaceAll(" " , "-");

  return{
    capitalizeFirst: capitalizeFirst,

    skewerCase : toSkewerCase
  }
}


const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box