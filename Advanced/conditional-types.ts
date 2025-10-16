type IsString<T> = T extends string ? "Yes, it's a string" : "No, not a string";

type Result1 = IsString<string>;

type Result2 = IsString<number>;

type Result3 = IsString<"hello">;