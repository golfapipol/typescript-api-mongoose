import app from "./app";
import configs from "./configs";

const PORT = configs.app.port;

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
})