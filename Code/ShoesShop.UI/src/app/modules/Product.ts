export class Product {
  id!: number;
  NameProduct!: string;
  Size!: number;
  Dongia!: number;
  SLTon!: number;
  details!: string;
  img!: string;
  constructor(id: number, name: string, size: number, Dongia: number,SLTon: number, details: string, img: string){
    this.id = id;
    this.NameProduct = name;
    this.Size = size;
    this.Dongia = Dongia;
    this.SLTon = SLTon;
    this.details = details;
    this.img = img;
  }
}
