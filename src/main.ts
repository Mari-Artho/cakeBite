import { createApp } from 'vue'
import { createPinia } from 'pinia'
const express = require('express')
const serveStatic = require('serve-static')

import App from './App.vue'
import router from './router'

import './assets/styles.scss'

const port = process.env.PORT || 8080

const app = express() // && createApp(App)
app.listen(port)
console.log(`Front-end is listening on port: ${port}`)

app.use(createPinia())
app.use(router)

app.mount('#app')
