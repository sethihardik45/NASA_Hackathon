function checkEnterKey(event) {
    if (event.keyCode === 13) {  // 13 is the Enter key
      searchGoogle();  // Call the search function
    }
}
function searchGoogle() {
    const query = document.getElementById('searchInput').value;
    if (query) {
      // Redirects to Google search results
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(googleSearchUrl, '_blank');  // Opens in a new tab
    }
  }