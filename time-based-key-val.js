
var TimeMap = function() {
    this.store = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.store.has(key)) {
        this.store.set(key, []);
    }
    this.store.get(key).push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.store.has(key)) return "";

    const entries = this.store.get(key);
    let left = 0;
    let right = entries.length - 1;
    let result = "";

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (entries[mid][0] <= timestamp) {
            result = entries[mid][1];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */