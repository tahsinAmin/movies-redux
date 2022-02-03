# Project Status: Incomplete

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Setup

```
git clone https://github.com/tahsinAmin/movies-redux.git
npm i
npm run start
```

Then hit `http://localhost:3000/` in the url

# What I've learned

- [React-router-dom's Switch has changed to Routes.](https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom)

- We want to run thew useEffect whenever we change the id:

```
useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]);
```

- createSlice, createAsyncThunk

# Todos

- [ ] Adding Carousal
