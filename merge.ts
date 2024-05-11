export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const merged = [...collection1, ...collection2, ...collection3];

    // Bubble sort 
    for (let i = 0; i < merged.length; i++) {
        for (let j = 0; j < merged.length - 1 - i; j++) {
            if (merged[j] > merged[j + 1]) {
                const temp = merged[j];
                // Swap
                merged[j] = merged[j + 1];
                merged[j + 1] = temp;
            }
        }
    }

    return merged;
}
