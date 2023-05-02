export const getMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Hello!"})
    }, 2000)
  })
};