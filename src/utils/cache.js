export const addToCache = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const loadFromCache = (key) => {
    const item = JSON.parse(localStorage.getItem(key));
    return item;
}

export const clear = (key) => {
    localStorage.clear(key);
}

export const clearAll = () => {
    localStorage.clear();
}
