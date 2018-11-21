import fetch from 'cross-fetch'
export function selectSubreddit (subreddit) {
  return {
    type: 'SELECT_SUBREDDIT',
    subreddit
  }
}

export function invalidatesubreddit (subreddit) {
  return {
    type: 'INVALIDATE_SUBREDDIT',
    subreddit
  }
}

export function requestPosts(subreddit) {
  return {
    type: 'REQUEST_POSTS',
    subreddit
  }
}

export function receivePosts(subreddit, json) {
  return {
    type: 'RECEIVE_POSTS',
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPosts (subreddit) {
  console.log('subreddit ------- ', subreddit)
  return function (dispatch) {
    dispatch(requestPosts(subreddit))

    return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
      .then(
        res => res.json(),
        err => console.log('An error occurred', err)
      )
      .then(
        json => dispatch(receivePosts(subreddit, json))
      )
  }
}