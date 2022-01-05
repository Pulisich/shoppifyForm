import React, { useCallback, useState } from 'react';
import {  Form, FormLayout, TextField } from '@shopify/polaris';

function NewForm() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = useCallback((_event) => {
    setEmail('');
    setFullName('');
    setAddress('');
    setPhone('');
    console.log("Submitted")
  }, []);



  const handleEmailChange = useCallback((value) => setEmail(value), []);
  const handleFullNameChange = useCallback((value) => setFullName(value), [])
  const handleAddressChange = useCallback((value) => setAddress(value), [])
  const handlePhoneChange = useCallback((value) => setPhone(value), [])


  return (
    <Form onSubmit={handleSubmit}>

      <FormLayout>

        <TextField
          value={fullName}
          onChange={handleFullNameChange}
          label="Full Name"
          autoComplete='name'


        />
         <TextField
          value={phone}
          onChange={handlePhoneChange}
          label="Phone Number"
          type="tel"
          autoComplete="phone"

        /> 
        
        <TextField
          value={address}
          onChange={handleAddressChange}
          label="Address"
          type="text"
          autoComplete="address"

        />
        <TextField
          value={email}
          onChange={handleEmailChange}
          label="Email"
          type="email"
          autoComplete="email"

        />

       
      </FormLayout>

    </Form>
  );
}

export default NewForm;