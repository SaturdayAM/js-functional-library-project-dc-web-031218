fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, iterateFn) {
      if(Array.isArray(col)){ //is object
        for(var i = 0; i < col.length; i++){
          iterateFn(col[i]);
        }        
      }else{ //assume array
        for(var key in col){
          iterateFn(col[key]);
        }
      }
      return col;
    },

    map: function(col, iterateFn) {
      let toReturn = [];
      for(var key in col){
        // toReturn[key] = iterateFn(col[key]);
        toReturn.push(iterateFn(col[key]));
      }
      return toReturn;
    },

    reduce: function(collection, iteratee, acc=0) {
      let solution = acc;
      for(let key in collection){
        solution = iteratee(solution, collection[key]);
      }
      return solution;
    },

    find: function(collection, predicate){
      for(let key in collection){
        if(predicate(collection[key]) ===true){
          return true;
        }
      }
      return false;
    }, 

    filter: function(collection, predicate){
      result = [];
      for(let key in collection){
        if(predicate(collection[key]) ===true){
          result.push(collection[key]);
        }
      }
      return result;
    },

    size: function(collection){
      let i = 0;
      for(let key in collection){
        i++;
      }
      return i;
    },

    first: function(collection, n=1){
      if(n===1){
        return collection[0];
      }
      let result = [];

      for(let i = 0; i< n; i++){
        result.push(collection[i]);
      }
      return result;
    },    

    last: function(collection, n=1){
      if(n===1){
        return collection[collection.length-1];
      }
      let result = [];

      for(let i = collection.length - 1; i > 0; i--){
        result.unshift(collection[i]);
      }
      return result;
    },

    compact: function(collection){
      let result = [];
      for(let i = 0; i < collection.length; i++){
        if(!!collection[i]){
          result.push(collection[i]);
        }
      }
      return result;

    },

    sortBy: function(collection, sortFn){
      let converted = [];
      for(let i = 0; i< collection.length; i++){
          converted.push(sortFn(collection[i]));
      }
      let result = [...converted.sort((a,b)=> a - b)];
      return result;
    },

    flatten: function(array, shallow=false){
      let result = [];
      if (shallow){
        for (let i = 0;i<array.length;i++){
          if (typeof array[i] === 'object'){
            for(let key in array[i]){
              result.push(array[i][key]);
            }
          }else{
            result.push(array[i]);
          }
        }
      return result;
      }//endif
      
      function flattener(array) {
        for(let key in array){
          if (typeof array[key] === 'object'){
            flattener(array[key]);
          }else{
            result.push(array[key]);
          }
        }
      }//endflattener
      flattener(array);
      return result;
    },

    uniq: function(array, isSorted=false, iteratee){
      let result = [];
      let iteratedResult = [];
      let temp = [];
      if (iteratee){
        temp = [...array.map(iteratee)];
        for (let i = 0; i<temp.length; i++){
          if (!iteratedResult.includes(temp[i])){
            result.push(array[i]);
            iteratedResult.push(temp[i]);
          }
        }
      } else{
      for (let key in array){
        if (!result.includes(array[key])){
          result.push(array[key]);
        }
      }
    }
    return result;
    },

    keys: function(collection){
      toReturn = [];
      for(let key in collection){
        toReturn.push(key);
      }
      return toReturn;

    },

    values: function(collection){
      toReturn = [];
      for(let key in collection){
        toReturn.push(collection[key]);
      }
      return toReturn;
    },
    giveMeMore: function(){
      return true;
    },

    functions: function(collection){
      toReturn = [];
      for(let key in collection){
        if(typeof(collection[key])==="function"){
          toReturn.push(collection[key]);
        }
      }
      return toReturn;

    },


  }
})()

fi.libraryMethod()
