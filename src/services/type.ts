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
};

export type Detail = {
   tags: string[],
   weight: number,
   dimensions: Dimensions,
   warrantyInformation: string,
   shippingInformation: string,
   availabilityStatus: string,
   returnPolicy: string,
   minimumOrderQuantity: number,
   meta: Meta,
   thumbnail: any,
};

export type Dimensions = {
   width: number,
   height: number,
   depth: number
};

export type Meta = {
   createdAt: Date,
   updatedAt: Date,
   barcode: string,
   qrCode: any
};

export type CartItem = Product & { quantity: number };

export type CartContext = {
   cart: CartItem[],
   addToCart: (product: Product, quantity: number) => void,
   removeFromCart: (productId: string) => void,
   clearCart: () => void,
   total: number
};

export type ImageGalerie = {
   id: number,
   src: string,
   alt: string
}