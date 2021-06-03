type TObj = Record<string, string>;

export const useFormatDataObj = () => {
  return <T extends keyof TObj>(data: Record<T, string>, formatSymbol: string, toFormatSymbol: string) => {
    let result = {} as Record<T, string>;

    for (const el in data) {
      if (data[el] === formatSymbol) {
        result[el] = toFormatSymbol;
      } else {
        result[el] = data[el];
      }
    }

    return result;
  };
};
