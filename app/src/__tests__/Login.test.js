import LoginForm from "../components/LoginForm";
import {render, screen} from '@testing-library/react';

    test("test_username_change: tests that the username input field updates its value correctly when the user types.", () => {
      render(<LoginForm />)
    });