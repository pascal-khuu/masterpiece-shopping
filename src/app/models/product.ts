export class Product {
    id?:string;
    productName:string;
    pictureUrl:String;
    price:number;
    numberStock:number;
    category:any;
    brand:any;
    size:any;
    fabric: any;

    constructor (paramProductName:string,paramPictureUrl:string,paramPrice:number,paramFabric:string,
                  paramNumberStock:number,paramCategories:any, paramBrands:any, paramSizes:any){
        this.productName = paramProductName;
        this.pictureUrl=paramPictureUrl;
        this.price = paramPrice;
        this.fabric= paramFabric;
        this.numberStock = paramNumberStock;
        this.category = paramCategories;
        this.brand= paramBrands;
        this.size = paramSizes;
    }
}
