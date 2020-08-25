import { HttpResponse } from '@angular/common/http';
export function parseLinkHeader(header) {
  if (header.length == 0) {
    return;
  }

  let parts = header.split(',');
  let links = {};
  parts.forEach((p) => {
    let section = p.split(';');
    let url = section[0].replace(/<(.*)>/, '$1').trim();
    let name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  });
  return links;
}

export function setPagesLinks(response: HttpResponse<any>) {
  const Link = parseLinkHeader(response.headers.get('Link'));

  if (Link) {
    return {
      pageFirst: Link['first'],
      pageLast: Link['last'],
      pagePrev: Link['prev'],
      pageNext: Link['next'],
    };
  }

  return null;
}

export function setLastPage(lastPageLink: string): number {
  let urlParts = lastPageLink.split('&');
  let params = urlParts[urlParts.length - 2].split('=');
  let lastPage: number = +params[1];

  return lastPage;
}
