type TObj = Record<string, string>;

export const useFormatDataObj = () => {
  return <T extends keyof TObj>(data: Record<T, string>, formatCharacter: string, toTormatCharacter: string) => {
    let result = {} as Record<T, string>;

    for (const el in data) {
      if (data[el] === formatCharacter) {
        result[el] = toTormatCharacter;
      } else {
        result[el] = data[el];
      }
    }

    return result;
  };
};
