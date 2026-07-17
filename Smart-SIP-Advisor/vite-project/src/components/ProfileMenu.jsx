export default function ProfileMenu({photoUrl,name,email}){
    return(
        <>
        <div>
         <img src={photoUrl} alt="profile-photo"/>
         <span>{name}</span>
         <p>{email}</p>
         <button type="button">Logout</button>
         </div>
        </>
    )
}