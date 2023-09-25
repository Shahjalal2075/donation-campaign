const getStoredList = () => {
    const storedListString = localStorage.getItem('donateList');
    if(storedListString){
        return JSON.parse(storedListString);
    }
    return [];
}

const addToLS = (id) =>{
    const donateList = getStoredList();
    donateList.push(id);
    const donateListStringified = JSON.stringify(donateList);
    localStorage.setItem('donateList',donateListStringified);
}

export {addToLS,getStoredList}