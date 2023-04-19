/**
 * api list
 */
const ApiList = {
  Socket: null,
  SignIn: 'users/signin',
}

const dev = {
  BACKEND_URL: "http://192.168.114.37:3333/",
  IMAGE_URL: "http://192.168.114.37:3333/",
  ...ApiList
}

const production = {
  BACKEND_URL: "http://47.242.202.135/",
  IMAGE_URL: "http://47.242.202.135/",
  ...ApiList
}

export const ROOT = production