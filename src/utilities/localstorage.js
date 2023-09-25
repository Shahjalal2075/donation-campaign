const getStoredList = () => {
    const storedListString = localStorage.getItem('donateList');
    if (storedListString) {
        return JSON.parse(storedListString);
    }
    return [];
}

const addToLS = (id) => {
    const donateList = getStoredList();
    const isList = donateList.some(donate=>donate === id);
    if (!isList) {
        donateList.push(id);
    }

    const donateListStringified = JSON.stringify(donateList);
    localStorage.setItem('donateList', donateListStringified);
}

export { addToLS, getStoredList }