import { ReactElement, ReactPortal } from "react";
import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    LoadingSpinner,
} from "./button.styles";

// type ReactText = string | number;
// type ReactChild = ReactElement | ReactText;

// interface ReactNodeArray extends Array<ReactNode> {}
// type ReactFragment = {} | ReactNodeArray;
// type ReactNode =
//     | ReactChild
//     | ReactFragment
//     | ReactPortal
//     | boolean
//     | null
//     | undefined;

// type Props = {
//     children?: ReactNode;
//     buttonType: string;
//     isLoading: boolean;
//     otherProps: string;
// };

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <LoadingSpinner /> : children}
        </CustomButton>
    );
};

export default Button;
