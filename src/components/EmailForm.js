import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const EmailForm = () => {
  return (
    <Container>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        <Button>Submit</Button>
      </FormControl>
    </Container>
  )
}

export default EmailForm