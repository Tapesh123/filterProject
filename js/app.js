//filter btns 1st part: 
(function() { 
    //select all buttons
    const filterBtn = document.querySelectorAll('.filter-btn');
    // console.log(filterBtn);
    
    filterBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){ 
           //prevent default object 
            event.preventDefault();
            const value = event.target.dataset.filter;
            // console.log(value);
            const items = document.querySelectorAll('.store-item');
            // console.log(items);
        //looping through the items 
        items.forEach(function(item){
            if(value === 'all') {
                item.style.display = 'block';
            }else{
                if(item.classList.contains(value)) { 
                     item.style.display = 'block';
                }else { 
                     item.style.display = 'none';
                }
            }
        })
            

        });
    });
})();



// search input 
(function() { 
    //target search box which is the search - item 
    const search = document.getElementById('search-item');
    //now lets add eventlistner to the search box to capture what is being entered 
    search.addEventListener('keyup', function() {
        //makes the value lower case and trims the white space
        let value = search.value.toLowerCase().trim();
        // console.log(value);
        // selecting class since we are looking for all the items 
    const items = document.querySelectorAll('.store-item');
        //now we want to loop through all the items and to get dataset properties and get them all into the array
    items.forEach(function(item){
        let type = item.dataset.item; //these are all the items from the loop, 
        // console.log(type);
        

        let length = value.length; //finds out the length of the value from your typing, it detects the length of letter you are typing in  
        console.log(length);
        let match = type.slice(0, length); // we are looking for match in your type of search. all the data attritube it will match the letter the type. Slice method is used, where to start then where you would want to finish. if you type in one value. we are looking for the first letter in out type as we loop through the items and get back the data attribute. if the letter matching then it will be returning them 
        console.log(value);
        console.log(match);

    if(value === match){ //the the letter matches the value then it will display the items
        item.style.display = 'block';
    }else{ //if it doesnt match then it will be hiding them 
     item.style.display = 'none';
    }  

    })

    })

})();