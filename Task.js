// <==== Problem Statement ====>
// You are required to write a pure JavaScript function called highlightHTMLContent that accepts three inputs and returns the expected result. Please follow the instructions below:

/**
# Input
The highlightHTMLContent function should accept the following inputs:

* @param {string} htmlContent : The HTML content that needs to be highlighted.
* @param {string} plainText : The plain text extracted from htmlContent.
* @param {array} plainTextPositions : An array of objects representing the start and end positions of words in plainText. Each object in the array should have the properties start and end.

# Output
* @result {string}
The function should find the appropriate positions in htmlContent based on the positions in plainText, highlight the content at those positions, and return the modified htmlContent as a string.
*/

function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  // check the type of htmlContent. If the htmlContent is not of string type, we cannot continue.
  if (typeof htmlContent !== "string") {
    return "Type of html content is invalid :(";
  }

  // check the type of plainText. If plainText is not of string type, we cannot continue.
  if (typeof plainText !== "string") {
    return "Type of plain text is invalid :(";
  }

  // check the type of plainTextPosition. If plainTextPositions is not of object(array) type, we cannot continue.
  if (typeof plainTextPositions !== "object") {
    return "Type of plainTextPositions is invalid :(";
  }

  // htmlContent can't be empty
  if (htmlContent.length === 0) {
    return "htmlContent is empty :(";
  }

  // plainText can't be empty
  if (plainText.length === 0) {
    return "plainText is empty :(";
  }

  // plainTextPositions can't be empty
  if (plainTextPositions.length === 0) {
    return "Positions for the plain text is not given :(";
  }

  const startTag = "<mark>";
  const endTag = "</mark>";
  for (const position of plainTextPositions) {
    if (typeof position !== "object") {
      return "Invalid position :(";
    }

    const startIndex = position.start;
    const endIndex = position.end;

    if (typeof startIndex !== "number" || typeof endIndex !== "number") {
      return "Invalid position :(";
    }

    const word = plainText.slice(startIndex, endIndex);
    const wordStartIndex = htmlContent.indexOf(word);
    const wordEndIndex = wordStartIndex + word.length;

    htmlContent =
      htmlContent.slice(0, wordStartIndex) +
      startTag +
      htmlContent.slice(wordStartIndex, wordEndIndex) +
      endTag +
      htmlContent.slice(wordEndIndex);
  }

  return htmlContent;
}

// # Input for test
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

const result = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
console.log(result);
