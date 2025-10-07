const getStoreBook = () => { 
  const storedBookSTR = localStorage.getItem('readList');

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
}


const addTOStoreDB = (id) => {
  const storedBookData = getStoreBook();

  if (storedBookData.includes(id)) {
    alert("Book is already exist");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem('readList', data);
  }
}


export {addTOStoreDB, getStoreBook};