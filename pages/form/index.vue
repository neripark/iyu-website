<template lang="pug">
form.contact-form(
  name="iyu-contact-form"
  method="POST"
  netlify-honeypot="bot-field"
  data-netlify="true"
)
  //- form start
  input(
    name="Name"
    type="text"
  )
  select.category(
    name="Cateogory"
  )
  select.is-small(
    name="LiveDate"
  )
  select.is-small(
    name="TicketsCount"
  )
  input(
    name="Email"
  )
  textarea(
    name="Message"
  )

</template>
