import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import About from "./components/About";

const rootComponents: { [key: string]: JSX.Element } = {
    home: <Home />,
    about: <About />,
};

Object.keys(rootComponents).forEach((componentName) => {
    const matchingElements = Array.from(document.querySelectorAll(`[id^=${componentName}]`));

    matchingElements.forEach((element) => {
        if (element) {
        const root = ReactDOM.createRoot(element);
        root.render(rootComponents[componentName as keyof typeof rootComponents]);
        }
    });
});