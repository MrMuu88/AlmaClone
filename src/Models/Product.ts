interface Product {
    id: number;
    image: string;
    name: string;
    unitPrice: string;
    fullPrice: string;
    salePrice: string | null;
    appPrice: string | null;
    discount: string | null;
    appDiscount: string | null;
    couponDiscount: string | null;
    salePeriod: string;
    category: string;
    packaging: string;
    ingredient: string | null;
    formula: string;
    manufacturer: string;
    address: string;
    comment: string;
    warning: string;
  }