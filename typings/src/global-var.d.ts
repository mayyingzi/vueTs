
interface GlobalVar{
    APP_ENV:string,
    APP_NAME: string,
    API_VERSION: string,
    API_HOST: string,
    BAIDU_MAP_KEY:string,
    MALL_URL:string,
    IMG_SERVER: string,
    /**
     * 应用id
     */
    __utm_source: string,
    /**
     * 渠道id
     */
    __utm_channel: string,
    /**
     * 图形验证码
     */
    CODE_IMG_ADDRESS: string;
    /**
     * 个人中心图形验证码
     */
    DRAW_VERIFT_PIC:'string'
}
interface Hmt {
    push([]): void;
}

interface Window{
    GLOBAL_VAR:GlobalVar;
    _hmt: Hmt; 
}

declare var GLOBAL_VAR:GlobalVar;
declare var _hmt:Hmt


