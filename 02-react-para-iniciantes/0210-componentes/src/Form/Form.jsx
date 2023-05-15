import React from 'react'
import Input from './Input'
import Buttuon from './Buttuon'

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      <p>
        </p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Buttuon />
    </form>
  )
}

export default Form
