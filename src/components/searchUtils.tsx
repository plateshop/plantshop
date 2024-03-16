// searchUtils.ts

export const performSearch = (searchTerm: string, cupData: any[], bowlsData: any[]) => {
    const cupResults = cupData.filter(item => item.title.includes(searchTerm));
    const bowlsResults = bowlsData.filter(item => item.title.includes(searchTerm));
    return [...cupResults, ...bowlsResults];
  };
  