/**
 * 注意这个类型直接接受合法的URL
 * @param url 接受一个合法URL
 * @returns
 */
export default function operateURL(url: any) {
  const isValidURL = new URL(url);

  if (!isValidURL) {
    throw new Error('Invalid URL');
  }

  const searchURL = new URLSearchParams(url);

  return searchURL;
}
