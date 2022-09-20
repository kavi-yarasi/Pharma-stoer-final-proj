import { Injectable } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginservService {

    
  user:any=false;
  login:any=false;

  vall= new FormGroup({

    v1:new FormControl(''),

    v2:new FormControl(''),

    v3: new FormControl(''),

    
    
       });
       values={
        v1:"",
        v2:"",
        v3:"",
        
        
       };
        
     labtests=[{"id":1,"test":"LFT"},{"id":2,"test":"Insulin"},{"id":1,"test":"Ferritin"},{"id":1,"test":"Potassiumserum Plasma"},{"id":1,"test":"Chloesterol"},{"id":1,"test":"Platelet count"}]  

  products=[ 
    {
        id: 1,
        flag:false,
        cnt:0,
        title: "Zincovit Tablet 15's",
        category: "Health and nutrition",
        price: 200,
        image: "https://newassets.apollo247.com/pub/media/catalog/product/c/_/c.jpg"
    },
    {
        id: 2,
        flag:false,
        cnt:0,
        title: "Inlife Vitamin D3 2000 IU, 60 Capsules",
        category: "Health and nutrition",
        price: 200,
        image: "https://newassets.apollo247.com/pub/media/catalog/product/i/n/inl0057-1.jpg"
    },    
      {
                id: 3,
                flag:false,
        cnt:0,
                title: "OZiva Women's Multi Fizzy Drink, 6 Sachets (6x4 gm)",
                category: "Women care",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/w/o/womens_1_1.jpg"
            },
            {
              id: 4,
              flag:false,
        cnt:0,
              title: "Sebamed Lip Defense Chapstick SPF 30 Lip Balm, 4.8 gm",
              category: "Personal care",
              price: 200,
              image: "https://newassets.apollo247.com/pub/media/catalog/product/s/e/seb0049_2.jpg"
          },
            {
                id: 5,
                flag:false,
        cnt:0,
                title: "Gynodex Syrup, 200 ml",
                category: "Women care",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/g/y/gyn0031_1.jpg"
            },
            {
                id: 6,
                flag:false,
        cnt:0,
                title: "Cureveda Women Elixir, 450 ml",
                category: "Women care",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/c/u/cur0243.jpg"
            },
            {
                id: 7,
                flag:false,
        cnt:0,
                title: "Cetaphil Gentle Skin Cleanser, 125 ml",
                category : "Women care",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/c/e/cet0336.jpg"
            },
            
            {
                id: 8,
                flag:false,
        cnt:0,
                title: "SteriAll Sanitizer Solution Spray, 500 ml",
                category: "Personal care",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/1/_/1_37_25.jpg"
            },
            {
                id: 9,
                flag:false,
        cnt:0,
                title: "dr.organic Virgin Coconut Oil Hand & Nail Cream, 100 ml",
                category: "Personal care",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/d/r/dro0184.jpg"
            },
            {
                id: 10,
                flag:false,
        cnt:0,
                title: "Kaya Youth Oxy-Infusion Face Wipes, 30 Count",
                category: "Personal care",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/k/a/kay0059.jpg"
            },
            {
                id: 11,
                flag:false,
        cnt:0,
                title: "Dermadew Baby Soap, 75 gm",
                category: "Newborn care",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/d/e/der0324_1.jpg"
            },
            {
                id: 12,
                flag:false,
        cnt:0,
                title: "Cetaphil Baby Daily lotion, 400 ml",
                category: "Newborn care",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/c/e/cet0347_1.jpg"
            },
            {
                id: 13,
                flag:false,
        cnt:0,
                title: "Himalaya Gentle Baby Shampoo, 100 ml",
                category: "Newborn care",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/h/i/him0006_1.jpg"
            },
            {
                id: 14,
                flag:false,
        cnt:0,
                title: "Woodwards Gripe Water, 200 ml",
                category: "Newborn care",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/w/o/woo0001-3_1.jpg"
            },
            {
                id: 15,
                flag:false,
        cnt:0,
                title: "ORSL Apple Drink 200 ml",
                category: "Health and nutrition",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/8/9/8901012350010_apple_3.jpg"
            },
            {
                id: 16,
                flag:false,
                cnt:0,
                title: "Healthvit Organic Apple Cider Vinegar,500 ml",
                category: "Health and nutrition",
                price: 200,
                image: "https://newassets.apollo247.com/pub/media/catalog/product/h/e/hea0480_1.jpg"
            }
        ];
           
  constructor() { }
}
