import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import axios from "axios";
import UserList from "./UserList";

jest.mock('axios')

describe("Test users", () => {
  let responce;
  beforeEach(() => {
    responce = {
      data: {
        items: [
        {
          "login": "sss-software",
          "id": 33617781,
          "node_id": "MDQ6VXNlcjMzNjE3Nzgx",
          "avatar_url": "https://avatars.githubusercontent.com/u/33617781?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/sss-software",
          "html_url": "https://github.com/sss-software",
          "followers_url": "https://api.github.com/users/sss-software/followers",
          "following_url": "https://api.github.com/users/sss-software/following{/other_user}",
          "gists_url": "https://api.github.com/users/sss-software/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/sss-software/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/sss-software/subscriptions",
          "organizations_url": "https://api.github.com/users/sss-software/orgs",
          "repos_url": "https://api.github.com/users/sss-software/repos",
          "events_url": "https://api.github.com/users/sss-software/events{/privacy}",
          "received_events_url": "https://api.github.com/users/sss-software/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        },
        {
          "login": "sssss38438",
          "id": 53129962,
          "node_id": "MDQ6VXNlcjUzMTI5OTYy",
          "avatar_url": "https://avatars.githubusercontent.com/u/53129962?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/sssss38438",
          "html_url": "https://github.com/sssss38438",
          "followers_url": "https://api.github.com/users/sssss38438/followers",
          "following_url": "https://api.github.com/users/sssss38438/following{/other_user}",
          "gists_url": "https://api.github.com/users/sssss38438/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/sssss38438/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/sssss38438/subscriptions",
          "organizations_url": "https://api.github.com/users/sssss38438/orgs",
          "repos_url": "https://api.github.com/users/sssss38438/repos",
          "events_url": "https://api.github.com/users/sssss38438/events{/privacy}",
          "received_events_url": "https://api.github.com/users/sssss38438/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        },
        {
          "login": "sss072",
          "id": 67024370,
          "node_id": "MDQ6VXNlcjY3MDI0Mzcw",
          "avatar_url": "https://avatars.githubusercontent.com/u/67024370?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/sss072",
          "html_url": "https://github.com/sss072",
          "followers_url": "https://api.github.com/users/sss072/followers",
          "following_url": "https://api.github.com/users/sss072/following{/other_user}",
          "gists_url": "https://api.github.com/users/sss072/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/sss072/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/sss072/subscriptions",
          "organizations_url": "https://api.github.com/users/sss072/orgs",
          "repos_url": "https://api.github.com/users/sss072/repos",
          "events_url": "https://api.github.com/users/sss072/events{/privacy}",
          "received_events_url": "https://api.github.com/users/sss072/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        }
      ]
      }
    }
  })
  test('render learn react link', async () => {
    axios.get.mockReturnValue(responce)
    render(<UserList/>)
    const input = screen.getByPlaceholderText(/Find users/i)
    userEvent.type(input, 'sss')
    const users = await screen.findAllByTestId('user')
    expect(users.length).toBe(3)
    expect(axios.get).toBeCalledTimes(1)
    screen.debug()
  })
})