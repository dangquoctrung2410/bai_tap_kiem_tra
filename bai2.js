
        // let numberArray = [17, 17, 54, 1000, 112, 30, 32, 33, 15];

        // function tryRemoveFromArray(numberArray, index){
        //     for (let i = 0; i < numberArray.length;i ++ ){
        //         if (index === i){
        //             numberArray[index] = numberArray[index + 1];
        //         }

        //     }

        //     console.log(numberArray);

        // }

        //  tryRemoveFromArray(numberArray, 2);

 

        let numberArray = [26, 26, 54, 534, 112, 26, 26, 65, 10];

        function tryRemoveFromArray(arr, index) {
            let rel = []
            if (index < 0 || index > arr.length) {
                rel = arr;
                return rel;
            } else {
                for (let i = 0; i < index; i++) {
                    rel[i] = arr[i];
                }
                for (let i = index + 1; i < arr.length; i++) {
                    rel[i] = arr[i];
                }
            }
            return rel;
        }
        console.log(tryRemoveFromArray(numberArray, 3));