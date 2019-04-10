const defaultErrorHandle = ({ response }) => {
    let errorMessage = 'There has been an error. If errors continue please drop us a line.';
    if (response && response.data && response.data.message) {
        errorMessage = response.data.message;
    }
    throw new Error(errorMessage);
};

const defaultResponseHandle = response => response.json();

const getApi = (url, responseHandle, errorHandle) =>
    fetch(url)
        .then(responseHandle || defaultResponseHandle)
        .catch(errorHandle || defaultErrorHandle);

export const getMovies = (responseHandle, errorHandle) => getApi('https://reactjs-cdp.herokuapp.com/movies', responseHandle, errorHandle);

export const getMovie = (id, responseHandle, errorHandle) => getApi(`https://reactjs-cdp.herokuapp.com/movies/${id}`, responseHandle, errorHandle);