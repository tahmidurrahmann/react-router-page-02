import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
import ShowDetails from './components/ShowDetails/ShowDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Comments from './components/Comments/Comments.jsx';
import CommentDetails from './components/CommentDetails/CommentDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path : '/user/:detailsId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.detailsId}`),
        element : <ShowDetails></ShowDetails>
      },
      {
        path : '/posts',
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element : <Posts></Posts>
      },
      {
        path : '/post/:postId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element : <PostDetails></PostDetails>
      },
      {
        path : '/comments',
        loader : () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element : <Comments></Comments>
      },
      {
        path : '/comment/:commentId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element : <CommentDetails></CommentDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)