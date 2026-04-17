function toCamelCase(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return obj;
  if (Array.isArray(obj)) return obj.map(item => toCamelCase(item));
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [
      key.replace(/_([a-z])/g, (_, c) => c.toUpperCase()),
      toCamelCase(val)
    ])
  );
}

module.exports = { toCamelCase };
