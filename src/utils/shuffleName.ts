function shuffleName(count: number): number {
    const randomNumber = Math.ceil(Math.random() * count);
    return randomNumber || 1;
}

const utils = {
    shuffleName
}

export default utils;