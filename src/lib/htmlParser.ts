import { JSDOM } from 'jsdom';

export class HtmlParser {
  public static parse(html: string): Document {
    return new JSDOM(html).window.document;
  }
}
