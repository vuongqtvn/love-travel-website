export type SlideItemType = {
  image: string;
  name: string;
  slug: string;
  places?: PlaceType[] | any;
  [x: string]: any;
};

export type RegionType = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  places: PlaceType[] | any;
  [x: string]: any;
};

export type CategoryType = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  places: PlaceType[] | any;
  [x: string]: any;
};

export type PurposeType = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  places: PlaceType[] | any;
  [x: string]: any;
};

export type TagType = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  places: PlaceType[] | any;
  [x: string]: any;
};

export type BenefitType = {
  _id: string;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  places: PlaceType[] | any;
  [x: string]: any;
};

export type PlaceType = {
  _id: string;
  name: string;
  slug: string;
  thumbnail: any;
  images: any[];
  description?: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  categories: CategoryType[] | any;
  benefits: BenefitType[] | any;
  tags: TagType[] | any;
  purposes: PurposeType[] | any;
  region: any;
  [x: string]: any;
};

export type SearchArrayType =
  | CategoryType[]
  | BenefitType[]
  | TagType[]
  | RegionType[]
  | PurposeType[];

export interface IReview {
  comments: any;
  content: string;
  createdAt: string;
  images: any;
  likes: any;
  place: any;
  rateAvg: number;
  rateDrink: number;
  ratePosition: number;
  ratePrice: number;
  rateService: number;
  rateView: number;
  status: boolean;
  updatedAt: string;
  user: any;
  _id: string;
  [x: string]: any;
}
