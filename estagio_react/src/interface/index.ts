interface iGeo {
  lat: string;
  lng: string;
}
interface iAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: iGeo;
}
interface iCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface iUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: iAddress;
  phone: string;
  website: string;
  company: iCompany;
}
export interface iAlbums {
  userId: number;
  id: number;
  title: string;
}
export interface iPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
