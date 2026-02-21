import CodeBlock from "../../../CodeBlock"
import Button from "../../../ui/Button"

import { ConfirmContainer, confirm, type ColorSchema } from "react-confirm-lite"

const ThemeCode = (theme: ColorSchema) => {

    return `const App = () => {

    const handleClick = async () => {
        const isConfirmed = await confirm('Are you sure?')
        if (isConfirmed === null) console.log('User clicked outside or pressed escape')
        else if (isConfirmed) console.log('Ok')
        else console.log('Cancle')
    }

    return (
        <div>
            <button onClick={handleClick}>
                Try
            </button>
            <ConfirmContainer defaultColorSchema="${theme}" />
        </div>
    )
}`
}

const ThemePreview = ({ theme }: { theme: ColorSchema }) => {

    const handleClick = async () => {
        const isConfirmed = await confirm('Are you sure?')
        if (isConfirmed === null) console.log('User clicked outside or pressed escape')
        else if (isConfirmed) console.log('Ok')
        else console.log('Cancle')
    }

    return (
        <div>
            <Button onClick={handleClick}>
                Try
            </Button>
            <ConfirmContainer defaultColorSchema={theme} />
        </div>
    )
}

const FullBlock = ({ theme }: { theme: ColorSchema }) => {
    return (
        <div>
            <h4>
                {theme.capitalize()} Theme
            </h4>
            <CodeBlock code={ThemeCode(theme)} language="tsx" preview={<ThemePreview theme={theme} />} />
        </div>
    )
}

const Themes = () => {
    const themes: ColorSchema[] = ['blue', 'dark', 'green', 'light', 'purple', 'red']
    return (
        <section id="themes">
            <h3>
                Themes
            </h3>
            {themes.map((theme, index) => (
                <FullBlock theme={theme} key={index} />
            ))}
        </section>
    )
}

export default Themes