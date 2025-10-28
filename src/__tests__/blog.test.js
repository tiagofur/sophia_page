import { describe, it, expect } from "vitest";

describe("Blog functionality", () => {
  it("should filter posts by category", () => {
    // Test category filtering logic
    const posts = [
      { data: { category: "estoicismo", title: "Test 1" } },
      { data: { category: "budismo", title: "Test 2" } },
      { data: { category: "estoicismo", title: "Test 3" } },
    ];

    const estoicismoPosts = posts.filter(
      (post) => post.data.category === "estoicismo"
    );
    expect(estoicismoPosts).toHaveLength(2);
    expect(estoicismoPosts[0].data.title).toBe("Test 1");
  });

  it("should search posts by title and description", () => {
    const posts = [
      {
        data: {
          title: "Estoicismo Moderno",
          description: "Aprende estoicismo",
        },
      },
      { data: { title: "Budismo Digital", description: "Mindfulness online" } },
    ];

    const searchResults = posts.filter(
      (post) =>
        post.data.title.toLowerCase().includes("estoicismo") ||
        post.data.description.toLowerCase().includes("estoicismo")
    );

    expect(searchResults).toHaveLength(1);
    expect(searchResults[0].data.title).toBe("Estoicismo Moderno");
  });

  it("should filter posts by tags", () => {
    const posts = [
      { data: { tags: ["estoicismo", "filosofia"] } },
      { data: { tags: ["budismo", "mindfulness"] } },
    ];

    const estoicismoPosts = posts.filter((post) =>
      post.data.tags?.includes("estoicismo")
    );

    expect(estoicismoPosts).toHaveLength(1);
  });
});
