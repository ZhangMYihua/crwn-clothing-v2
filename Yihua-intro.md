Remember to replace the config variable in your firebase.utils.js with your own config object from the firebase dashboard! Navigate to the project settings gear icon > project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.
<img width="1261" alt="Screen Shot 2022-03-11 at 8 51 22 PM" src="https://user-images.githubusercontent.com/10578605/157999158-10e921cc-9ee5-46f6-a0c5-1ae5686f54f3.png">
# Branching strategy
After forking this repository and cloning it down, you will have access to all the lesson branches with code at different checkpoints throughout the course. If for some reason you need to work from the codebase at one of these lesson branch checkpoints, follow these steps:
1. Checkout to the lesson-# (let's use lesson-15 as an example) branch
```
git checkout lesson-15
```
2. Branch off from lesson-15. This will create a new branch where the code of lesson-15 is the basis for your new branch. You can name your new branch whatever you want! Let's say we use my-main-branch as the name.
```
git checkout -b my-main-branch
```
3. Now you can just code on this branch, push code from this branch up to your forked repo etc. The main thing to remember is that you want to be on this branch for your own code, so remember what you named this branch!
