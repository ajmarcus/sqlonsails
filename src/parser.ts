// https://github.com/sqlparser-rs/sqlparser-rs/blob/main/src/keywords.rs
// https://github.com/tobymao/sqlglot/blob/main/sqlglot/tokens.py
const tokens = new Set([
    "AND",
    "AS",
    "ASC",
    "BY",
    "CASE",
    "CROSS",
    "DESC",
    "ELSE",
    "END",
    "FALSE",
    "FROM",
    "FULL",
    "GROUP",
    "HAVING",
    "IN",
    "INNER",
    "JOIN",
    "LEFT",
    "LIMIT",
    "NULL",
    "ON",
    "ORDER",
    "OUTER",
    "RIGHT",
    "SELECT",
    "THEN",
    "TRUE",
    "USING",
    "WHEN",
    "WHERE",
    "WITH",
]);

function parse(input: string): string[] {
    var result = [];
    const inputTokens = input.toUpperCase().split(/\s+/);
    for (const t of inputTokens) {
        if (tokens.has(t)) {
            result.push(t);
        } else {
            result.push(`VAL<${t}>`);
        }
    }
    return result;
}

export { parse };
