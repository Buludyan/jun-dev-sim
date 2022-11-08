export const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export interface IGuard<TypeGuard> {
    _guard: TypeGuard;
}
