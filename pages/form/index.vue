<template lang="pug">
form.contact-form(
  name="iyu-form"
  method="POST"
  netlify-honeypot="bot-field"
  data-netlify="true"
)
  //- form start
  input(
    name="name"
    type="text"
  )
  select.category(
    name="category"
  )
  select.is-small(
    name="reservedate"
  )
  select.is-small(
    name="reservecount"
  )
  input(
    name="email"
  )
  textarea(
    name="message"
  )

</template>
