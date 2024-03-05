
const Header = () => {
    return (
        <div className="tw-flex tw-justify-evenly  tw-items-center tw-py-4 tw-bg-slate-900 tw-text-slate-50 tw-shadow-md">
        <div >
        <h1 className=" tw-font-bold  tw-text-2xl ">#Hashblank</h1>
        </div>
        <div>
            <input type="text" className="tw-px-14 tw-py-1 tw-mx-3  tw-rounded-md  tw-bg-slate-600"/>
        </div>
        <div >
          <ul className="tw-flex ">
            <li className="tw-mx-2 tw-font-bold">Blog</li>
            <li className="tw-mx-2 tw-font-bold">Notification</li>
            <li className="tw-mx-2 tw-font-bold">Profile</li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Header