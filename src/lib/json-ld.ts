/** Serialize structured data without allowing a raw closing script tag in the document. */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
