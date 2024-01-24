
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import { createReduxStore } from "../../store/store";
import {Provider} from "react-redux";
describe("Counter test", () => {
  test("router", async () => {
    render(
        <Provider store={createReduxStore({
             counter: {  //initialState
            value: 10
        }
        })}>
     <Counter/>
    </Provider>
   
    );

    const incrementBtn = screen.getByTestId("increment-btn");
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    userEvent.click(incrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });
});
