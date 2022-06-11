export const EditData = (data: any, id: any, post: any) => {
  const newDate = data.map((item: any) => (item._id === id ? post : item));
  return newDate;
};

export const DeleteData = (data: any, id: any) => {
  const newDate = data.filter((item: any) => item._id !== id);
  return newDate;
};
