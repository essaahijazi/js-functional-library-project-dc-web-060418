fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {

      for(const x in collection) {
        iteratee(collection[x], x, collection);
      }

      return collection;
    },

    map: function(collection, iteratee) {
      let newArr = [];

      for(const x in collection) {
        newArr.push(iteratee(collection[x], x, collection));
      }


      return newArr;
    },

    reduce: function(collection, iteratee, acc) {
      for(let i = 0; i < collection.length; i++) {
        acc = iteratee(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      for(let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])){
          return collection[i]
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      let newArr = [];
      for(let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])){
          newArr.push(collection[i])
        }
      }
      return newArr;
    },

    size: function(collection) {
      let counter = 0;
      for(const x in collection) {
        counter++;
      }
      return counter;
    },

    first: function(array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        let newArr = [];
        for(var i = 0; i < n; i++) {
            newArr.push(array[i]);
        }
        return newArr;
      }
    },

    last: function(array, n) {
      if (n === undefined) {
        return array[array.length - 1];
      } else {
        let newArr = [];
        for(let i = array.length - n; i < array.length; i++) {
          newArr.push(array[i]);
        }
        return newArr;
      }
    },

    compact: function(array) {
      let newArr = [];
      for(let i = 0; i < array.length; i++) {
        if(!!array[i] ===  true) {
          newArr.push(array[i])
        }
      }
      return newArr;
    },

    sortBy: function(array, iteratee) {
      let newArr = [];
      for(const x in array) {
        newArr.push(array[x]);
      }
      return newArr.sort(function(a, b){return iteratee(a) - iteratee(b)});
    },

    flatten: function(array, shallow) {
      let newArr = []
      if (shallow === true) {
        for(const key in array) {
          if(typeof array[key] === 'object') {
            for(const nestedKey in array[key]) {
              newArr.push(array[key][nestedKey])
            }
          } else {
              newArr.push(array[key]);
          }
        }
      } else {
        function deepIterator(arr){
          for(let i = 0; i < arr.length; i++)
            if (typeof arr[i] === 'object') {
                deepIterator(arr[i]);
            } else {
              newArr.push(arr[i]);
            }
          }
          deepIterator(array);
        }
      return newArr;
    },

    uniq: function(array, isSorted, iteratee) {
      let newArr = [];
      for(let i = 0; i < array.length; i++) {
        let isFound = false;
        for(let j = 0; j < newArr.length; j++) {
          if(iteratee !== undefined) {
            if(iteratee(array[i]) === iteratee(newArr[j])) {
              isFound = true;
            }
          } else {
            if(array[i] === newArr[j]) {
              isFound = true;
            }
          }
        }
        if(!isFound) {
          newArr.push(array[i])
        }
      }
      return newArr;
    },

    keys: function(object) {
      let newArr = [];
      for(key in object) {
         newArr.push(key);
      }
      return newArr;
    },

    values: function(object) {
      let newArr = [];
      for(key in object) {
         newArr.push(object[key]);
      }
      return newArr;
    },

    functions: function(object) {
      let newArr = [];
      for(key in object) {
        if(typeof object[key] === "function") {
         newArr.push(key);
        }
      }
      return newArr.sort();
    }



  }
})()

fi.libraryMethod()
