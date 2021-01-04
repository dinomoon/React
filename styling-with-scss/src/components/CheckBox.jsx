import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CheckBox({ checked, children, ...rest }) {
  return (
    <div className={cx('checkbox')}>
      <input id="checkbox" type="checkbox" checked={checked} {...rest} />
      <label htmlFor="checkbox" className={cx('icon')}>
        {checked ? <MdCheckBox className={cx('checked')} /> : <MdCheckBoxOutlineBlank />}
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;