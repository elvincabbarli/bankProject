import { Button } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { stepSliceAction } from '../store/step-slice';

const SummaryStep = () => {
    const finalData = useSelector(state => state.stepReducer.finalData);
    const creditData = useSelector(state => state.stepReducer.confirmedCreditData);
        const dispatch = useDispatch();

    const handleConfirm = () => {
        dispatch(stepSliceAction.addCreditData(finalData));
        window.localStorage.setItem('allCreditData', JSON.stringify([...creditData, finalData]))
    };

  return (
    <div 
        style={{ 
            textAlign: 'center' 
        }}
    >
        <h2>Xülasə</h2>
        <div>
            <h4>First Name:</h4>
            <p>{finalData.firstName}</p>
        </div>
        <div>
            <h4>Last Name:</h4>
            <p>{finalData.lastName}</p>
        </div>
        <div>
            <h4>Email:</h4>
            <p>{finalData.email}</p>
        </div>
        <div>
            <h4>Contact Number:</h4>
            <p>{finalData.contactNumber}</p>
        </div>
        <div>
            <h4>Country:</h4>
            <p>{finalData.country}</p>
        </div>
        <div>
            <h4>District:</h4>
            <p>{finalData.district}</p>
        </div>
        <div>
            <h4>City:</h4>
            <p>{finalData.city}</p>
        </div>
        <div>
            <h4>Land Mark:</h4>
            <p>{finalData.landMark}</p>
        </div>
        <div>
            <h4>Postal Code:</h4>
            <p>{finalData.postalCode}</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <Button onClick={handleConfirm} color='info' variant='contained'>Təsdiq et</Button>
            <Button color='error' variant='contained'>İmtina et</Button>
        </div>
    </div>
  )
}

export default SummaryStep