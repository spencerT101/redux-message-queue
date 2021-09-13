import messageItem from "./messageItem";

const messageList = ({action}) =>{

  const eachMessage = action.message.map((eachMessage, index) => {
    return <messageItem eachMessage={eachMessage}   key={index} />
});

return (
    <div>
        <ul>{eachMessage}</ul>
    </div>

)
}

export default messageList;

