import type {Detail, Product} from "./type.ts";

function setDetail(product: Product): Detail {

    return {
        tags: product.tags,
        weight : product.weight,
        dimensions : product.dimensions,
        warrantyInformation: product.warrantyInformation,
        shippingInformation: product.shippingInformation,
        availabilityStatus: product.availabilityStatus,
        returnPolicy: product.returnPolicy,
        minimumOrderQuantity: product.minimumOrderQuantity,
        meta : product.meta,
        thumbnail: product.thumbnail
    }
}

export default  setDetail;