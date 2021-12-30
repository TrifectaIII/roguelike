// Utility Functions

export const rand = (a = 0, b = 1): number => {

    // Returns a random float f such that a <= f < b
    if (a < b) return a + (b - a) * Math.random();
    return b + (a - b) * Math.random();


};

export const randInt = (a: number, b: number): number => {

    // Returns a random int i such that a <= i <= b
    if (a < b) return Math.floor(a + (b - a + 1) * Math.random());
    return Math.floor(b + (a - b + 1) * Math.random());

};
