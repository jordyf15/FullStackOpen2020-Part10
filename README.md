# Full Stack Open 2020 Part 10
In part 10, we will learn how to build native Android and iOS mobile applications with JavaScript and React using the React Native framework.  
  
This part consist of 4 sections, they are:  
1. Introduction to React Native:  
In this section we will focus on setting up the development environment and also initializing the application with Expo.
2. React Native Basics:  
In this section we will learn how to build user interfaces with React Native's core components, how to add style properties to these core components, how to transition between views, and how to manage form's state efficiently.
3. Communicating with Server:  
In this section we will learn how to communicate with a server using HTTP requests, how to use Apollo Client in a React Native application, and how to store data in the user's device.
4. Testing and extending our application:  
In this section we will learn how to test our react-native application and also extending its features with what we learned from the previous sections.

## Live Demo
Because there is no sandbox that could be used to make the live demo (Repl does not support react native any longer and snack has an issue with importing from github). Here are some screenshot of the application.
- View of Repository List :  
![RepositoryListView](https://i.pinimg.com/originals/be/15/8c/be158c12b54402ced52f878398d7c8f3.jpg)
- View of Sign Up :  
![SignUpView](https://i.pinimg.com/originals/b8/94/c7/b894c7be016cff3a0d51a91cd7011c2d.jpg)
- View of Log In :  
![LogInView](https://i.pinimg.com/originals/76/17/a0/7617a0c3dedd1ed7c80884ffa54d3bc7.jpg)
- View of Create Review (Available for logged in user only) :  
![CreateReviewView](https://i.pinimg.com/originals/ad/55/51/ad5551ea5d95a2c036c346066e440774.jpg)
- View of My Review (Available for logged in user only) :  
![MyReviewView](https://i.pinimg.com/originals/e2/bf/45/e2bf4511706b005d4827a92e10538b80.jpg)

## Application Usage
The usage of this application is pretty straightforward, user can view reviewed repositories along with it's ratings and details. User can also see and create review for a repository although some feature needs the user to be logged in first. User can log in or create a new accont if they haven't.

## Technologies Used
1. React version ~16.11.0
2. @apollo/react-hooks version ^4.0.0
3. @react-native-community/async-storage version ~1.11.0
4. apollo-boost version ^0.4.9
5. date-fns version ^2.16.1
6. dotenv version ^8.2.0
7. Expo version ~38.0.8
8. expo-status-bar version ^1.0.2
9. formik version ^2.2.5
10. graphql version ^15.4.0
11. react-dom version ~16.11.0
12. react-native version https://github.com/expo/react-native/archive/sdk-38.0.2.tar.gz
13. react-native-paper version ^4.4.1
14. react-native-picker-select version ^8.0.4
15. react-native-web version ~0.11.7
16. react-router-native version ^5.2.0
17. use-debounce version ^5.1.0
18. yup version ^0.32.1
19. @babel/core version ^7.8.6
20. @expo/webpack-config version ^0.12.48
21. @testing-library/jest-native version ^3.4.3
22. @testing-library/react-native version ^7.1.0
23. babel-eslint version ^10.1.0
24. babel-preset-expo version ~8.1.0
25. eslint version ^7.14.0
26. eslint-plugin-jest version ^24.1.3
27. eslint-plugin-react version ^7.21.5
28. jest version ^26.6.3
29. jest-expo version ^39.0.0

## Exercises Development
1. Exercise 10.1 or Step 1:  
In step 1 we have to initialize our application with Expo command-line interface and set up the development environment either using an emulator or Expo's mobile app.
2. Exercise 10.2 or Step 2:  
In step 2 we have to set up ESLint in our project so that we can perform linter checks by running npm run lint.
3. Exercise 10.3 or Step 3:  
In step 3 we have to implement the first version of the reviewed repositories list. The list should contain the repository's full name, description, language, number of forks, number of stars, rating average and number of reviews. The repositories data are hard-coded for now.
4. Exercise 10.4 or Step 4:  
In step 4 we need to implement an app bar to display tabs for switching between different views.
5. Exercise 10.5 or Step 5:  
In step 5 we need to polished the view of the reviewed repositories list. 
6. Exercise 10.6 or Step 6:  
In step 6 we need to make a sign in view and also add a sign in tab in the app bar that could be used to switch to sign in view.
7. Exercise 10.7 or Step 7:  
In step 7 we need to implement horizontal scrolling to our app bar using the ScrollView component.
8. Exercise 10.8 or Step 8:  
In step 8 we need to implement a sign in form to the sign in view using Formik.
9. Exercise 10.9 or Step 9:  
In step 9 we need to validate the sign in form so that both username and password fields are required.
10. Exercise 10.10 or Step 10:  
In step 10 we need to implement the platform specific font. In the Android platform use the Roboto font and in the iOS platform use the Arial font. The default font can be System.
11. Exercise 10.11 or Step 11:  
In step 11 we need to fetch the repositories data using a graphql query to the server. (The server were prepared during the lessons before this exercise 10.11).
12. Exercise 10.12 or Step 12:  
In step 12 we need to use an environment variable for the Apollo Server's URL for initializing the Apollo Client.
13. Exercise 10.13 or Step 13:  
In step 13 we need to implement the authorize mutation to the sign in form we created earlier.
14. Exercise 10.14 or Step 14:  
In step 14 we need to implement our AuthStorage so we can store data in our device.
15. Exercise 10.15 or Step 15:  
In step 15 we need to improve our application so that when user log in, the token received are stored in the user's device.
16. Exercise 10.16 or Step 16:  
In step 16 we need to implement a sign out feature which will remove the token from the user's device.
17. Exercise 10.17 or Step 17:  
In step 17 we need to implement a test that ensures the application renders  repository's name, description, language, forks count, stargazers count, rating average, and review count correctly.
18. Exercise 10.18 or Step 18:  
In step 18 we need to implement a test that ensures that filling the sign in form's username and password fields and pressing the submit button will call the onSubmit handler with correct arguments. 
19. Exercise 10.19 or Step 19:  
In step 19 we need to implement a view for a single repository, which contains the same repository information as in the reviewed repositories list but also a button for opening the repository in GitHub.
20. Exercise 10.20 or Step 20:  
In step 20 we need to improve the view for the single repository, so that it also renders all the reviews for that repository.
21. Exercise 10.21 or Step 21:  
In step 21 we need to implement a form for creating a new review with formik.
22. Exercise 10.22 or Step 22:  
In step 22 we need to implement a form for registering a new user account with formik.
23. Exercise 10.23 or Step 23:  
In step 23 we need to implement a feature that allows users to select the principle, which is used to order the repositories. 
24. Exercise 10.24 or Step 24:  
In step 24 we need to implement a feature for filtering the reviewed repositories list based on a keyword.
25. Exercise 10.25 or Step 25:  
In step 25 we need to implement infinite scrolling for the repository's reviews list and also cursor-based pagination.
26. Exercise 10.26 or Step 26:  
In step 26 we need to implement a feature which allow the user to view reviews that they created in the My Review view.
27. Exercise 10.27 or Step 27:  
In step 27 we need to two buttons for each review in the My review view where one button will redirect the user to the repository view of the review and the other button will delete the review.