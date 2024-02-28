const Notification = (props) => {
    if (props.class === null) {
        return (null)
    }
    else if (props.class === 'warning-error'){
        return (
            <div className='warning-error'> 
            There was an error
        </div>
        )
    }
    else {
    return (
        <div className='warning-success'> 
            Added successfully
        </div>
    )
    }
}

export default Notification