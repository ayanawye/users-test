import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import UserItem from "./UserItem";

describe("Test users", () => {
  test('render learn react link', () => {
    const user = {
      id: 1,
      avatar_url: "https://example.com/avatar.png",
      login: "testuser",
      type: "user",
    };
  
    render(<UserItem user={user} index={0} />);
    
    expect(typeof user).toBe("object");
        screen.debug()
  })
})