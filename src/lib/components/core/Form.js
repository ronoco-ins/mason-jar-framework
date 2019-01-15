import React from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';

const Form = props => {
  const { children } = props;
  return <form {...props}>{children}</form>;
};

const FormGroup = props => {
  const { children, className, ...rest } = props;
  const formGroupClass = cx('form-group', className);
  return (
    <div className={formGroupClass} {...rest}>
      {children}
    </div>
  );
};

const FormRow = props => {
  const { children, className, ...rest } = props;
  const formGroupClass = cx('form-row', className);
  return (
    <div className={formGroupClass} {...rest}>
      {children}
    </div>
  );
};

const FormInput = props => {
  const { validity, className, ...rest } = props;
  const formValidity = MODIFIERS.VALIDITY[validity] ? `${validity}` : null;
  const formClass = cx('form-control', formValidity, className);
  return <input className={formClass} {...rest} />;
};

const FormSelect = props => {
  const { validity, className, ...rest } = props;
  const formValidity = MODIFIERS.VALIDITY[validity] ? `${validity}` : null;
  const formClass = cx('form-control', formValidity, className);
  return <select className={formClass} {...rest} />;
};

const FormTextarea = props => {
  const { validity, className, ...rest } = props;
  const formValidity = MODIFIERS.VALIDITY[validity] ? `${validity}` : null;
  const formClass = cx('form-control', formValidity, className);
  return <textarea className={formClass} {...rest} />;
};

const FormLabel = props => {
  const { children, validity, className, ...rest } = props;
  const formValidity = MODIFIERS.VALIDITY[validity] ? `${validity}` : null;
  const formClass = cx('form-check-label', formValidity, className);
  return (
    <label className={formClass} {...rest}>
      {children}
    </label>
  );
};

const FormCheck = props => {
  const { validity, className, label, id, ...rest } = props;
  const formClass = cx('form-group form-check', className);
  return (
    <div className={formClass} {...rest}>
      <input type="checkbox" className="form-check-input" id={id} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

const FormToggle = ({ id, onChange, className, ...rest }) => {
  const toggleClass = cx('custom-control custom-checkbox-toggle', className);
  return (
    <div className={toggleClass} {...rest}>
      <input type="checkbox" className="custom-control-input" id={id} onChange={onChange} />
      <label className="custom-control-label" htmlFor={id} />
    </div>
  );
};

const FormDatepicker = props => {
  const { children, validity, className, placeholder, mode, ...rest } = props;
  const datepickerClass = cx('form-control', className);
  return (
    <input
      type="text"
      className={datepickerClass}
      placeholder={placeholder || 'Pick a date'}
      data-toggle="flatpickr"
      data-flatpickr-mode={mode || null}
      {...rest}
    />
  );
};

// TODO: Implement
const FormUpload = props => {
  const { label, formID } = props;
  return (
    <div
      className="dropzone dropzone-single"
      data-toggle="dropzone"
      data-dropzone-url="http://google.com"
    >
      <div className="fallback">
        <div className="custom-file">
          <input typename="file" className="custom-file-input" id={formID} />
          <label className="custom-file-label" htmlFor={formID}>
            {label}
          </label>
        </div>
      </div>

      <div className="dz-preview dz-preview-single">
        <div className="dz-preview-cover">
          <img className="dz-preview-img" src="..." alt="..." data-dz-thumbnail />
        </div>
      </div>
    </div>
  );
};

Form.Group = FormGroup;
Form.Row = FormRow;
Form.Input = FormInput;
Form.Select = FormSelect;
Form.Textarea = FormTextarea;
Form.Label = FormLabel;
Form.Upload = FormUpload;
Form.Toggle = FormToggle;
Form.Datepicker = FormDatepicker;
Form.Check = FormCheck;

export {
  Form,
  FormGroup,
  FormRow,
  FormInput,
  FormSelect,
  FormTextarea,
  FormLabel,
  FormUpload,
  FormDatepicker,
  FormToggle,
  FormCheck,
};