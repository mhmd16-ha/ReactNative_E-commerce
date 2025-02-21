export interface productType{
  
      "id": string,
      "title": string,
      "price": string,
      "description": string,
      "category": string,
      "image": string,
      "rating": {
        "rate": number,
        "count": number
      },
      quantity:number,
      sumPrice:number
}