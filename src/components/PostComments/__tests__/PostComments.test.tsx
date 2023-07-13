import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "..";

describe("Tests for the comment component", () => {
  test("Should render properly", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Should post 2 comments", () => {
    render(<PostComment />);
    for (let i = 0; i < 2; i++) {
      fireEvent.change(screen.getByTestId("comment-field"), {
        target: {
          value: "Test comment",
        },
      });
      fireEvent.click(screen.getByTestId("submit.btn"));
    }
    expect(screen.getByTestId("comment-list")).toHaveLength(2);
  });
});
