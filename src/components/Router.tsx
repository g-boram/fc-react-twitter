import HomePage from 'pages/home';
import NotificationsPage from 'pages/notifications';
import PostListPage from 'pages/posts';
import PostDetail from 'pages/posts/detail';
import PostEdit from 'pages/posts/edit';
import PostNew from 'pages/posts/new';
import ProfilePage from 'pages/profile';
import ProfileEdit from 'pages/profile/edit';
import SearchPage from 'pages/search';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/posts' element={<PostListPage />}/>
      <Route path='/posts/:id' element={<PostDetail />}/>
      <Route path='/posts/new' element={<PostNew />}/>
      <Route path='/posts/edit/:id' element={<PostEdit />}/>
      <Route path='/profile' element={<ProfilePage />}/>
      <Route path='/profile/edit' element={<ProfileEdit />}/>
      <Route path='/notifications' element={<NotificationsPage />}/>
      <Route path='/search' element={<SearchPage />}/>
      <Route path='/users/login' element={<h1>login Page</h1>}/>
      <Route path='/users/signup' element={<h1>signup Page</h1>}/>
      <Route path='*' element={<Navigate replace to="/" />}/>
    </Routes>
  )
}


