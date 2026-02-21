import CodeBlock from "../../CodeBlock"
import ApiType from "./ApiType"
import BasicUsage from "./BasicUsage"
import Installation from "./Installation"

const QuickStart = () => {
    return (
        <section id="quick-start" className="dark:bg-gray-900/50 text-white">
            <h2 className="text-3xl font-bold w-full text-center pt-5">
                Quick Start
            </h2>
            <Installation />
            <BasicUsage />
            <ApiType />
            <div className="pt-8 space-y-2 px-4">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Important:
                </span>
                <p>
                    You will have to give an id to api and ConfirmContainer only if you're using multiple containers on the same page and want to show the specfic container when a specific api is called otherwise it will show the first rendered component. But one more thing if don't want to give the id and want to show the closest to the button then you can pass an argument to the api like this:
                </p>
                <CodeBlock language="tsx" code="confirm('Are you sure?',true)" height="h-max"/>
                <p>
                    or if you want to show the closest container everytime without passing true by confirm api then you can do like this in root component:
                </p>
                <CodeBlock language="ts" code="import { showClosest } from 'react-confirm-manager'
showClosest()" height="h-max"/>
            </div>
        </section>
    )
}

export default QuickStart