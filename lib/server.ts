import app from './app';
const PORT = 3000;

app.listen(PORT, () => {
    console.log('Ready')
    console.log(`Server listening on port ${PORT}`);
});