import { confirm, ConfirmContainer } from "react-confirm-lite"
import CodeBlock from "../../CodeBlock"
import Button from "../../ui/Button"

const code = `const handleClick = async () => {
    const isConfirmed = await confirm({
        title: 'Alert!',
        message: 'Are you sure',
        okText: 'Yes',
        cancelText: 'No'
    })

    if (isConfirmed === null) console.log('User clicked outside or pressed escape')
   else if (isConfirmed) console.log('Ok')
   else console.log('Cancle')
}`

const Preview = () => {

    const handleClick = async () => {
        const isConfirmed = await confirm({
            title: 'Alert!',
            message: 'Are you sure',
            okText: 'Yes',
            cancelText: 'No'
        })

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

const ApiOptions = () => {
    return (
        <section id="api-options">
            <h3 className="pb-6">
                Api with options
            </h3>
            <CodeBlock code={code} language="javascript" preview={<Preview />} height="h-[296px]" />
        </section>
    )
}

export default ApiOptions