export class Product {
    id?:String;
    productName:String;
    // picture:String;
    price:number;
    fabrics:string;
    numberStock:number;
    category:any;
    brand:any;
    size:any;

    constructor (paramProductName:String,paramPrice:number,paramFabrics:string,
                  paramNumberStock:number,paramCategories:any, paramBrands:any, paramSizes:any){
        this.productName = paramProductName;
        this.price = paramPrice;
        this.fabrics= paramFabrics;
        this.numberStock = paramNumberStock;
        this.category = paramCategories;
        this.brand= paramBrands;
        this.size = paramSizes;
    }
}
