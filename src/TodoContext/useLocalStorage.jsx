import React from 'react';

function useLocalStorage(key, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const locaStorageItem = localStorage.getItem(key);
                let parsedItem;

                if (locaStorageItem) {
                    parsedItem = JSON.parse(locaStorageItem);
                } else {
                    localStorage.setItem(key, JSON.stringify(initialValue));
                    parsedItem = [];
                }
                setItem(parsedItem);
                setLoading(false);
                setError(false);
            } catch (e) {
                setError(e);
            }
        }, 2000);
    });

    const saveItems = (itemList) => {
        try{
            localStorage.setItem(key, JSON.stringify(itemList));
            setItem(itemList);
            setError(false);
        } catch (e) {
            setError(e);
        }
    }
    return {
        item,
        saveItems,
        loading,
        error
    }
}

export { useLocalStorage };