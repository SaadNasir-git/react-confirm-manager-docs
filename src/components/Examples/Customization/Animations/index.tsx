import { confirm, ConfirmContainer, type AnimationType } from "react-confirm-lite"
import Button from "../../../ui/Button"
import CodeBlock from "../../../CodeBlock"

const AnimationCode = (animation: AnimationType) => {

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
            <ConfirmContainer animation="${animation}" />
        </div>
    )
}`
}

const AnimationPreview = ({ animation }: { animation: AnimationType }) => {

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
            <ConfirmContainer animation={animation} />
        </div>
    )
}

const FullBlock = ({ animation }: { animation: AnimationType }) => {
    return (
        <div>
            <h4>
                {animation.capitalize()} Animation
            </h4>
            <CodeBlock code={AnimationCode(animation)} language="tsx" preview={<AnimationPreview animation={animation} />} />
        </div>
    )
}

const firstAnimationDurationPreview = () => {
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
            <ConfirmContainer animation="bounce" animationDuration={500} />
        </div>
    )
}

const secondAnimationDurationPreview = () => {
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
            <ConfirmContainer animation="bounce" animationDurationIn={500} animationDurationOut={200} />
        </div>
    )
}

const Animations = () => {
    const animations: AnimationType[] = ['bounce', 'bounceSmall', 'drop', 'fadeBlur', 'fadeDown', 'fadeScale', 'fadeShrink', 'fadeUp', 'flip', 'rotate', 'rotateRight', 'slide', 'slideLeft', 'slideRight', 'zoom', 'zoomSmall']
    return (
        <section id="animations" >
            <h3>
                Animations
            </h3>
            {animations.map((animation, index) => (
                <FullBlock animation={animation} key={index} />
            ))}
            <div className="mt-8">
                <h3>
                    Animation Timing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 p-2">
                    You can also customize the animation timing by passing the <code>animationDuration</code> prop to the <code>ConfirmContainer</code> component. The default value is <code>300</code> milliseconds.
                </p>
                <CodeBlock code={`<ConfirmContainer animation="bounce" animationDuration={500} />`} language="tsx" height="25px" preview={firstAnimationDurationPreview()} />
                <p className="text-gray-600 dark:text-gray-400 p-2">
                    In this example, the animation will take <code>500</code> milliseconds to complete.
                </p>
            </div>
            <section id="more">
                <h3>
                    Separate Animation Durations
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 p-2">
                    You can also customize the animation duration of by passing the <code>animationDurationIn</code> prop to the <code>ConfirmContainer</code> component and <code>animationDurationOut</code> for the exit animation.
                </p>
                <CodeBlock code={`<ConfirmContainer animation="bounce" animationDurationIn={500} animationDurationOut={200} />`} language="tsx" height="25px" preview={secondAnimationDurationPreview()} />
                <p className="text-gray-600 dark:text-gray-400 mb-4 p-2">
                    In this example, the enter animation will take <code>500</code> milliseconds to complete and the exit animation will take <code>200</code> milliseconds to complete.
                </p>
            </section>
        </section>
    )
}

export default Animations