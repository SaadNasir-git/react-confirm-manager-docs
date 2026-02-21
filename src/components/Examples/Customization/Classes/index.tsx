import CodeBlock from '../../../CodeBlock'

const code = `<ConfirmContainer
  classes={{
    overlay: 'custom-overlay',
    wrapper: 'custom-wrapper',
    title: 'custom-title',
    message: 'custom-message',
    button: 'custom-button',
    cancel: 'custom-cancel-button',
    ok: 'custom-ok-button'
  }}
/>`

const Classes = () => {
  return (
    <div id='classes-in-container' className='px-4'>
        <h3 className=''>Classes in Container</h3>
        <p>
            You can apply custom classes to the container element to modify its appearance. This allows for greater flexibility in styling and integrating with existing CSS frameworks.
        </p>
        <CodeBlock code={code} language="tsx" height='275px'/>
    </div>
  )
}

export default Classes