export const addPublication = (publicationData) => {
    return {
        type: 'ADD_PUBLICATION',
        payload: publicationData
    };
};