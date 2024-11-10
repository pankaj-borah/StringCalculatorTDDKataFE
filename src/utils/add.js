export const add = (numbers) => {
    if (numbers === "") return 0;

    let delimiter = /[,\n]/;

    if (numbers.startsWith("//")) {
        const nIndex = numbers.indexOf("n");
        const backslashIndex = numbers.indexOf("\\");

        if (backslashIndex !== nIndex - 1) {
            throw new Error("Invalid input format for custom delimiter.");
        }

        if (nIndex === -1 || backslashIndex === -1 || nIndex < 3) {
            throw new Error("Invalid input format for custom delimiter.");
        }

        const customDelimiter = numbers.slice(2, backslashIndex);
        delimiter = new RegExp(customDelimiter);
        numbers = numbers.slice(nIndex + 1);
    }

    const nums = numbers.split(delimiter).map(Number);

    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
};
