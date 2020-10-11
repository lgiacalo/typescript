interface Options{
    ease?: string,
    duration?: number
}

declare module 'scroll-to'{
    
    function scrollTo (x: number, y: number, option?: Options);
    export default scrollTo;
}