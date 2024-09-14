function checkType<R>(value: unknown, condition: boolean): value is R {
  if (condition) {
    return true;
  }

  return false;
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

function isId(value: unknown): value is number | string {
  return isNumber(value) || isString(value);
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function isArray(value: unknown): value is unknown[] {
  return Boolean(value && Array.isArray(value));
}

function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}

function isNull(value: unknown): value is null {
  return value === null;
}

function isNullable(value: unknown): value is null | undefined {
  return typeof value === "undefined" || value === null;
}

export const typings = {
  checkType,
  isString,
  isNumber,
  isId,
  isArray,
  isObject,
  isBoolean,
  isNull,
  isUndefined,
  isNullable,
};
