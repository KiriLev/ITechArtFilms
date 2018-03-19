import React from 'react';

import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

export default ({ input, label, type,  meta: { touched, error, submitFailed}, ...custom }) => {
    return (
        <FormControl error={submitFailed && touched && error} >
            <InputLabel>{label}</InputLabel>
            <Input type={type} onChange={input.onChange} value={submitFailed ? input.value : ''} {...input} {...custom} />
            <FormHelperText>{submitFailed && touched && error}</FormHelperText>
        </FormControl>
    );
}
