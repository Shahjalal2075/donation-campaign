const getStoredList = () => {
    const storedListString = localStorage.getItem('donateList');
    if(storedListString){
        return JSON.parse(storedListString);
    }
    return [];
}

const addToLS = (id) =>{
    const donateList = getStoredList();
    const dataCheck = donates.find(donate => donate.id === idInt);
    donateList.push(id);
    const donateListStringified = JSON.stringify(donateList);
    localStorage.setItem('donateList',donateListStringified);
}

export {addToLS,getStoredList}