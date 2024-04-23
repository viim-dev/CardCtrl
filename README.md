
# CardCtrl

CardCtrl is a web application that allows users to generate codes (ordinals), scan NFC cards, and write data to NFC cards. It is built using HTML, CSS, and JavaScript, and it utilizes the Web NFC API for NFC card interactions.

## Prerequisites

To run the CardCtrl application on Repl.it, you need the following:

-   A Repl.it account
-   A compatible device and browser that supports the Web NFC API (currently supported in Chrome on Android devices)

## Setup

1.  Create a new Repl on Repl.it and select "HTML, CSS, JS" as the language.
2.  Copy the following code into the `index.html` file:
    
    html
    
    Copy code
    
    `<!DOCTYPE  html> <html  lang="en"  data-theme="light"> <head>   <meta  charset="UTF-8"> <meta  name="viewport"  content="width=device-width, initial-scale=1.0"> <link  href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"  rel="stylesheet"> <link  href="https://cdn.jsdelivr.net/npm/daisyui@2.15.1/dist/full.css"  rel="stylesheet"> <script  src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js"  defer></script> <script  src="https://unpkg.com/htmx.org@1.6.0"></script> <title>CardCtrl</title> </head> <body>   <!-- Your HTML code here --> <script> function  cardCtrl()  { // Your JavaScript code here } </script> </body> </html>`
    
    Replace the `<!-- Your HTML code here -->` comment with the main HTML structure of the CardCtrl application, and replace the `// Your JavaScript code here` comment with the corresponding JavaScript code.
3.  Create a new file named `.replit` in your Repl and copy the following configuration:
    
    Copy code
    
    `language = "html" run = "bun --help" entrypoint = "index.html"   hidden = [".config"]   [web] port = 8000   [packager] language = "nodejs"   [packager.features] packageSearch = true guessImports = true   [languages.html] pattern = "**/*.html"   [languages.html.languageServer] start = [ "vscode-html-language-server", "--stdio" ]   [languages.html.languageServer.initializationOptions] provideFormatter = true   [languages.html.languageServer.configuration] html.format.enable = true html.format.wrapLineLength = 80 html.format.unformatted = "default" html.format.contentUnformatted = "default" html.format.indentInnerHtml = false html.format.preserveNewLines = true html.format.maxPreserveNewLines = null html.format.indentHandlebars = false html.format.endWithNewline = false html.format.extraLiners = "default" html.format.wrapAttributes = "auto" html.format.templating = false html.format.unformattedContentDelimiter = "" html.validate.scripts = true html.validate.styles = true html.autoCreateQuotes = true html.autoClosingTags = true html.hover.documentation = true html.hover.references = true html.suggest.html5 = true   [nix] channel = "stable-22_11"   [deployment] run = ["bun", "run", "index.html"]`
    
    This configuration sets up the Repl to use Bun as the runtime and specifies the necessary settings for running the CardCtrl application.

## Running the Application

1.  Click the "Run" button in your Repl to start the application.
2.  Repl.it will use Bun to run the `index.html` file, and you should see the CardCtrl application running in the browser at the provided URL (e.g., `https://your-repl-name.username.repl.co`).
3.  Test the application by clicking the "Generate Code" button to generate a code (ordinal), clicking the "Scan Card" button to scan an NFC card (requires a compatible device and browser), and clicking the "Write Card" button to write data to an NFC card (requires a compatible device and browser).

## Notes

-   The Web NFC API used for scanning and writing NFC cards is currently supported only in Chrome browser on Android devices. Make sure to test the application on a compatible device and browser.
-   The code includes a placeholder implementation for generating the code (ordinal) when the "Generate Code" button is clicked. Replace this placeholder with the actual logic to generate the ordinal based on your requirements.

## Troubleshooting

If you encounter any issues while running the CardCtrl application on Repl.it, please check the following:

-   Ensure that you have copied the HTML code and JavaScript code correctly into the `index.html` file.
-   Verify that the `.replit` file is properly configured and matches the provided configuration.
-   Make sure you are using a compatible device and browser that supports the Web NFC API (currently supported in Chrome on Android devices) for the NFC scanning and writing functionality to work as expected.

If you have any further questions or need assistance, please refer to the Repl.it documentation or reach out to the Repl.it community for support.