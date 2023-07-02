type a = '1';
export = darwish;
export as namespace darwish;
declare namespace darwish {
  type searchurl = df.url;
  function operateurl(url: searchurl): URLSearchParams;
}
declare namespace df {
    type url = string | URLSearchParams | string[][] | Record<string, string> | undefined;
}