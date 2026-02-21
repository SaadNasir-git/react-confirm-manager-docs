import { confirm, ConfirmContainer } from "react-confirm-lite"
import CodeBlock from "../../CodeBlock"
import Button from "../../ui/Button"

const code = `const handleClick = async () => {
    const isConfirmed = await confirm('Are you sure?')
    if (isConfirmed === null) console.log('User clicked outside or pressed escape')
    else if (isConfirmed) console.log('Ok')
    else console.log('Cancle')
}`

const Preview = () => {

    const handleClick = async() => {
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
            <ConfirmContainer />
        </div>
    )
}

const SimpleApi = () => {
    return (
        <section id="simple-api">
            <h3 className="pb-6">
                Simple Api
            </h3>
            <CodeBlock code={code} language="javascript" height="h-[164px]" preview={<Preview />} />
        </section>
    )
}

export default SimpleApi