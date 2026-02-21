import { confirm, ConfirmContainer } from "react-confirm-lite"
import Button from "../../ui/Button"
import CodeBlock from "../../CodeBlock"

const code = `import { confirm, ConfirmContainer } from "react-confirm-manager"

const App = () => {

    const handleClick = async () => {
            const isConfirmed = await confirm('Are you sure?')
            if (isConfirmed === null) {
                console.log('User pressed escape or clicked outside.')
            } else if (isConfirmed) {
                console.log('ok')
           } else {
                console.log('Cancle')
           }
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
    
export default App`

const Idcode = `confirm({ message:'Are you sure?', id: 'my-container' })
// later in your component
<ConfirmContainer id="my-container" />`

const Try = () => {

    const handleClick = async () => {
        const isConfirmed = await confirm('Are you sure?')
        if (isConfirmed === null) {
            console.log('User pressed escape or clicked outside.')
        } else if (isConfirmed) {
            console.log('ok')
        } else {
            console.log('Cancle')
        }
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

const BasicUsage = () => {
    return (
        <section id="basic-usage" className="pt-8 px-4 w-full">
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Basic Confirmation</h3>
                <CodeBlock code={code} language="tsx" preview={<Try />} />
            </div>
            <section id="use-of-id" className="space-y-2 pt-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Show different containers</h3>
                <p className="text-gray-600 dark:text-gray-400 p-2">You can show different containers by passing a id to the confirm function and you will also have to give the id to the ConfirmContainer component like this:</p>
                <CodeBlock
                    code={Idcode}
                    language="tsx"
                    height="50px"
                />
            </section>
            <div className="pt-8 space-y-2">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Note:
                </span>
                <p className="text-gray-600 dark:text-gray-400 p-2">
                    Make sure the id you pass to the confirm function and ConfirmContainer component are the same and don't give same id to multiple ConfirmContainer components.
                </p>
            </div>
        </section>
    )
}

export default BasicUsage