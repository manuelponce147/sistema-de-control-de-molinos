import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb://localhost/molinos', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
        .then(() => console.log('Database is connected'))
        .catch(err => {
            console.log(`DB Connection Error: ${err.message}`);
        });

}
