export const replaceImgWithName = (name: string): string =>
  name?.length === 1
    ? name[0].toUpperCase()
    : name
        ?.split(" ")
        .map((word) => word[0].toUpperCase())
        .join("");
