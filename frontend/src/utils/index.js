
export const filterNews = (searchText, news) => {
    let filteredNews = [];
    filteredNews = news.filter((item) => {
        return (item.title && item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.description && item.description.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
    });
    return filteredNews;
}