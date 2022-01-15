export class ObjectHelpers {
  static getValue(object: object, propertyName: string) {
    const entries = new Map<string, any>(Object.entries(object));
    return entries.get(propertyName);
  }

  static getType(object: object, propertyName: string): string {
    return typeof this.getValue(object, propertyName);
  }
}
