import { Fragment } from "react";

export default (props: {src: string}) => (
  <Fragment>
    <span className="logo-icon">
      <img className="logo-img" src={props.src}/>
    </span>
    <style jsx>{`
      .logo-icon {
        margin-left: -2px;
        margin-right: 6px;
        display: inline-flex;
        height: 100%;
        vertical-align: middle;
        align-items: center;
      }
      .logo-img {
        height: 22px;
        width: auto;
      }
    `}</style>
  </Fragment>
);
