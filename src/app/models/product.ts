export class Product {
    id?:string;
    productName:string;
    // picture:String;
    price:number;
    numberStock:number;
    category:any;
    brand:any;
    size:any;
    fabrics: any;

    constructor (paramProductName:string,paramPrice:number,paramFabrics:string,
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
