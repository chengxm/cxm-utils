"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数组去重
 * @param arr 需要去重的数组
 * @returns {Array} 去重后的数组
 */
function removeArrRepeat(arr) {
    return Array.from(new Set(arr));
}
exports.default = removeArrRepeat;
