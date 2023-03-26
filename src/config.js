import {config} from 'dotenv'

config();

console.log();

export default {
    port: process.env.PORT || 3000
}