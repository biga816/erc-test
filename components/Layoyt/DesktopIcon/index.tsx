import { Fragment } from "react";

export default (props: {src: string, children: any}) => (
  <Fragment>
    <div className="icon">
      <img src={props.src}/>
      <p>{props.children}</p>
    </div>
    <style jsx>{`
      .icon {
        text-align: center;
        width: 70px;
        padding: 8px;
      }
    `}</style>
  </Fragment>
);
