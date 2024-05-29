import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
    return (
        <FormGroup className='pt-9'>
            {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}
            <FormControlLabel required control={<Checkbox />} label="I have read the above information" />

            {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
        </FormGroup>
    );
}