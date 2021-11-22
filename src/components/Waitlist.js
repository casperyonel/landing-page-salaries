import Button from "./Button"

const Waitlist = ({ title }) => {
    return (
            <div className='waitlist-container'>
                <div className='waitlist-container-inner'>
                    <h3>Join us on our journey.</h3>
                    <input placeholder={title} type="text" />
                    <Button />
                </div>
            </div>
    )
}

export default Waitlist
