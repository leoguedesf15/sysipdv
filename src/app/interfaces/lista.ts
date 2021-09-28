export interface Lista <T> {
    keysToShow:string[],
    dataPrimaryKey:string,
    actionRoute:string,
    headers:string[],
    data: T []
}
