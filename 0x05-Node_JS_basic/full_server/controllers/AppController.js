/**
 * Contains the miscellaneous route handlers.
 * @author mokhkarabo <https://github.com/mokhkarabo>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
