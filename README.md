# Jessie's OH - June 7th

## General Step Guidelines for Jessie
1. Probably a good idea to render some basic HTML on your browser through your React component's return statements. 
2. If you are using data on your site, you should probably create some state to manage it. 

## Questions

### Q: I want to see something appear on my React website (just basic HTML). 
- A: Anything you write in the return statement of a React component will appear on your browser. 

### Q: I now want to use JavaScript to save some data on my component. 
- A: Use the useState hook (aka function). 

### Q: I want to render some state data in my return statement of my component? 
- A: Use JS curly braces and within those braces, write whatever you want to render 

### Q: I want to render some more complex state data like an array of objects. 
- A: Use a ternary operator in your return statement. (See App.jsx file) 

### Q: Using the useEffect hook
- This hook will run a callback function during one of those 3 scenarios:
    - The component is mounted
        - []
    - The component is updated
        - [nameOfVar]
    - Or both
        - omit the dependency array