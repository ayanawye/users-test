import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import axios from "axios";
import UserModal from "./UserModal";

jest.mock('axios')

describe("Test user data", () => {
  let responce;
  beforeEach(() => {
    responce = {
      data: [
        {
          "id": 666379404,
          "node_id": "R_kgDOJ7gkjA",
          "name": "aws-robomaker-robotics-curriculum",
          "full_name": "ssshammi/aws-robomaker-robotics-curriculum",
          "private": false,
          "owner": {
            "login": "ssshammi",
            "id": 2300969,
            "node_id": "MDQ6VXNlcjIzMDA5Njk=",
            "avatar_url": "https://avatars.githubusercontent.com/u/2300969?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ssshammi",
            "html_url": "https://github.com/ssshammi",
            "followers_url": "https://api.github.com/users/ssshammi/followers",
            "following_url": "https://api.github.com/users/ssshammi/following{/other_user}",
            "gists_url": "https://api.github.com/users/ssshammi/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ssshammi/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ssshammi/subscriptions",
            "organizations_url": "https://api.github.com/users/ssshammi/orgs",
            "repos_url": "https://api.github.com/users/ssshammi/repos",
            "events_url": "https://api.github.com/users/ssshammi/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ssshammi/received_events",
            "type": "User",
            "site_admin": false
          },
          "html_url": "https://github.com/ssshammi/aws-robomaker-robotics-curriculum",
          "description": "Introductory robotics curriculum",
          "fork": true,
          "url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum",
          "forks_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/forks",
          "keys_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/teams",
          "hooks_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/hooks",
          "issue_events_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/issues/events{/number}",
          "events_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/events",
          "assignees_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/assignees{/user}",
          "branches_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/branches{/branch}",
          "tags_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/tags",
          "blobs_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/languages",
          "stargazers_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/stargazers",
          "contributors_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/contributors",
          "subscribers_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/subscribers",
          "subscription_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/subscription",
          "commits_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/issues/comments{/number}",
          "contents_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/contents/{+path}",
          "compare_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/merges",
          "archive_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/downloads",
          "issues_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/issues{/number}",
          "pulls_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/labels{/name}",
          "releases_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/releases{/id}",
          "deployments_url": "https://api.github.com/repos/ssshammi/aws-robomaker-robotics-curriculum/deployments",
          "created_at": "2023-07-14T11:16:51Z",
          "updated_at": "2023-07-14T11:16:51Z",
          "pushed_at": "2022-01-06T16:37:21Z",
          "git_url": "git://github.com/ssshammi/aws-robomaker-robotics-curriculum.git",
          "ssh_url": "git@github.com:ssshammi/aws-robomaker-robotics-curriculum.git",
          "clone_url": "https://github.com/ssshammi/aws-robomaker-robotics-curriculum.git",
          "svn_url": "https://github.com/ssshammi/aws-robomaker-robotics-curriculum",
          "homepage": "",
          "size": 566412,
          "stargazers_count": 0,
          "watchers_count": 0,
          "language": null,
          "has_issues": false,
          "has_projects": true,
          "has_downloads": true,
          "has_wiki": true,
          "has_pages": false,
          "has_discussions": false,
          "forks_count": 0,
          "mirror_url": null,
          "archived": false,
          "disabled": false,
          "open_issues_count": 0,
          "license": {
            "key": "cc-by-4.0",
            "name": "Creative Commons Attribution 4.0 International",
            "spdx_id": "CC-BY-4.0",
            "url": "https://api.github.com/licenses/cc-by-4.0",
            "node_id": "MDc6TGljZW5zZTI1"
          },
          "allow_forking": true,
          "is_template": false,
          "web_commit_signoff_required": false,
          "topics": [
      
          ],
          "visibility": "public",
          "forks": 0,
          "open_issues": 0,
          "watchers": 0,
          "default_branch": "main"
        },
      ]
    }
  })
  test('render learn react link', async () => {
    axios.get.mockReturnValue(responce)
    render(<UserModal/>)
    const repos = await screen.findAllByTestId('repo')
    expect(repos.length).toBe(1)
    expect(axios.get).toBeCalledTimes(1)
    screen.debug()
  })
})