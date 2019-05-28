const filterMoviesCollection = (data, { queryString, selectedFilter }) => data.filter(movie => {
        const checktitle = movie.title.toLowerCase().split(' ');
        const checkgenres = movie.genres.map(genre => genre.toLowerCase());
        // const isExluded = idsToExclude && idsToExclude.includes(movie.id);

        switch (selectedFilter) {
            case 'genre':
                return checkgenres.includes(queryString.toLowerCase());
            case 'title':
                return checktitle.includes(queryString.toLowerCase());
            default:
                return movie
        }
    });

export default filterMoviesCollection
