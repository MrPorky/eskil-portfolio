import { describe, expect, it } from "vite-plus/test";
import data from "./data.json";
import { CareerDatabaseSchema } from "./data-model";

describe("Data validation", () => {
  it("should validate the data structureagainst the schema", () => {
    const validationResult = CareerDatabaseSchema.safeParse(data);
    expect(validationResult.success).toBe(true);
  });
});
