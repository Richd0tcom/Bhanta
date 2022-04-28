import { auth } from "../init-firebase.config"


const Message = ({id, value, img, uid}) => {
 const sent = uid == auth.currentUser.uid
  return (
    <div className="chat-message" key={id} >
            <div className={ `flex items-end ${ sent ? 'justify-end' : ''}` } >
               <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${ sent ? 'order-1' : 'order-2'} items-start`}>
                  <div><span className={`px-4 py-2 rounded-lg inline-block rounded-bl-none ${sent ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>{value}</span></div>
               </div>
               <img
                  src={img}
                  alt="My profile" className={`w-6 h-6 rounded-full ${ sent ? 'order-2' : 'order-1'}`} />
            </div>
    </div>
  )
}

export default Message;