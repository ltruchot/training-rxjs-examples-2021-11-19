export const filter = (cond) => (arr) => {
  const newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cond(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function recursion (a){
  if (a > 0) {
    console.log(a);
    recursion(a - 1);
  } else {
    console.log(a);
  }
}


const obs = fromEvent(document, "click");

obs.subscribe(() => console.log("youpi"));
obs.subscribe(() => analytic("click"))





