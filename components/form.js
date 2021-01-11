
export default function Contact({ name, method = "POST", action, children }) {
    return (
        <form name={name} method={method} action={action} data-netlify="true">
            <input type='hidden' name='form-name' value={name} />
            {children}
        </form>
    )
}