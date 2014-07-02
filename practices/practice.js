;
var binarySearch = (function () {
    "use strict";
    var originalArray,
        minIndex = 0,
        maxIndex,
        middleElement,
        search = function (array, value) {
            maxIndex = array.length - 1;
            do {
                middleElement = Math.floor((maxIndex + minIndex) / 2);
                if (value === array[middleElement]) {
                    return middleElement;
                } else if(minIndex === middleElement){
                    return -1;
                } else if (value < array[middleElement]) {
                    maxIndex = middleElement;
                } else if (value > array[middleElement]) {
                    minIndex = middleElement;
                }
            } while (true);

        },
        typeNumber = function (item, index) {
            return typeof index !== 'number';
        },
        unique = function (a, b, c) {
            return c.indexOf(a, b + 1) < 0;
        },
        sortNumber = function (a, b) {
            return a - b;
        };
    return {
        getIndex: function (array, value) {
            originalArray = array;
            if (array.some(typeNumber)) {
                return -1;
            }
            array = array.filter(unique);/* binary search must have unique id*/
            array.sort(sortNumber);
            return search(array, value);
        }
    };
}());

