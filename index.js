const nameInput = document.getElementById('nameInput');
const urlInput = document.getElementById('urlInput');
const addBookmarkBtn = document.getElementById('addBookmarkBtn');
const bookmarkList = document.getElementById('bookmarkList');

addBookmarkBtn.addEventListener('click', addBookmark);

function addBookmark() {
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();

  if (name !== '' && url !== '') {
    const bookmarkItem = document.createElement('li');
    bookmarkItem.innerHTML = `
      <a href="${url}" target="_blank">${name}</a>
      <button class="deleteBtn">Delete</button>
    `;
    bookmarkList.appendChild(bookmarkItem);
    nameInput.value = '';
    urlInput.value = '';

    const deleteBtn = bookmarkItem.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
      bookmarkList.removeChild(bookmarkItem);
    });
  } else {
    alert('Please enter both name and URL for the bookmark!');
  }
}
