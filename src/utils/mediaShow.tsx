export const imageShow = (src: string) => {
  return <img alt="images" src={src} />;
};

export const videoShow = (src: string) => {
  return <video controls src={src} />;
};
