import HttpMethods from '../httpMethods';

export type LinkRels = 'self' | 'refund' | 'up';

interface ILink {
    href: string;
    rel: LinkRels;
    method: HttpMethods;
}

export default ILink;
