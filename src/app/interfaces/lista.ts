export interface Lista <T> {
    title:string,
    keysToShow:string[],
    dataPrimaryKey:string,
    actionRoute:string,
    headers:string[],
    data: T []
}
