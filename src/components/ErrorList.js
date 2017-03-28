import React from "react";

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <div className="rjsf-panel rjsf-panel-danger rjsf-errors">
      <div className="rjsf-panel-heading">
        <h3 className="rjsf-panel-title">Errors</h3>
      </div>
      <ul className="rjsf-list-group">
        {errors.map((error, i) => {
          return (
            <li key={i} className="rjsf-list-group-item rjsf-text-danger">
              {error.stack}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
