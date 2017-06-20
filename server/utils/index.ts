export function objectToMap<T>(object: any) {
  if (!object) {
    return undefined;
  }
  const map = new Map<string, T>();
  for (const key of Object.keys(object)) {
    map.set(key, object[key]);
  }
  return map;
}

export function mapToObject<T>(map: Map<string, T>): {[key: string]: T} {
  if (!map) {
    return {};
  }
  const object: {[key: string]: T} = {};
  map.forEach((value: T, key: string) => {
    object[key] = value;
  });
  return object;
}

export function mapFromCollection(collection: any[], keyName: string): Map<string, any> {
  const map = new Map<string, any>();
  for (const item of collection) {
    map.set(item[keyName], item);
  }
  return map;
}

export function camelCaseToTitle(str: string) {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
}

export function curry<ARG1, ARG2, RESULT>(
  func: (arg1: ARG1, arg2: ARG2) => RESULT,
): (arg1: ARG1) => (arg2: ARG2) => RESULT {
  return (arg1: ARG1) => {
    return (arg2: ARG2) => {
      return func(arg1, arg2);
    };
  };
}

export function encodeQueryData(data: { [key: string]: any }) {
  const ret = [];
  for (const d in data) {
    if (!data[d]) continue;
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  }
  return '?' + ret.join('&');
}