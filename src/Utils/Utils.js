import toast from 'react-hot-toast';

//get
export const getFavouriteSpots = () => {
  let spots = [];
  const favouriteSpots = localStorage.getItem('SA-Tourism-FavouriteSpots');
  if (favouriteSpots) {
    spots = JSON.parse(favouriteSpots);
  }
  return spots;
};

//set
export const addToFavourite = id => {
  let oldSpots = getFavouriteSpots();
  const isExist = oldSpots.find(b => b === id);
  if (isExist) {
    return toast.error('This spot is already in your favourite list!');
  }

  oldSpots.push(id);
  localStorage.setItem('SA-Tourism-FavouriteSpots', JSON.stringify(oldSpots));
  toast.success('The spot is successfully added to your favourite list!');
};

//delete
export const removeFromFavourite = id => {
  const spots = getFavouriteSpots();
  const remaining = spots.filter(s => s !== id);
  localStorage.setItem('SA-Tourism-FavouriteSpots', JSON.stringify(remaining));
  toast.success('The spot is successfully removed from your favourite list!');
};

// For other use
// get
// export const getWishedBooks = () => {
//   let books = [];
//   const storedBooks = localStorage.getItem('visiting');
//   if (storedBooks) {
//     books = JSON.parse(storedBooks);
//   }
//   return books;
// };

//set
// export const setId = bookId => {
//   let oldBooks = getWishedBooks();
//   const isExist = oldBooks.find(b => b === bookId);
//   if (isExist) {
//     return toast.error('This book is already read!');
//   }
//   oldBooks.push(bookId);
//   localStorage.setItem('visiting', JSON.stringify(oldBooks));
//   toast.success('The Book is successfully marked as read!');
// };

//delete
// export const deleteBook = id => {
//   let books = getWishedBooks();
//   const remaining = books.filter(b => b !== id);
//   localStorage.setItem('visiting', JSON.stringify(remaining));
// };
