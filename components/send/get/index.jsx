import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import axios from "axios";

function Get() {
    const [text, setText] = React.useState("");

    function sendToBack() {
        const data = {
            data: text
        }
        axios.get("/api/get?data=" + text)
        .then(function (res) {
            console.log("resultat : " + res.data.message);
        })
        .catch(function(error) {
            console.error("error: " + error);
        });
        setText("");
    }

    const handleChange = (event) => {
        setText(event.target.value);
    };
    return (
        <Box display="flex" flexDirection="column" justifyContent={"center"} alignItems={"center"} alignContent={"center"}>
            <Paper style={{width: "50%"}} >
                <Box display="flex" flexDirection="column" justifyContent={"center"} alignItems={"center"} alignContent={"center"}>
                    <div>
                        <TextField id="standard-basic" value={text} onChange={handleChange} label="Standard" />
                    </div>
                    <div>
                        <Button style={{margin: "10px"}} variant="contained" onClick={sendToBack}>Envoyer au back</Button>
                    </div>
                </Box>
            </Paper>
        </Box>
    )
}

export default Get;
