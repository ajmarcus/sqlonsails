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

const ONE_CHAR_TOKENS = new Map<string, string>([
    [",", "COMMA"],
    [";", "SEMI"],
    ["(", "LPAREN"],
    [")", "RPAREN"],
    ["*", "STAR"],
    ["+", "PLUS"],
    ["-", "MINUS"],
    ["/", "SLASH"],
    ["<", "LT"],
    [">", "GT"],
    ["=", "EQ"],
]);

function tokenize(input: string): string[] {
    const result = [];
    const inputTokens = input.toUpperCase().split(/\s+/);
    for (const t of inputTokens) {
        if (tokens.has(t)) {
            result.push(`TKN<${t}>`);
        } else {
            // look for one character tokens
            let remaining = [];
            for (const c of t) {
                if (ONE_CHAR_TOKENS.has(c)) {
                    result.push(`VAL<${remaining.join("")}>`);
                    remaining = [];
                    result.push(`TKN<${ONE_CHAR_TOKENS.get(c)}>`);
                } else {
                    remaining.push(c);
                }
            }
            if (remaining.length > 0) {
                result.push(`VAL<${remaining.join("")}>`);
            }
        }
    }
    return result;
}

function parse(input: string): string[] {
    return tokenize(input);
}

export { parse };
