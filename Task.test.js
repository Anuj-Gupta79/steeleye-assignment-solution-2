const highlightHTMLContent = require("./Task.js");

test("Function Test", () => {
  const htmlContent = "<p><span>Apples and Bananas and Cherries</span></p>";
  const plainText = "Apples and Bananas and Cherries";
  const plainTextPositions = [
    {
      start: 0,
      end: 6,
    },
    {
      start: 11,
      end: 18,
    },
    {
      start: 23,
      end: 32,
    },
  ];

  const expectedHighlightedContent =
    "<p><span><mark>Apples</mark> and <mark>Bananas</mark> and <mark>Cherries</mark></span></p>";

  const highlightedContent = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
  );
  expect(highlightedContent).toBe(expectedHighlightedContent);
});
