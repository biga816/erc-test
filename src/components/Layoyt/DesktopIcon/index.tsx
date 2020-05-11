import { Fragment } from "react";

interface Props {
  src: string;
  children: any;
}

export default ({src, children}: Props) => (
  <Fragment>
    <div className="icon">
      <img src={src}/>
      <p>{children}</p>
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
