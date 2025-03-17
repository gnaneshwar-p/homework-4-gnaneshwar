# Homework 4

Run the app that you had created last week (**homework 3)** on the cloud.

1. Research PAAS (Platform As A Service) providers
    
2. Pick one you are comfortable with (make sure it runs Node.JS).

6. Clone your HW3 

7. Update your “**webapp.js**” code
    1. Update the line of **app.listen(8002)**; with the code below, so, your platform can assign any available port during runtime:

    ```bash
    //If the code runs on Heroku, assign a dynamic port number
    let port = process.env.PORT;

    //If it runs locally assign 8002 static port
    if (port == null || port == "") {
      port = 8002;
    }
    app.listen(port);
    ```

8. Update other configuration files as needed
9. Push your code to your platform.
10. Run your app!
11. Add your app link to the HW4 lesson in EdStem. Make sure it runs at least a week so I can check them during grading.
12. If there are any problems check your platform for help documents. Add your solution to the weekly reflection.
    
