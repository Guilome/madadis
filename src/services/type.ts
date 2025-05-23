export type ResponseProduct = {
   products: Product[],
   total: number,
   skip: number,
   limit: number
};

export type Product = {
   availabilityStatus: string,
   brand: string,
   category: string,
   description: string,
   dimensions: {width: number; height: number; depth: number},
   discountPercentage: number,
   id: string,
   images: string[],
   meta : {createdAt: Date; updatedAt: Date; barcode: string; qrCode: string},
   minimumOrderQuantity: number,
   price: number,
   rating: number,
   returnPolicy: string,
   reviews: Review[],
   shippingInformation: string,
   sku: string,
   stock: number,
   tags: string[]
   thumbnail: string,
   title: string,
   warrantyInformation: string,
   weight: number
};

export type Review = {
   comment: string,
   date: Date,
   rating: number,
   reviewerEmail: string,
   reviewerName: string
}