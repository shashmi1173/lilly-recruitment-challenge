# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach
To tackle this challenge, I began by breaking down the project into smaller, manageable tasks. I started with the front-end development, creating the HTML structure and styling it with CSS. This allowed me to visualize the application and understand how the user interface would function. After establishing the front-end, I moved on to the back-end, setting up a simple API to handle CRUD operations for the medicine data.

I utilized various online resources, including MDN Web Docs for HTML/CSS best practices and the Fetch API documentation for making asynchronous requests.

## Objectives - Innovative Solutions
One of the key objectives was to implement a user-friendly interface for searching, adding, updating, and deleting medicines. I am particularly proud of the search functionality, which allows users to find medicines by name quickly. I implemented an event listener that triggers a fetch request to the API, returning results dynamically without needing to refresh the page.

I also focused on input validation, ensuring that the price fields accepted only float values. This was achieved by using the step attribute in the input fields, which enhances user experience by preventing invalid entries.
## Problems Faced
During Development I encoutered many challenges. One significant challenge was issue with the search functionality, where the API was not returning the expected results. After debugging, I realized that the URL construction for the fetch request was incorrect. I corrected the URL format and added error handling to provide feedback to the user if a medicine was not found.

Another challenge was my forEach loop didn't iterate over the json data. Since the data was not in an array, it took me some time to understand what my error was. I realized that I was accessing the data in a wrong way and corrected it.
## Evaluation
Overall, I felt positive about the challenge. The project allowed me to apply my knowledge of front-end and back-end development in a practical way. The search and CRUD functionalities worked well, and I was able to implement responsive design principles.

Some parts went smoother than others; for instance, setting up the initial HTML and CSS was straightforward, while debugging the API interactions took more time than anticipated. If I were to do this again with more time, I would focus on enhancing the user interface further, perhaps by adding more visual feedback for actions (like loading indicators) and improving the overall user experience with better error handling and notifications.