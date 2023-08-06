const highlightHTMLContent = require("./Task.js");

// #Test 1
test("highlightHTMLContent should work correctly", () => {
  const htmlContent =
    '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>';

  const plainText =
    "Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------";

  const plainTextPositions = [
    {
      start: 241,
      end: 247,
    },
    {
      start: 518,
      end: 525,
    },
  ];

  const expectedResult =
    '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility <mark>Equity</mark> scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | <mark>Privacy</mark> Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>';

  const result = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
  );
  expect(result).toBe(expectedResult);
});

// #Test 2
test("highlightHTMLContent function should handle the multiple positions correctly", () => {
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

  const expectedResult =
    "<p><span><mark>Apples</mark> and <mark>Bananas</mark> and <mark>Cherries</mark></span></p>";

  const result = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
  );
  expect(result).toBe(expectedResult);
});

// #Test 3
test("highlightHTMLContest should work correctly if plainTextPositions is empty", () => {
  const htmlContent = "<p><span>Apples and Bananas and Cherries</span></p>";
  const plainText = "Apples and Bananas and Cherries";
  const plainTextPositions = [];

  const expectedResult = htmlContent;

  const result = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
  );

  expect(result).toBe(expectedResult);
});

// #Test 4
test("highlightHTMLContest should work correctly if plain text is empty", () => {
  const htmlContent = "<p><span>Apples and Bananas and Cherries</span></p>";
  const plainText = "";
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

  const expectedResult = htmlContent;

  const result = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
  );

  expect(result).toBe(expectedResult);
});

// #Test 5
test("highlightHTMLContest should work correctly if htmlContent is empty", () => {
  const htmlContent = "";
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

  const expectedResult = htmlContent;

  const result = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
  );

  expect(result).toBe(expectedResult);
});

// #Test 6
test("highlightHTMLContent function should give the message. If type of htmlContent is not string", () => {
  const htmlContent = 1;
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

  const expectedResult = "Type of html content is invalid :(";

  const result = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
  );
  expect(result).toBe(expectedResult);
});

// #Test 7
test("highlightHTMLContent function should give the message. If type of plainText is not string", () => {
  const htmlContent = "<p><span>Apples and Bananas and Cherries</span></p>";
  const plainText = 9;
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

  const expectedResult = "Type of plain text is invalid :(";

  const result = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
  );
  expect(result).toBe(expectedResult);
});

// #Test 8
test("highlightHTMLContent function should give the message. If type of plainTextPositions is not array", () => {
  const htmlContent = "<p><span>Apples and Bananas and Cherries</span></p>";
  const plainText = "Apples and Bananas and Cherries";
  const plainTextPositions = 10;

  const expectedResult = "Type of plainTextPositions is invalid :(";

  const result = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
  );
  expect(result).toBe(expectedResult);
});

// # Test 9
test("highlightHTMLContent function should work correctly, if word in plain text is not found in highlightHTMLContent", () => {
  const htmlContent = "<p><span>Apples and Bananas and Cherries</span></p>";
  const plainText = "DEMO TEXT";
  const plainTextPositions = [
    {
      start: 0,
      end: 5,
    },
  ];

  const expectedResult = htmlContent;

  const result = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
  );
  expect(result).toBe(expectedResult);
});
