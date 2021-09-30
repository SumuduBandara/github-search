import { GITHUB_SEARCH_COMPLETE, RESET_SEARCH_DATA } from './actionType';

function searchCompleted (data) {
    return {
        type: GITHUB_SEARCH_COMPLETE,
        data
    }
}

function resetData () {
    return {
        type: RESET_SEARCH_DATA
    }
}

function searchGitHub (keyword) {
    const url = `https://api.github.com/search/repositories?q=${keyword}`;
    return (dispatch) => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('data: ', data);
            const extractedData = extractSearchData(data);
            console.log('extractedData: ', extractedData);
            dispatch(searchCompleted(extractedData));
        }).catch(err => {
            console.error('Error occurred while searching: ', err);
        });
    };
}

function extractSearchData (searchData) {
    const { items } = searchData;
    const extractedData = items.map((item) => {
        const returnObj = {};
        returnObj.projectName = item.name;
        returnObj.stargazersCount = item.stargazers_count;
        returnObj.watchersCount = item.watchers_count;
        return returnObj;
    });
    return extractedData;
}

export default {
    searchGitHub,
    resetData
};