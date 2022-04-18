export type SlideItemType = {
  image: string;
  name: string;
  slug: string;
  places?: [] | PlaceType[] | any[] | undefined;
  [x: string]: any;
};

export type RegionType = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  places: [] | PlaceType[] | any[];
  [x: string]: any;
};

export type CategoryType = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  places: [] | PlaceType[] | any[];
  [x: string]: any;
};

export type PurposeType = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  places: [] | PlaceType[] | any[];
  [x: string]: any;
};

export type TagType = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  places: [] | PlaceType[] | any[];
  [x: string]: any;
};

export type BenefitType = {
  _id: string;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  places: [] | PlaceType[] | any[];
  [x: string]: any;
};

export type PlaceType = {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
  images: [] | any[];
  description?: string;
  address: string;
  location: {
    lat: Number;
    lng: Number;
  };
  categories: [] | CategoryType[] | any[];
  benefits: [] | BenefitType[] | any[];
  tags: [] | TagType[] | any[];
  purposes: [] | PurposeType[] | any[];
  region: string;
  [x: string]: any;
};
