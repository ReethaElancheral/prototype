

import pamper1 from "../../assets/images/pamper1.png";
import pamper2 from "../../assets/images/pamper2.png";
import pamper3 from "../../assets/images/pamper3.png";
import pamper4 from "../../assets/images/pamper4.png";
import pamper5 from "../../assets/images/pamper5.png";
import pamper6 from "../../assets/images/pamper6.png";
import boydress1 from "../../assets/images/homemama.png";
import boydress2 from "../../assets/images/boydress2.png";
import boydress3 from "../../assets/images/boydress3.png";
import boydress4 from "../../assets/images/boydress4.png";
import boydress5 from "../../assets/images/boydress5.png";
import boydress6 from "../../assets/images/boydress6.png";
import girldress1 from "../../assets/images/girldress1.png";
import girldress2 from "../../assets/images/homefeature2.png";
import girldress3 from "../../assets/images/girldress3.png";
import girldress4 from "../../assets/images/girldress4.png";
import girldress5 from "../../assets/images/girldress5.png";
import girldress6 from "../../assets/images/girldress6.png";
import soap1 from "../../assets/images/soap1.png";
import soap2 from "../../assets/images/soap2.png";
import soap3 from "../../assets/images/soap3.png";
import soap4 from "../../assets/images/soap4.png";
import soap5 from "../../assets/images/homefeature3.png";
import soap6 from "../../assets/images/soap6.png";
import stroller1 from "../../assets/images/stroller1.png";
import stroller2 from "../../assets/images/stroller2.png";
import stroller3 from "../../assets/images/stroller3.png";
import stroller4 from "../../assets/images/stroller4.png";
import stroller5 from "../../assets/images/stroller5.png";
import stroller6 from "../../assets/images/stroller6.png";
import bottle1 from "../../assets/images/bottle1.png";
import bottle2 from "../../assets/images/bottle2.png";
import bottle3 from "../../assets/images/bottle3.png";
import bottle4 from "../../assets/images/bottle4.PNG";
import bottle5 from "../../assets/images/bottle5.png";
import bottle6 from "../../assets/images/bottle6.png";

import pamperthumb1 from "../../assets/images/pamperthumb1.PNG";
import pamperthumb2 from "../../assets/images/pamperthumb2.PNG";
import pamperthumb3 from "../../assets/images/pamperthumb3.PNG";
import pamperthumb4 from "../../assets/images/pamperthumb4.PNG";
import pampermain from "../../assets/images/pampermain.PNG";

const allProducts = [
 
  {
    id: 6,
    category: "Pampers",
    shortName: "Diaper Combo - Pack of 5",
    name: "Diaper Combo",
    price: 1300,
    MRP: 1850,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [pamper6, pamperthumb2, pamperthumb3, pamperthumb4],
    image: pamper6,
    mainImage: pampermain,
    description:
      "Give your baby the gentle care they deserve with EarthBubs Premium Baby Pampers, designed for all day comfort and protection. Crafted with ultra soft, breathable materials, these diapers keep your little ones dry, happy and rash free. The super-absorbent core locks in moisture upto 12-hours of a leak protection, a built-in wetness indicator makes changing time easier than ever.",
  },
  
 {
    id: 12,
    category: "boys-fashion",
    shortName: "Marcus",
    name: "Marcus",
    price: 1199,
    MRP: 1466,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [boydress6, boydress2, boydress3, boydress4
    ],
    image: boydress6,
    mainImage: boydress6,
    description:
     "This adorable baby boy dress is crafted from ultra-soft, breathable cotton to keep your little one comfortable all day long. Designed with charming prints and gentle stitching, it's perfect for both everyday wear and special occasions. The easy snap-button closure allows quick dressing and diaper changes, making it as practical as it is cute. Whether you're heading out for a family outing or just relaxing at home, this outfit ensures your baby looks stylish while staying cozy. A must-have addition to any baby wardrobe, and a thoughtful gift for new parents.",
  },
   
  {
    id: 13,
    category: "girls-fashion",
    shortName: "Halemon's Floral",
    name: "Halemon's Floral",
    price: 1399,
    MRP: 1466,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
      girldress1,
     girldress2,
      girldress3,
    girldress4,
    ],
    image: girldress1,
    mainImage: girldress1,
    description:
      "This sweet and stylish baby girl dress is made from soft, breathable cotton that’s gentle on delicate skin. Featuring adorable patterns, ruffled sleeves, and a comfortable fit, it’s perfect for everything from playtime to parties. The lightweight fabric keeps your little one cool and happy, while the back buttons or snaps ensure quick and easy changes. Whether it’s a sunny day outing or a family gathering, this dress adds a touch of charm to every moment. A beautiful and practical addition to any baby girl's wardrobe.",
  },
 
  
  
   {
    id: 21,
    category: "soap",
    shortName: "Natural Soap",
    name: "Natural Soap",
    price: 599,
    MRP: 600,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
      soap6,
      soap2,
      soap3,
      soap4,
    ],
    image: soap3,
    mainImage: soap3,
    description:
      "This gentle baby soap is specially formulated to cleanse your baby’s delicate skin without causing dryness or irritation. Enriched with natural ingredients like aloe vera and shea butter, it provides deep nourishment while maintaining the skin’s natural moisture balance. The mild, tear-free formula lathers softly and rinses easily, making bath time a soothing and enjoyable experience. Free from harsh chemicals, parabens, and artificial fragrances, this soap is safe for daily use—even on newborns. Keep your baby's skin soft, smooth, and healthy with this trusted skincare essential.",
  },
   
  

  
    {
    id: 27,
    category: "stroller",
    shortName: "Lavern",
    name: "Lavern",
    price: 9399,
    MRP: 10466,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
      stroller3,
      stroller2,
      stroller3,
      stroller4,
    ],
    image: stroller3,
    mainImage: stroller3,
    description:
      "This lightweight and durable baby stroller is designed to make every outing smooth and comfortable for both baby and parent. With a reclining seat, adjustable canopy, and secure harness system, it ensures your little one stays safe and cozy during walks or travel. The stroller features a compact fold mechanism for easy storage and portability, making it perfect for families on the go. Spacious storage underneath allows you to carry baby essentials effortlessly. Whether you're navigating city streets or parks, this stroller combines style, safety, and convenience in one smart design..",
  },
   
    {
    id: 45,
    category: "stroller",
    shortName: "Baby Stroller",
    name: " Baby Stroller",
    price: 4399,
    MRP: 5466,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
      stroller4,
      stroller2,
      stroller3,
      stroller6,
    ],
    image: stroller4,
    mainImage: stroller4,
    description:
      "This lightweight and durable baby stroller is designed to make every outing smooth and comfortable for both baby and parent. With a reclining seat, adjustable canopy, and secure harness system, it ensures your little one stays safe and cozy during walks or travel. The stroller features a compact fold mechanism for easy storage and portability, making it perfect for families on the go. Spacious storage underneath allows you to carry baby essentials effortlessly. Whether you're navigating city streets or parks, this stroller combines style, safety, and convenience in one smart design..",
  },
    {
    id: 46,
    category: "stroller",
    shortName: "stroller",
    name: "Twin Baby",
    price: 4399,
    MRP: 5466,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
      stroller5,
      stroller2,
      stroller3,
      stroller4,
    ],
    image: stroller5,
    mainImage: stroller5,
    description:
      "This lightweight and durable baby stroller is designed to make every outing smooth and comfortable for both baby and parent. With a reclining seat, adjustable canopy, and secure harness system, it ensures your little one stays safe and cozy during walks or travel. The stroller features a compact fold mechanism for easy storage and portability, making it perfect for families on the go. Spacious storage underneath allows you to carry baby essentials effortlessly. Whether you're navigating city streets or parks, this stroller combines style, safety, and convenience in one smart design..",
  },

 
    {
    id: 33,
    category: "bottle",
    shortName: "Philips",
    name: "Philips",
    price: 599,
    MRP: 600,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
     bottle3,bottle6,bottle3,bottle4
    ],
    image: bottle3,
    mainImage: bottle3,
    description:
      "This baby feeding bottle is thoughtfully designed to provide a natural and comfortable feeding experience for your little one. Made from BPA-free, food-grade materials, it ensures safety and hygiene with every use. The soft, anti-colic nipple mimics the feel of breastfeeding, reducing gas and fussiness. Its ergonomic shape makes it easy for both parents and babies to hold, while the wide neck design allows for quick filling and easy cleaning. Ideal for both newborns and growing infants, this bottle is a reliable companion for every feeding time..",
  },
   
   
  {
    id: 37,
    category: "Pampers",
    shortName: "Diaper Pants",
    name: "Diaper Pants",
    price: 680,
    MRP: 800,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [pamper3, pamperthumb2, pamperthumb3, pamperthumb4],
    image: pamper3,
    mainImage: pampermain,
    description:
    "Give your baby the gentle care they deserve with EarthBubs Premium Baby Pampers, designed for all day comfort and protection. Crafted with ultra soft, breathable materials, these diapers keep your little ones dry, happy and rash free. The super-absorbent core locks in moisture upto 12-hours of a leak protection, a built-in wetness indicator makes changing time easier than ever.",
  },
  {
    id: 38,
    category: "Pampers",
    shortName: "Diaper Pants",
    name: "Diaper Pants",
    price: 680,
    MRP: 800,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [pamper4, pamperthumb2, pamperthumb3, pamperthumb4],
    image: pamper4,
    mainImage: pampermain,
    description:
      "Give your baby the gentle care they deserve with EarthBubs Premium Baby Pampers, designed for all day comfort and protection. Crafted with ultra soft, breathable materials, these diapers keep your little ones dry, happy and rash free. The super-absorbent core locks in moisture upto 12-hours of a leak protection, a built-in wetness indicator makes changing time easier than ever.",
  },
  {
    id: 41,
    category: "girls-fashion",
    shortName: "Halemon's Floral",
    name: "Halemon's Floral",
    price: 1399,
    MRP: 1466,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
      girldress4,
     girldress2,
      girldress3,
    girldress6,
    ],
    image: girldress4,
    mainImage: girldress4,
    description:
      "This sweet and stylish baby girl dress is made from soft, breathable cotton that’s gentle on delicate skin. Featuring adorable patterns, ruffled sleeves, and a comfortable fit, it’s perfect for everything from playtime to parties. The lightweight fabric keeps your little one cool and happy, while the back buttons or snaps ensure quick and easy changes. Whether it’s a sunny day outing or a family gathering, this dress adds a touch of charm to every moment. A beautiful and practical addition to any baby girl's wardrobe.",
  },
  {
    id: 42,
    category: "girls-fashion",
    shortName: "Poppes",
    name: "Poppes",
    price: 1399,
    MRP: 1466,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
      girldress5,
     girldress2,
      girldress3,
    girldress4,
    ],
    image: girldress5,
    mainImage: girldress5,
    description:
      "This sweet and stylish baby girl dress is made from soft, breathable cotton that’s gentle on delicate skin. Featuring adorable patterns, ruffled sleeves, and a comfortable fit, it’s perfect for everything from playtime to parties. The lightweight fabric keeps your little one cool and happy, while the back buttons or snaps ensure quick and easy changes. Whether it’s a sunny day outing or a family gathering, this dress adds a touch of charm to every moment. A beautiful and practical addition to any baby girl's wardrobe.",
  },
  {
    id: 39,
    category: "boys-fashion",
    shortName: "Saphis",
    name: "Saphis",
    price: 3199,
    MRP: 3600,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [boydress5, boydress2, boydress3, boydress4
    ],
    image: boydress5,
    mainImage: boydress5,
    description:
     "This adorable baby boy dress is crafted from ultra-soft, breathable cotton to keep your little one comfortable all day long. Designed with charming prints and gentle stitching, it's perfect for both everyday wear and special occasions. The easy snap-button closure allows quick dressing and diaper changes, making it as practical as it is cute. Whether you're heading out for a family outing or just relaxing at home, this outfit ensures your baby looks stylish while staying cozy. A must-have addition to any baby wardrobe, and a thoughtful gift for new parents.",
  },
   {
    id: 40,
    category: "boys-fashion",
    shortName: "Arcus",
    name: "Arcus",
    price: 3199,
    MRP: 3600,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [boydress4, boydress2, boydress3, boydress4
    ],
    image: boydress4,
    mainImage: boydress4,
    description:
     "This adorable baby boy dress is crafted from ultra-soft, breathable cotton to keep your little one comfortable all day long. Designed with charming prints and gentle stitching, it's perfect for both everyday wear and special occasions. The easy snap-button closure allows quick dressing and diaper changes, making it as practical as it is cute. Whether you're heading out for a family outing or just relaxing at home, this outfit ensures your baby looks stylish while staying cozy. A must-have addition to any baby wardrobe, and a thoughtful gift for new parents.",
  },
   {
    id: 43,
    category: "soap",
    shortName: "soap",
    name: "Gentle Baby Soap",
    price: 380,
    MRP: 466,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
      soap5,
      soap2,
      soap3,
      soap4,
    ],
    image: soap4,
    mainImage: soap4,
    description:
      "This gentle baby soap is specially formulated to cleanse your baby’s delicate skin without causing dryness or irritation. Enriched with natural ingredients like aloe vera and shea butter, it provides deep nourishment while maintaining the skin’s natural moisture balance. The mild, tear-free formula lathers softly and rinses easily, making bath time a soothing and enjoyable experience. Free from harsh chemicals, parabens, and artificial fragrances, this soap is safe for daily use—even on newborns. Keep your baby's skin soft, smooth, and healthy with this trusted skincare essential.",
  },
   {
    id: 44,
    category: "soap",
    shortName: "soap",
    name: "Gentle Baby Soap",
    price: 380,
    MRP: 466,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
      soap5,
      soap2,
      soap3,
      soap4,
    ],
    image: soap5,
    mainImage: soap5,
    description:
      "This gentle baby soap is specially formulated to cleanse your baby’s delicate skin without causing dryness or irritation. Enriched with natural ingredients like aloe vera and shea butter, it provides deep nourishment while maintaining the skin’s natural moisture balance. The mild, tear-free formula lathers softly and rinses easily, making bath time a soothing and enjoyable experience. Free from harsh chemicals, parabens, and artificial fragrances, this soap is safe for daily use—even on newborns. Keep your baby's skin soft, smooth, and healthy with this trusted skincare essential.",
  },
 {
    id: 47,
    category: "bottle",
    shortName: "Aveto",
    name: "Aveto",
    price: 399,
    MRP: 466,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
     bottle4,bottle2,bottle3,bottle4
    ],
    image: bottle4,
    mainImage: bottle4,
    description:
      "This baby feeding bottle is thoughtfully designed to provide a natural and comfortable feeding experience for your little one. Made from BPA-free, food-grade materials, it ensures safety and hygiene with every use. The soft, anti-colic nipple mimics the feel of breastfeeding, reducing gas and fussiness. Its ergonomic shape makes it easy for both parents and babies to hold, while the wide neck design allows for quick filling and easy cleaning. Ideal for both newborns and growing infants, this bottle is a reliable companion for every feeding time..",
  },
    {
    id: 48,
    category: "bottle",
    shortName: "Chicco bottle",
    name: "Chicco Bottle",
    price: 429,
    MRP: 466,
    inStock: true,
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colours: ["pink", "blue"],
    size: "Free Size",
    shipping: "Free Delivery",
    returnPolicy: "7 Days Return",
    freeShipping: true, // or false
    coupon: "Coupon: EB55",
    discount: 10,
    images: [
     bottle5,bottle2,bottle3,bottle4
    ],
    image: bottle5,
    mainImage: bottle5,
    description:
      "This baby feeding bottle is thoughtfully designed to provide a natural and comfortable feeding experience for your little one. Made from BPA-free, food-grade materials, it ensures safety and hygiene with every use. The soft, anti-colic nipple mimics the feel of breastfeeding, reducing gas and fussiness. Its ergonomic shape makes it easy for both parents and babies to hold, while the wide neck design allows for quick filling and easy cleaning. Ideal for both newborns and growing infants, this bottle is a reliable companion for every feeding time..",
  },
];

export default allProducts;
