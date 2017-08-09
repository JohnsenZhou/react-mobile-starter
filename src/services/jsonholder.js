import request from '../utils/request';

export function getPostsList() {
  return request('/replace/posts');
}

export function getPostDetail(id) {
  return request(`/replace/posts/${id}`);
}

export function updatePostDetail(values) {
  return request(`/replace/posts/${values.id}`, {
    method: 'PUT',
    data: values,
  });
}

export function getPostComment(id) {
  return request(`/replace/posts/${id}/comments`);
}

export function getUsers() {
  return request('/replace/users');
}

export function getUserDetail(userId) {
  return request(`/replace/users/${userId}`);
}

export function getUserTodoList(userId) {
  return request(`/replace/users/${userId}/todos`);
}

export function getUserPostList(userId) {
  return request(`/replace/users/${userId}/posts`);
}

export function getUserAlbumsList(userId) {
  return request(`/replace/users/${userId}/albums`);
}

export function getAlbums() {
  return request('/replace/albums');
}

export function getAlbumDetail(id) {
  return request(`/replace/albums/${id}/photos`);
}
