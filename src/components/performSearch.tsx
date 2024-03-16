import { Bowlsdata } from '../Data/BowlsData';
import { Cupdata } from '../Data/CupData';
import { Kitchenwaredata } from '../Data/KitchenwareData';
import { Platesdata } from '../Data/PlatesData';

export const performSearch = (query: string, data: any[]): any[] => {
  return data.filter((item: any) => item.title.toLowerCase().includes(query.toLowerCase()));
};

