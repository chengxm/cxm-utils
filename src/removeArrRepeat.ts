/**
 * 数组去重
 * @param arr 需要去重的数组
 * @returns {Array} 去重后的数组
 */
 export default function removeArrRepeat(arr: any[]) {
    return Array.from(new Set(arr));
}