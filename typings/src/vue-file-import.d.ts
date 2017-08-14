// import Vue from 'vue'


declare module '*.vue' {
    class V{
        constructor(options:any)
        [index:string]:any
    }
    export = V;
}
